const express = require("express");
const mongoose = require("mongoose");

const routes = require("./routes");
const dbConfig = require("./config/database");

const PORT = 4000;

const app = express();

mongoose.connect(dbConfig.uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
