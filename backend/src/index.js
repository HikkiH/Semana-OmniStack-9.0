const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const routes = require("./routes");
const dbConfig = require("./config/database");

const PORT = 4000;

const app = express();

mongoose.connect(dbConfig.uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
