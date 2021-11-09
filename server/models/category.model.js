const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const categorySchema = new Schema({
    type: { type: String, required: true },
    name: { type: String, required: true },
    icon: { type: String, required: true },
    backgroundColor: { type: String, required: true },
    color: { type: String, required: true }
}, {
    timestamps: true,
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;