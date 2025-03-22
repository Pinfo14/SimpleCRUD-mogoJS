
const mongoose = require('mongoose')
//*esquema do produto ou seja atributos q o produto pode ter 
const ProductSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required: [true, "Product name is required"]
        },
        quantity:{
            type:Number,
            required:true,
            default:0
        },
        price:{
            type:Number,
            required:true,
            default:0
        },
        image:{
            type:String,
            required:false
        }

    },
    //*extra atributes  data de criação e de update caso haja
    {
        timestamps: true
    }
);

const Product = mongoose.model("Product",ProductSchema);

module.exports = Product;