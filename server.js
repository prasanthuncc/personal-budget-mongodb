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

const budget = {
    'myBudget': [

        {
            title: 'Eat out', budget: 30
        }, {
            title: 'Rent', budget: 350
        }, {
            title: 'Grocery', budget: 90
        }]
}
app.listen(port, () => {
    console.log(`Example app listening to the port http://localhost:${port}`)
})