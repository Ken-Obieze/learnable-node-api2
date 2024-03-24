const Joi = require('joi');
const Room = require('../models/roomModel');
const JoiObjectId = require('joi-objectid');

Joi.objectId = JoiObjectId(Joi);

// Joi schema for room validation
const roomSchema = Joi.object({
    // name: Joi.string().required(),
    // roomType: Joi.string().required(),
    // price: Joi.number().required()
    name: Joi.string().required(),
    roomType: Joi.objectId().required(),
    price: Joi.number().required()
});

// Function to create a room
exports.createRoom = async (roomData) => {
    // Validate room data
    const { error } = roomSchema.validate(roomData);
    if (error) {
        throw new Error(error.details[0].message);
    }

    // Create new room instance
    const room = new Room(roomData);

    // Save room to database
    await room.save();

    return room;
};

// Function to fetch all rooms
exports.getAllRooms = async () => {
    return Room.find();
};

// Function to update a room
exports.updateRoom = async (roomId, roomData) => {
    // Validate room data
    const { error } = roomSchema.validate(roomData);
    if (error) {
        throw new Error(error.details[0].message);
    }

    // Update room in database
    return Room.findByIdAndUpdate(roomId, roomData, { new: true });
};

// Function to delete a room
exports.deleteRoom = async (roomId) => {
    return Room.findByIdAndDelete(roomId);
};

// Function to fetch a room by ID
exports.getRoomById = async (roomId) => {
    return Room.findById(roomId);
};
