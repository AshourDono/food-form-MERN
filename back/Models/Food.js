const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  name: { type: String },
  refuse: { type: Number },
  water: { type: Number },
  energy: { type: Number },
  protein: { type: Number },
  fat: { type: Number },
  ash: { type: Number },
  fiber: { type: Number },
  carbohydrate: { type: Number },
  sodium: { type: Number },
  potassium: { type: Number },
  calcium: { type: Number },
  calcium: { type: Number },
  magnisum: { type: Number },
  iron: { type: Number },
  zinc: { type: Number },
  copper: { type: Number },
  vitaminA: { type: String },
  vitaminC: { type: Number },
  thiamin: { type: Number },
  riboflavin: { type: Number },
});

module.exports = mongoose.model('food', foodSchema);
