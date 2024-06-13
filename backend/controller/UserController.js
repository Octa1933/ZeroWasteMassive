const bcrypt = require('bcryptjs');
const db = require('../database/connection');
const { createResponse } = require('../helper/responseHelper');
const { statusCodes } = require('../helper/statusCodeHelper');

const register = async (req, res) => {
    const { name,email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 12);
        await db.query(
            'INSERT INTO users (name,email, password) VALUES (?,?,?)',
            [name,email, hashedPassword]
        );

        res.status(statusCodes.CREATED).json(createResponse(statusCodes.CREATED, 'User registered successfully'));
        
    } catch (error) {
        if (error.code === 'ER_DUP_ENTRY') {
            return res.status(statusCodes.CONFLICT).json(createResponse(statusCodes.CONFLICT, 'Email already exists'));
        }
        console.error('Registration error:', error);
        res.status(statusCodes.SERVER_ERROR).json(createResponse(statusCodes.SERVER_ERROR, 'Failed to register user'));
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const result = await db.query('SELECT * FROM users WHERE email = ?', [email]);
        const user = result[0];

        if (!user) {
            return res.status(statusCodes.NOT_FOUND).json(createResponse(statusCodes.NOT_FOUND, 'User not found'));
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(statusCodes.UNAUTHORIZED).json(createResponse(statusCodes.UNAUTHORIZED, 'Incorrect password'));
        }

        res.json(createResponse(statusCodes.OK, 'Login successful', { id: user.id,name : user.name,  email: user.email, phone_number: user.phone_number, address: user.address }));
    } catch (error) {
        console.error('Login error:', error);
        res.status(statusCodes.SERVER_ERROR).json(createResponse(statusCodes.SERVER_ERROR, 'Failed to login'));
    }
};

const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const rows = await db.query('SELECT * FROM users WHERE id = ?', [id]);
        if (rows.length > 0) {
            res.json(createResponse(statusCodes.OK,'Success', rows[0]));
        } else {
            res.status(statusCodes.NOT_FOUND).json(createResponse(statusCodes.NOT_FOUND, 'User not found'));
        }
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(statusCodes.SERVER_ERROR).json(createResponse(statusCodes.SERVER_ERROR, 'Failed to fetch user'));
    }
};

const getAllUsers = async (req, res) => {
    try {
        const rows = await db.query('SELECT * FROM users');
        res.json(createResponse(statusCodes.OK,'Success', rows));
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(statusCodes.SERVER_ERROR).json(createResponse(statusCodes.SERVER_ERROR, 'Failed to fetch users'));
    }
};

module.exports = { register, login, getUserById, getAllUsers };