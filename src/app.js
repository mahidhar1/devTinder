const express = require('express');
const app = express();
const PORT = 7777;

//app.use("/user", rh1, rh2, rh3, rh4, rh5, rh6, rh7, rh8, rh9, rh10); valid syntax
//app.use("/user", rh1, [rh2, rh3], rh4, rh5, rh6, rh7, rh8, rh9, rh10); valid syntax
//app.use("/user", [rh1, rh2, rh3, rh4, rh5, rh6, rh7, rh8, rh9, rh10]); valid syntax

app.use("/user", (req, res, next) => {
  // Middleware logic here
  console.log("Middleware executed for /user route");
  //res.send("Response from /user route after middleware executed");
  next();
}, (req, res, next) => {
  console.log("Second middleware executed for /user route");
  //res.send("Response from /user route after second middleware executed");
  next();
}, (req, res, next) => {
  console.log("Third middleware executed for /user route");
  //res.send("Response from /user route after third middleware executed");
  next()
}, (req, res, next) => {
  res.send("Response from /user route after all middleware executed");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});