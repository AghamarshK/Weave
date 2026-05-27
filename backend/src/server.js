const express = require("express");
const cors = require("cors");
require("dotenv").config();

const testRoutes = require("./routes/testRoutes");
const errorHandler = require("./middleware/errorMiddleware");
const notFound = require("./middleware/notFoundMiddleware");

const app = express();

const PORT = process.env.PORT || 5000;

/*
  MIDDLEWARE
*/
app.use(cors());
app.use(express.json());

/*
  ROUTES
*/
app.use("/api/test", testRoutes);

/*
  404 MIDDLEWARE
*/
app.use(notFound);

/*
  ERROR MIDDLEWARE
*/
app.use(errorHandler);

/*
  SERVER
*/
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});