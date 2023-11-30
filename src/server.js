// const swaggerUi = require('swagger-ui-express');
// const swaggerJSdoc = require('swagger-jsdoc');
require('dotenv').config();
const express = require('express');
const cors = require('cors');

// Routes
const auth = require("./routes/auth.router");
const errorHandler = require("../src/middlewares/errorHandler");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("route works!");
});

app.use("/api/auth", auth);

app.use(errorHandler);

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
