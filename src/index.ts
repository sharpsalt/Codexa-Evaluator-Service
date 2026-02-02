import express from "express";
import serverConfig from "./config/serverConfig.js";
import apirouter from "./routes/index.js";

const app=express();

app.use('/api',apirouter);

app.listen( serverConfig.PORT,()=>{
    console.log( "Server ban gaya hai mera yaha pe " );
} );

