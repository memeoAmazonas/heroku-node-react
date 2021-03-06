require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;

app.use(express.static(__dirname + '/public'));
app.get('*', (req, res) => res.sendFile(__dirname + '/public/index.html'));
app.listen(port, () => console.log("se esta ejecutando en el puerto ", port));
