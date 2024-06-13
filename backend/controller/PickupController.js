const db = require('../database/connection');
const { statusCodes } = require('../helper/statusCodeHelper');
const { createResponse } = require('../helper/responseHelper');
const { handleUndefinedParams } = require('../helper/undefinedParamsHelper');

const createPickup = async (req, res) => {
    const { user_id,phone_number,address,residence_type, notes } = req.body;
    const proof_of_pickup = req.file ? req.file.filename : null;

    const params = handleUndefinedParams([user_id,phone_number,address, residence_type, notes, proof_of_pickup]);

    try {
        const rows = await db.query(
            'INSERT INTO pickups (user_id,phone_number,address, residence_type, notes, proof_of_pickup) VALUES (?, ?, ?, ?,?,?)',
            params
        );

        res.status(statusCodes.CREATED).json(createResponse(statusCodes.CREATED, 'Pickup created successfully', rows.insertId));
    } catch (error) {
        console.error('Error creating pickup:', error);
        res.status(statusCodes.SERVER_ERROR).json(createResponse(statusCodes.SERVER_ERROR, 'Failed to create pickup'));
    }
};


const getAllPickups = async (req, res) => {
    try {
        const query = `
            SELECT p.*, u.email,u.name FROM pickups p JOIN users u ON p.user_id = u.id
        `;
        const pickupsWithUser = await db.query(query);
        res.json(createResponse(statusCodes.OK, 'Success', pickupsWithUser));
    } catch (error) {
        console.error('Error fetching pickups with user:', error);
        res.status(statusCodes.SERVER_ERROR).json(createResponse(statusCodes.SERVER_ERROR, 'Failed to retrieve pickups with user'));
    }
};

const getPickupById = async (req, res) => {
    const { id } = req.params;
    try {
        const pickup = await db.query('SELECT p.*, u.email,u.name FROM pickups p JOIN users u ON p.user_id = u.id WHERE p.id = ?', [id]);
        if (pickup.length > 0) {
            res.json(createResponse(statusCodes.OK, 'Success', pickup));
        } else {
            res.status(statusCodes.NOT_FOUND).json(createResponse(statusCodes.NOT_FOUND, 'Pickup not found',));
        }
    } catch (error) {
        console.error('Error fetching pickup:', error);
        res.status(statusCodes.SERVER_ERROR).json(createResponse(statusCodes.SERVER_ERROR, 'Failed to retrieve pickup'));
    }
};

const getPickupByUserId = async (req, res) => {
    const { id } = req.params;
    try {
        const pickup = await db.query('SELECT p.*, u.email,u.name FROM pickups p JOIN users u ON p.user_id = u.id WHERE p.user_id = ?', [id]);
        if (pickup.length > 0) {
            res.json(createResponse(statusCodes.OK, 'Success', pickup));
        } else {
            res.status(statusCodes.NOT_FOUND).json(createResponse(statusCodes.NOT_FOUND, 'Pickup not found',));
        }
    } catch (error) {
        console.error('Error fetching pickup:', error);
        res.status(statusCodes.SERVER_ERROR).json(createResponse(statusCodes.SERVER_ERROR, 'Failed to retrieve pickup'));
    }
};

const updatePickup = async (req, res) => {
    const { user_id, residence_type, notes, proof_of_pickup } = req.body;
    console.log(req.body)
    const { id } = req.params;

    try {
        const existingPickup = await db.query('SELECT * FROM pickups WHERE id = ?', [id]);
        

        if (existingPickup.length === 0) {
            return res.status(statusCodes.NOT_FOUND).json(createResponse(statusCodes.NOT_FOUND, 'Pickup not found'));
        }

        const updatedPickup = {
            user_id: user_id || existingPickup[0].user_id,
            residence_type: residence_type || existingPickup[0].residence_type,
            notes: notes || existingPickup[0].notes,
            proof_of_pickup: proof_of_pickup || existingPickup[0].proof_of_pickup
        };

        const updateValues = Object.keys(updatedPickup).map(key => `${key} = ?`).join(', ');
        const updateParams = Object.values(updatedPickup);
        updateParams.push(id);

        const query = `UPDATE pickups SET ${updateValues} WHERE id = ?`
        const rows = await db.query(query, updateParams);
        
        res.json(createResponse(statusCodes.OK, 'Pickup updated successfully', {id : rows.insertId}));
    } catch (error) {
        console.error('Error updating pickup:', error);
        res.status(statusCodes.SERVER_ERROR).json(createResponse(statusCodes.SERVER_ERROR, 'Failed to update pickup'));
    }
};

module.exports = { createPickup, getAllPickups, getPickupById,updatePickup, getPickupByUserId };