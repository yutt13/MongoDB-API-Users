const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Create a new event
exports.createEvent = async (req, res) => {
  const { camera_id, amount } = req.body;
  const result = await prisma.event.create({
    data: {
      camera_id,
      amount,
    },
  });
  res.json(result);
};

// Get all events
exports.getEvents = async (req, res) => {
  const events = await prisma.event.findMany({
    include: { camera: true },
  });
  res.json(events);
};

// Get a single event by ID
exports.getEventById = async (req, res) => {
  const { id } = req.params;
  const event = await prisma.event.findUnique({
    where: { id },
    include: { camera: true },
  });
  res.json(event);
};

// Update an event
exports.updateEvent = async (req, res) => {
  const { id } = req.params;
  const { camera_id, amount } = req.body;
  const result = await prisma.event.update({
    where: { id },
    data: {
      camera_id,
      amount,
    },
  });
  res.json(result);
};

// Delete an event
exports.deleteEvent = async (req, res) => {
  const { id } = req.params;
  const event = await prisma.event.delete({
    where: { id },
  });
  res.json(event);
};