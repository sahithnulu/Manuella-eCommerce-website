import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    Name: String,
    Price: String,
    Type: String,
    Material: String,
  });
  

const ProductModel = mongoose.model("ProductModel", productSchema, "ProductInformation");
export default ProductModel;    