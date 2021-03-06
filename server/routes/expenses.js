const router = require('express').Router();
let Expense = require('../models/expense.model');

router.route('/').get((req, res) => {
    Expense.find()
        .then(expenses => res.json(expenses))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const memo = req.body.memo;
    const total = Number(req.body.total);
    const date = Date.parse(req.body.date);
    const categoryType = req.body.categoryType;
    const categoryName = req.body.categoryName;

    const newExpense = new Expense({
        memo,
        total,
        date,
        categoryType,
        categoryName
    });

    newExpense.save()
        .then(() => res.json('Expense added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Expense.findById(req.params.id)
        .then(expense => res.json(expense))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Expense.findByIdAndDelete(req.params.id)
        .then(() => res.json('Expense deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Expense.findById(req.params.id)
        .then(expense => {
            expense.memo = req.body.memo;
            expense.total = Number(req.body.total);
            expense.date = Date.parse(req.body.date);
            expense.categoryType = req.body.categoryType;
            expense.categoryName = req.body.categoryName;

            expense.save()
                .then(() => res.json('Expense updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;