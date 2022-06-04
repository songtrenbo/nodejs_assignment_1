const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json({type: 'application/json'}))
app.use(bodyParser.raw());
app.set('view engine', 'ejs');
app.use('/', require('./routes/home'));
app.post('/', (req, res) => {
    console.log(req.body);
})
const port = 3000;
app.listen(port, () => console.log(`Server running on: http://localhost:${port}`))