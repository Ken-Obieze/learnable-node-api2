const RoomType = require('../models/roomTypeModel');

// Controller to handle creating a room type
exports.createRoomType = async (req, res) => {
    try {
        const roomType = new RoomType(req.body);
        await roomType.save();
        res.status(201).json(roomType);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Controller to handle fetching all room types
exports.getAllRoomTypes = async (req, res) => {
    try {
        const roomTypes = await RoomType.find();
        res.json(roomTypes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
