const express = require('express');
const app = express();
const cors = require('cors');
const port =  5000;

const categories = require('./data/catagories.json');
const news = require('./data/news.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('categories of dragon news website')
    // console.log(categories);
});

app.get('/categories', (req, res) =>{
    console.log(categories);
    res.send(categories);
})

app.get('/news', (req, res) => {
    res.send(news)
})

app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const selectid = news.find(n => n._id === id);
    res.send(selectid);
})

app.get('/categories/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (id === 0) {
        res.send(news);
    }
    else {
        const Categorynews = news.filter(n => parseInt(n.category_id) === id);
        res.send(Categorynews);
    }
})



app.listen(port, () => {
    console.log(`Dragon is going on `)
})