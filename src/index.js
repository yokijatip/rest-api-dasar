const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;

const usersRoutes = require("./routes/users.js");
const logRequest = require("./middleware/logs.js");
const upload = require("./middleware/multer.js");

// Middleware
app.use(logRequest);
// Middleware untuk mengizinkan request body yang berupa json
app.use(express.json());

// Middleware untuk static file
app.use("/assets", express.static("public/images"));

app.post("/upload", upload.single("image"), (req, res) => {
    res.status(201).json({
        message: "Upload Success",
        code: 200,
        data: req.body,
    })
})

app.get("/home", (req, res) => {
    res.send("Home Page");
});

app.use("/users", usersRoutes);

app.use((err, req, res, next) => {
    res.json({
        message: err.message,
        serverMessage: err
    })
})

app.listen(PORT, (req, res) => {
    console.log(`Server is running on port 4000 : ${PORT}`);
});



