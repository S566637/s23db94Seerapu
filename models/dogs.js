const mongoose = require("mongoose")
const dogsSchema = mongoose.Schema({
dogs_type: String,
size: String,
cost: Number
})
module.exports = mongoose.model("dogs",dogsSchema)