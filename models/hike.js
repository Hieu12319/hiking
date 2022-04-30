const mongoose = require("mongoose")
const { Schema, model } = mongoose


const hikeSchema = new Schema({
  name: { type: String, required: true },
  distance: { type: String, },
  comments: { type: String, },
  img : { type: String, },
  completed:  Boolean,
})

const Hike = mongoose.model("Hike", hikeSchema)

module.exports = Hike;