const express = require('express');
const massive = require('massive');
const bodyParser = require('body-parser');

const port = 7777;

const app = express();

app.listen(port, console.log("Listening on ", port));