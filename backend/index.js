import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import ProductModel from "./models/productModel.js";
const app = express();  
import stripe from "./stripe.js";

//Middleware to parse the body of the request
app.use(express.json());

//Middleware to handle CORS POLICY
app.use(cors());

app.use("/stripe", stripe);

mongoose.connect("mongodb+srv://manuella:manuella@cluster0.t2o17zs.mongodb.net/Manuella?retryWrites=true&w=majority")

app.get("/getProducts",(req, res) =>{
    ProductModel.find()
    .then(products => {
        res.json(products)
        console.log(products)
    }
    )
    .catch(err => res.json(err))
});


app.listen(3001, () =>{
    console.log("Server running on port 3001");
});

