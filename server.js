const express = require('express'),
  cors = require('cors');
const app = express();

app.use(cors());
app.use(express.static(__dirname + '/dist/urbaton'));

app.listen(process.env.PORT || 8080);
