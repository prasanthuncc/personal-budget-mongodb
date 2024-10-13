const mongoose = require('mongoose');
const chartModel = require('./models/charts_schema');
const express = require('express')
const app = express();
const port = 3000;
const url = 'mongodb://localhost:27017/UNCC';
app.use(express.json());
mongoose.connect(url)
    .then(() => {
        console.log('Connected to the Database');
    })
    .catch((connectionError) => {
        console.log('Error connecting to MongoDB:', connectionError);
    });

app.get('/hello', (req, res) => {
    res.send('Hello World');
})

app.get('/budget', (req, res) => {
    chartModel.find({})
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
            res.status(500).json({message: 'Error fetching budget data from database'});
        });
})

app.post('/budget', (req, res) => {
    console.log(req.body)
    const budget = req.body;
    const budgetItem = new chartModel(budget);
    budgetItem.save()
        .then((savedItem) => {
            console.log('New budget entry created:', savedItem);
            res.status(201).json(savedItem); // Send the created item as a response
        })
        .catch((error) => {
            console.error('Error saving new budget entry:', error);
            res.status(500).json({message: `Error saving budget data to database :: ${error}`});
        });
});


app.use('/', express.static('public'));
app.listen(port, () => {
    console.log(`Example app listening to the port http://localhost:${port}`)
})