const express = require('express');
const router = express.Router();
const eventController = require('../controllers/event.controller'); // ตรวจสอบให้เส้นทางนี้ถูกต้อง

// Define routes and use the correct controller functions
router.get('/', eventController.getEvents);
router.get('/:id', eventController.getEventById);
router.post('/', eventController.createEvent);
router.put('/:id', eventController.updateEvent);
router.delete('/:id', eventController.deleteEvent);

module.exports = router;
