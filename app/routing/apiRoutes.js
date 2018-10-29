app.get('/api/employees', function (req, res) {
    res.json(employees);
});

app.post('/api/employees', function (req, res) {
    employees.push(req.body);
    return res.json(req.body);
});