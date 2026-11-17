const express = require('express');
const app = express();
const PORT = 7777;

app.get("/user/:userId/xyz/:xyzId", (req, res) => {
  console.log(req.params) // route params
  console.log(req.query) // query params
  res.send({firstName: "John", lastName: "Doe"});
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});