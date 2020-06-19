const express = require('express');
const cors = require('cors');

const app = express();

// allows requests from everywhere
app.use(cors());

// creates routes for anything located in the directory we've pointed it to
app.use(express.static('public'));

app.listen(3002);
