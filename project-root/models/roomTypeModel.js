const mongoose = require('mongoose');

const roomTypeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Room type name is required']
      }
});

module.exports = mongoose.model('RoomType', roomTypeSchema);
