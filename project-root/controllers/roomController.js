const roomService = require('../services/roomService');

// Controller to handle creating a room
exports.createRoom = async (req, res) => {
    try {
        const room = await roomService.createRoom(req.body);
        res.status(201).json(room);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Controller to handle fetching all rooms
exports.getAllRooms = async (req, res) => {
    try {
        const rooms = await roomService.getAllRooms();
        res.json(rooms);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Controller to handle updating a room
exports.updateRoom = async (req, res) => {
    try {
        const room = await roomService.updateRoom(req.params.roomId, req.body);
        res.json(room);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Controller to handle deleting a room
exports.deleteRoom = async (req, res) => {
    try {
        await roomService.deleteRoom(req.params.roomId);
        res.json({ message: 'Room deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Controller to handle fetching a room by ID
exports.getRoomById = async (req, res) => {
    try {
        const room = await roomService.getRoomById(req.params.roomId);
        if (!room) {
            return res.status(404).json({ message: 'Room not found' });
        }
        res.json(room);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
