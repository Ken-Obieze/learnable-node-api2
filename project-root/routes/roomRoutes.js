const express = require('express');
const router = express.Router();
const Room = require('../models/roomModel');
const RoomType = require('../models/roomTypeModel');
const roomTypeController = require('../controllers/roomTypeController');
const roomController = require('../controllers/roomController');

// Routes for Room Types
router.post('/types', roomTypeController.createRoomType);
router.get('/types', roomTypeController.getAllRoomTypes);

// Routes for Rooms
router.post('/', roomController.createRoom);
router.get('/', roomController.getAllRooms);
router.patch('/:roomId', roomController.updateRoom);
router.delete('/:roomId', roomController.deleteRoom);
router.get('/:roomId', roomController.getRoomById);

// Protected route requiring authentication and admin role
router.post('/', authenticateToken, authorizeRoles(['admin']), validateData(roomSchema), async (req, res) => {
});
module.exports = router;
