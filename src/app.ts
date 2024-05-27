import express  from "express";

const app = express();

app.get("/",(req,res,nex) => {
    res.json({"mesaage":"welcome here"})
})

export default app;