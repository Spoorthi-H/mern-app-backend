const dotenv = require("dotenv").config();
const express = require("express");
const Task = require("./model/taskModel.js");
const taskRoutes = require("./routes/taskRoute.js")
const cors = require("cors");

const app = express();

const connectDB = require("./config/connectDB");

const PORT = process.env.PORT || 5000;
//express middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}));
app.use(cors({origin: ["http://localhost:3000", "https://mern-task-app.onrender.com"],}));
app.use("/api/tasks",taskRoutes);

//Routes
app.get("/",(req,res)=>{
    res.send("Home Page");
})

const startserver = async () => {
    try {
        await connectDB();
        app.listen(PORT,()=>{
            console.log(`Server is running on ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
}
startserver();
