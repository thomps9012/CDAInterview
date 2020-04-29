const express = require("express");
const htmlRoutes = require("./htmlRoutes")
var app = express();
var PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use('/', htmlRoutes);



app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
  