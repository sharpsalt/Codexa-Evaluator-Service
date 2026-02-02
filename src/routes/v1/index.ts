import express from "express";
const v1router=express.Router();
v1router.get( '/',()=>{
    console.log( "Hii bably" );
} );

export default v1router;
