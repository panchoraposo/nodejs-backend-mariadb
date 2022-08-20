const bcrypt = require('bcryptjs');
const db = require('_helpers/db');

module.exports = {
    getAll,
    getById,
    create
};

async function getAll() {
    return await db.Event.findAll();
}

async function getById(id) {
    return await getEvent(id);
}

async function create(params) {
    const event = new db.Event(params);
    // save event
    await event.save();
}

// helper functions
async function getEvent(id) {
    const event = await db.Event.findByPk(id);
    if (!event) throw 'Event not found';
    return event;
}