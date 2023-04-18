const express = require('express');
const app = express();
const cors = require('cors');
const port =  5000;

const categories = require('./data/catagories.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('categories')
    console.log(categories);
});

app.get('/categories', (req, res) =>{
    console.log(categories);
    res.send(categories);
})



app.listen(port, () => {
    console.log(`Dragon is going on `)
})