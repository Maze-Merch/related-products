const express = require('express');
const cors = require('cors');

const app = express();

// allows requests from everywhere
app.use(cors());

/*
  creates routes for anything located in the directory we've pointed it to
  for instance if we went to http://localhost:3001/pic.png
  in our browser we would see the picture located in client/dist
  if it sees that we're not requesting a file/folder it will
  default to sending back our index.html which is why when we go to
  http://localhost:3001/ we will see our react application
*/
app.use(express.static('client/dist'));

app.listen(3001);