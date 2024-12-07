const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require("cookie-parser");
const session = require("express-session");
const { dbConncetion } = require('./db/db');
// User Router part
const {route} = require("./routes/UserRoutes");

const port =process.env.PORT || 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("api",route)

app.listen(port,()=>{
    if(!dbConncetion()) process.exit(1);
    dbConncetion();
    console.log(`Server is running  ${port}`);
})