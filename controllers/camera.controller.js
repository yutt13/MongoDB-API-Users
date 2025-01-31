const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Create a new camera
exports.createCamera = async (req, res) => {
  const { name, ip_address, location } = req.body;
  const result = await prisma.cameras.create({
    data: {
      name,
      ip_address,
      location,
    },
  });
  res.json(result);
};

// Get all cameras
exports.getCameras = async (req, res) => {
  const cameras = await prisma.cameras.findMany();
  res.json(cameras);
};

// Get a single camera by ID
exports.getCameraById = async (req, res) => {
  const { id } = req.params;
  const camera = await prisma.cameras.findUnique({
    where: { id: parseInt(id) },
  });
  res.json(camera);
};

// Get a camera by IP address
exports.getCameraByIp = async (req, res) => {
  const { ip } = req.params;
  const camera = await prisma.cameras.findMany({
    where: { ip_address: ip },
  });
  res.json(camera);
};

// Update a camera
exports.updateCamera = async (req, res) => {
  const { id } = req.params;
  const { name, ip_address, location } = req.body;
  const result = await prisma.cameras.update({
    where: { id: parseInt(id) },
    data: {
      name,
      ip_address,
      location,
    },
  });
  res.json(result);
};

// Delete a camera
exports.deleteCamera = async (req, res) => {
  const { id } = req.params;
  const camera = await prisma.cameras.delete({
    where: { id: parseInt(id) },
  });
  res.json(camera);
};