const express = require("express");
require("dotenv").config();
require("express-async-errors");
const app = express();
const productsRouter = require("./routes/products");
// middleware
const notFound = require("./middleware/notfound");
const errorHandler = require("./middleware/error-handler");
// use of middleware
app.use(express.json());
// products routes

const port = process.env.PORT || 5000;
app.listen(port, async () => {
  console.log(`server working on port: ${port}`);
});
app.use("/api/products", productsRouter);
app.get("/", (req, res) => {
  res.send('<h1>Store Api </h1> <a href="/api/vi/products">link </a>');
});
app.use(notFound);
app.use(errorHandler);
