const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Room name is required']
      },
      roomType: {
        type: Schema.Types.ObjectId,
        ref: 'RoomType',
        required: [true, 'Room type is required']
      },
      price: {
        type: Number,
        required: [true, 'Room price is required']
      }
});

module.exports = mongoose.model('Room', roomSchema);
