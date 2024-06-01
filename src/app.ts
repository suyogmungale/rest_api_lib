import { error } from "console";
import express , {NextFunction,Request,Response} from "express";
import { HttpError } from "http-errors";
const app = express();

app.get("/",(req,res,next) => {
    res.json({"mesaage":"welcome here"})
})

app.use((err:HttpError,req:Request,res:Response,next:NextFunction) =>{
    const statusCode = err.statusCode || 500;


    return res.status(statusCode).json({
        message:err.message,
        errorStack:err.stack
    })
});

export default app;