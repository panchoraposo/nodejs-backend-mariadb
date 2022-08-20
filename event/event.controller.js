const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const eventService = require('./event.service');

// routes
router.get('/', getAll);
router.get('/:id', getById);
router.post('/', createSchema, create);

module.exports = router;

// route functions
function getAll(req, res, next) {
    eventService.getAll()
        .then(users => res.json(users))
        .catch(next);
}

function getById(req, res, next) {
    eventService.getById(req.params.id)
        .then(event => res.json(event))
        .catch(next);
}

function create(req, res, next) {
    eventService.create(req.body)
        .then(() => res.json({ message: 'Event created' }))
        .catch(next);
}

// schema functions
function createSchema(req, res, next) {
    const schema = Joi.object({
        temperature: Joi.string().required(),
        humidity: Joi.string().required()
    });
    validateRequest(req, next, schema);
}