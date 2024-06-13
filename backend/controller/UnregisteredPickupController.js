const db = require('../database/connection');
const { statusCodes } = require('../helper/statusCodeHelper');
const { createResponse } = require('../helper/responseHelper');
const { handleUndefinedParams } = require('../helper/undefinedParamsHelper');

const createUnregisteredPickup = async (req, res) => {
    const { unregistered_user_id, residence_type, notes } = req.body;
    console.log(req.body);
    const proof_of_pickup = req.file ? req.file.filename : null;

    const params = handleUndefinedParams([unregistered_user_id, residence_type, notes, proof_of_pickup]);

    try {
        const rows = await db.query(
            'INSERT INTO unregistered_pickups (unregistered_user_id, residence_type, notes, proof_of_pickup) VALUES (?, ?, ?, ?)',
            params
        );

        res.status(statusCodes.CREATED).json(createResponse(statusCodes.CREATED, 'Unregistered Pickup created successfully', {id : rows.insertId }));
    } catch (error) {
        console.error('Error creating unregistered pickup:', error);
        res.status(statusCodes.SERVER_ERROR).json(createResponse(statusCodes.SERVER_ERROR, 'Failed to create unregistered pickup'));
    }
};

const getAllUnregisteredPickups = async (req, res) => {
    try {
        const query = `
            SELECT up.*, uu.name, uu.phone_number,uu.address
            FROM unregistered_pickups up
            JOIN unregistered_users uu ON up.unregistered_user_id = uu.id
        `;
        const pickupsWithUser = await db.query(query);
        res.json(createResponse(statusCodes.OK, 'Success', pickupsWithUser));
    } catch (error) {
        console.error('Error fetching unregistered pickups with user:', error);
        res.status(statusCodes.SERVER_ERROR).json(createResponse(statusCodes.SERVER_ERROR, 'Failed to retrieve unregistered pickups with user'));
    }
};

const getUnregisteredPickupById = async (req, res) => {
    const { id } = req.params;
    try {
        const query = `
            SELECT up.*, uu.name, uu.phone_number
            FROM unregistered_pickups up
            JOIN unregistered_users uu ON up.unregistered_user_id = uu.id
            WHERE up.id = ?
        `;
        const unregisteredPickup = await db.query(query, [id]);
        if (unregisteredPickup.length > 0) {
            res.json(createResponse(statusCodes.OK, 'Success', unregisteredPickup[0]));
        } else {
            res.status(statusCodes.NOT_FOUND).json(createResponse(statusCodes.NOT_FOUND, 'Unregistered Pickup not found'));
        }
    } catch (error) {
        console.error('Error fetching unregistered pickup:', error);
        res.status(statusCodes.SERVER_ERROR).json(createResponse(statusCodes.SERVER_ERROR, 'Failed to retrieve unregistered pickup'));
    }
};


const updateUnregisteredPickup = async (req, res) => {
    const { unregistered_user_id, residence_type, notes, proof_of_pickup } = req.body;
    console.log(req.body);
    const { id } = req.params;

    try {
        const existingUnregisteredPickup = await db.query('SELECT * FROM unregistered_pickups WHERE id = ?', [id]);

        if (existingUnregisteredPickup.length === 0) {
            return res.status(statusCodes.NOT_FOUND).json(createResponse(statusCodes.NOT_FOUND, 'Unregistered Pickup not found'));
        }

        const updatedUnregisteredPickup = {
            unregistered_user_id: unregistered_user_id || existingUnregisteredPickup[0].unregistered_user_id,
            residence_type: residence_type || existingUnregisteredPickup[0].residence_type,
            notes: notes || existingUnregisteredPickup[0].notes,
            proof_of_pickup: proof_of_pickup || existingUnregisteredPickup[0].proof_of_pickup
        };

        const updateValues = Object.keys(updatedUnregisteredPickup).map(key => `${key} = ?`).join(', ');
        const updateParams = Object.values(updatedUnregisteredPickup);
        updateParams.push(id);

        const query = `UPDATE unregistered_pickups SET ${updateValues} WHERE id = ?`;
        await db.query(query, updateParams);

        res.json(createResponse(statusCodes.OK, 'Unregistered Pickup updated successfully'));
    } catch (error) {
        console.error('Error updating unregistered pickup:', error);
        res.status(statusCodes.SERVER_ERROR).json(createResponse(statusCodes.SERVER_ERROR, 'Failed to update unregistered pickup'));
    }
};

module.exports = { createUnregisteredPickup, getAllUnregisteredPickups, getUnregisteredPickupById, updateUnregisteredPickup };