const Room = require('../models/roomModel');

// Controller to handle creating a room
exports.createRoom = async (req, res) => {
    try {
        const room = new Room(req.body);
        await room.save();
        res.status(201).json(room);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Controller to handle fetching all rooms
exports.getAllRooms = async (req, res) => {
    try {
        const rooms = await Room.find();
        res.json(rooms);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Controller to handle updating a room
exports.updateRoom = async (req, res) => {
    try {
        const room = await Room.findByIdAndUpdate(req.params.roomId, req.body, { new: true });
        res.json(room);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Controller to handle deleting a room
exports.deleteRoom = async (req, res) => {
    try {
        await Room.findByIdAndDelete(req.params.roomId);
        res.json({ message: 'Room deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Controller to handle fetching a room by ID
exports.getRoomById = async (req, res) => {
    try {
        const room = await Room.findById(req.params.roomId);
        if (!room) {
            return res.status(404).json({ message: 'Room not found' });
        }
        res.json(room);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
