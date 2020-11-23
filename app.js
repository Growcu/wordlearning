const express = require('express');
const app = express();
const path = require('path');
const mainPage = require("./routes/chapters");

app.use(express.json());
app.use(express.static(
  path.join(__dirname, 'public')
));

app.listen(3000, "localhost", (err) => {
  console.log("Server is running");
});

mainPage(app);

