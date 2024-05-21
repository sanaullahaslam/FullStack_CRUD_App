// models/item.model.js
import mongoose from 'mongoose';
const { Schema } = mongoose;

const itemSchema = new Schema({
  name: String,
  age: Number,
  email: String
});

const Item = mongoose.model('Item', itemSchema);

export default Item;
