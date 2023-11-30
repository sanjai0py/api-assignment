// const swaggerUi = require('swagger-ui-express');
// const swaggerJSdoc = require('swagger-jsdoc');
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

// Routes
const auth = require("./routes/auth.router");
const errorHandler = require("../src/middlewares/errorHandler");
const secret = require("./routes/secret.router");
const {protect} = require("./middlewares/authHandler");

const app = express();

// Global middlewares
app.use(cors());
app.use(express.json());

// Rate limiting middleware
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    limit: 50,
    standardHeaders: 'draft-7',
    legacyHeaders: false,
    message: 'Too many requests, please try again later.',
})

// const options = {
//     definition: {
//         openapi: "3.0.0",
//         info: {
//             title: "API-assignment",
//             version: "1.0.0",
//             description: "simple api for an job assignment",
//         },
//     },
//     apis: ['./routes/*.js', './server.js'],
// }
//
// const specs = swaggerJSdoc(options);
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));


app.get("/", (req, res) => {
    res.send("api works!");
});



app.use("/api/auth", auth);
app.use("/api/secret", limiter, protect, secret);

// Error handler
app.use(errorHandler);

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
