const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;

const usersRoutes = require("./routes/users.js");
const logRequest = require("./middleware/logs.js");

// Middleware
app.use(logRequest);
// Middleware untuk mengizinkan request body yang berupa json
app.use(express.json());

app.listen(PORT, (req, res) => {
    console.log(`Server is running on port 4000 : ${PORT}`);
});

app.get("/home", (req, res) => {
    res.send("Home Page");
});

app.use("/users", usersRoutes);
