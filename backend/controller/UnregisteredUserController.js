const db = require('../database/connection');
const { createResponse } = require('../helper/responseHelper');
const { statusCodes } = require('../helper/statusCodeHelper');
const { errorHandler } = require('../helper/errorHelper');

const createUnregisteredUser = async (req, res) => {
    try {
        const { name, phone_number, address, email } = req.body;
        const result = await db.query('INSERT INTO unregistered_users (name, phone_number, address, email) VALUES (?, ?, ?, ?)', [name, phone_number, address, email]);
        res.json(createResponse(statusCodes.CREATED, 'Unregistered user created successfully', { id: result.insertId }));
    } catch (error) {
        errorHandler(error);
    }
};

const getAllUnregisteredUsers = async (req, res) => {
    try {
        const users = await db.query('SELECT * FROM unregistered_users');
        res.json(createResponse(statusCodes.OK, 'Success', users));
    } catch (error) {
        errorHandler(error);
    }
};

const getUnregisteredUserById = async (req, res) => {
    const { id } = req.params;
    console.log(id)
    try {
        const users = await db.query('SELECT * FROM unregistered_users where id = ?', [id]);
        res.json(createResponse(statusCodes.OK, 'Success', users));
    } catch (error) {
        errorHandler(error);
    }
};



module.exports = { createUnregisteredUser, getAllUnregisteredUsers, getUnregisteredUserById };