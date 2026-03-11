const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/studentDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

const studentRoutes = require("./routes/studentRoutes");

app.use("/students", studentRoutes);

app.get("/", (req, res) => {
    res.send("Student API Server Running 🚀");
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
