const express = require("express");
const app = express();
const connectDB = require("./config/db.js");

//connecting database
connectDB();

//Middlewares to read body data of request
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ extended: false }));

//Defining routes
app.use("/api/user", require("./routes/users.js"));
app.use("/api/products", require("./routes/products"));
app.use("/api/cart", require("./routes/cart"));
app.use("/api/orders", require("./routes/orders"));
app.use("/api/payment", require("./routes/payment"));

//Port defined
const port = process.env.PORT || 3030;

app.listen(port, () => {
  console.log(`Server is up & running on ${port}`);
});
