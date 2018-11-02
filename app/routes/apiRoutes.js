let employees = require('../data/employees.js');

module.exports = function (app) {
    app.get('/api/employees', function (req, res) {
        res.json(employees);
    });

	app.post('/api/employees', function (req, res) {

		const newCast = req.body;

		console.log(newCast);

		let comparisonArr = [];
		for (let i = 0; i < employees.length; i++) {
			let referenced = employees[i];
			let sum = 0;
			for (let j = 0; j < newCast.scores.length; j++) {
				sum += Math.abs(newCast.scores[j] - referenced.scores[j]);
			}
			comparisonArr.push(sum);
		}
		const difference = Math.min(...comparisonArr);
		const specific = comparisonArr.indexOf(difference);
		const match = employees[specific];

		res.json(match);

		employees.push(newCast);
	});
};