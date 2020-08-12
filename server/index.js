const express = require('express');
const cors = require('cors');
const port = 3002;

const app = express();

// allows requests from everywhere
app.use(cors());

// creates routes for anything located in the directory we've pointed it to
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
