const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const expenseSchema = new Schema({
    memo: { type: String, required: true },
    total: { type: Number, required: true },
    date: { type: Date, required: true },
    categoryType: { type: String, required: true },
    categoryName: { type: String, required: true }
}, {
    timestamps: true,
});

const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;