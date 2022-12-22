const dotenv = require("dotenv").config();
const express = require("express");
const Task = require("./model/taskModel.js");
const taskRoutes = require("./routes/taskRoute.js")
const cors = require("cors");
const app = express();
//const cors = require('cors');



const connectDB = require("./config/connectDB");

const PORT = process.env.PORT || 5000;
/*app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Origin', 'https://mern-task-app.onrender.com');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
const corsOptions ={
    origin: ["http://localhost:3000", "https://mern-task-app.onrender.com"], 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions)); */
//express middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}));
//app.use(cors({origin: ["http://localhost:3000", "https://mern-task-app.onrender.com"],}));


//cors
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use(cors())

//Routes
app.get("/",(req,res)=>{
    res.send("Home Page");
})
app.use("/api/tasks",taskRoutes);
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
