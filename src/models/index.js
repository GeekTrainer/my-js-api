const mongoose = require('mongoose');

// Creating an api for a conference
// there will be models for speaker, room, and talk
// all fields will be required

// create the speaker model with name, email and linkedin
const speakerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String, 
    required: true,
  },
  linkedin: {
    type: String,
    required: true,
  },
});

// create the model for speaker
const Speaker = mongoose.model('Speaker', speakerSchema);

// create the room model with name, capacity, and location
const roomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});

// create the model for room
const Room = mongoose.model('Room', roomSchema);

// create the talk model with title, description, speaker, and room
const talkSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String, 
    required: true,
  },
  speaker: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Speaker',
    required: true,
  },
  room: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Room',
    required: true,
  },
});

// create the model for talk
const Talk = mongoose.model('Talk', talkSchema);

// export the models
module.exports = {
  Speaker,
  Room,
  Talk,
};