//setup express app
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./database/database');
const cors = require('cors');

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(cors());



//initialize routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/trash', require('./routes/trash'));
app.use('/api/comment', require('./routes/comment'));
app.use('/api/rapport', require('./routes/rapport'));

//run server
app.listen(3000, () => console.log('server up and running'));