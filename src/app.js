const express = require('express');
const app = express();
const PORT = 7777;

app.use("/api", (req, res) => {
  res.send("Hello from API route!");
});

app.use("/", (req, res) => {
  res.send("Hello from home route!");
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});