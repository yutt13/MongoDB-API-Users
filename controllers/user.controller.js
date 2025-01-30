const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Create a new user
exports.createUser = async (req, res) => {
  const { name, email } = req.body;
  const result = await prisma.user.create({
    data: {
      name: name,
      email: email,
    },
  });
  res.json(result);
};

// Get all users
exports.getUsers = async (req, res) => {
  const users = await prisma.user.findMany({
    include: { posts: true }, // ดึงโพสต์ของผู้ใช้ด้วย
  });
  res.json(users);
};

// Get a single user by ID
exports.getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await prisma.user.findUnique({
    where: { id: id },
    include: { posts: true }, // รวมโพสต์ของผู้ใช้งาน
  });
  res.json(user);
};

// Update a user
exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const result = await prisma.user.update({
    where: { id: id },
    data: {
      name: name,
      email: email,
    },
  });
  res.json(result);
};

// Delete a user
exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  const user = await prisma.user.delete({
    where: { id: id },
  });
  res.json(user);
};
