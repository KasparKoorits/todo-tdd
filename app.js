const express = require("express");
const todoRoutes = require("./routes/todo.routes");
const app = express();
const mongodb = require("./mongodb/mongodb.connect");

mongodb.connect();

app.use(express.json());

app.use("/todos", todoRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//app.listen(3020, () => {
//  console.log("Server is running on port 3020");
//});

module.exports = app;
