const express = require("express");
const router = express.Router();
const cameraController = require("../controllers/camera.controller");

router.get("/", cameraController.getCameras);
router.get("/:id", cameraController.getCameraById);
router.get("/ip/:ip", cameraController.getCameraByIp);
router.post("/", cameraController.createCamera);
router.put("/:id", cameraController.updateCamera);
router.delete("/:id", cameraController.deleteCamera);

module.exports = router;
