const express = require('express');
const router = express.Router();
const roomController = require('../controllers/roomController');
const { authenticateToken, authorizeRoles } = require('../middleware/authMiddleware');


// Routes for Rooms
router.post('/', authenticateToken, authorizeRoles(['admin']), async (req, res) => {
    try {
        await roomController.createRoom(req, res);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.get('/', async (req, res) => {
    try {
        await roomController.getAllRooms(req, res);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.patch('/:roomId', authenticateToken, authorizeRoles(['admin']), async (req, res) => {
    try {
        await roomController.updateRoom(req, res);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.delete('/:roomId', authenticateToken, authorizeRoles(['admin']), async (req, res) => {
    try {
        await roomController.deleteRoom(req, res);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/:roomId', async (req, res) => {
    try {
        await roomController.getRoomById(req, res);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
