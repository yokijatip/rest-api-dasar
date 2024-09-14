const express = require("express");
const app = express();
const port = 4000;

const usersRoutes = require("./routes/users.js");
const logRequest = require("./middleware/logs.js");

// Middleware
app.use(logRequest);
// Middleware untuk mengizinkan request body yang berupa json
app.use(express.json());

app.listen(port, (req, res) => {
    console.log("Server is running on port 4000 : http://localhost:4000");
});

app.get("/home", (req, res) => {
    res.send("Home Page");
});

app.use("/users", usersRoutes);
