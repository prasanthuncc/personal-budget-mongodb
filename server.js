// To read files from the resources
const fs = require('fs');
const path = require('path');

const express = require('express')
const app = express();
const port = 3000;

app.get('/hello', (req, res) => {
    res.send('Hello World');
})
app.get('/budget', (req, res) => {
    res.json(budget);
})

app.use('/', express.static('public'));
// Read the JSON file
const filePath = path.join(__dirname, './', 'budget.json');
const budget = JSON.parse(fs.readFileSync(filePath, 'utf8'));

app.listen(port, () => {
    console.log(`Example app listening to the port http://localhost:${port}`)
})