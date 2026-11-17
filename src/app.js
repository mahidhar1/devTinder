const express = require('express');
const app = express();
const PORT = 7777;

app.get("/user", (req, res) => {
  res.send({firstName: "John", lastName: "Doe"});
});

app.post("/user", (req, res) => {
  console.log(req.method);
  res.send("Data saved successfully!");
});

app.patch("/user", (req, res) => {
  console.log(req.method);
  res.send("Data updated successfully!");
});

app.delete("/user", (req, res) => {
  console.log(req.method);
  res.send("Data deleted successfully!");
});


app.use("/api", (req, res) => {
  res.send("Hello from API route!");
});


app.use("/", (req, res) => {
  res.send("Hello from home route!");
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});