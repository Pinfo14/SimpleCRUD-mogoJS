const express = require('express')
const router = express.Router()


//* import modules
const Product = require('../models/product.model')

//*lista todos os produtos
router.get('/', async(req,res) => {
    try{
        const products = await Product.find({});
        res.status(200).json(products)
       } catch (error){
         res.status(500).json({message:error.message})
       }
})



//*lista based on id
router.get('/:id', async(req,res) => {
    try{
        const id = req.params.id;
        const product = await Product.findById(id)
        res.status(200).json(product)
       } catch (error){
         res.status(500).json({message:error.message})
       }
})



router.post('/',async (req,res) => {
  try{
   const product = await Product.create(req.body)
   res.status(200).json(product)
  } catch (error){
    res.status(500).json({message:error.message})
  }
})



//* UPDATE
//? rece o id como parametro no GET e o que vai atualizar no body http (postman mandar um json obj)

router.put('/:id', async(req,res) => {
    try{
        const id = req.params.id;
        const product = await Product.findByIdAndUpdate(id,req.body)

        if (!product) {
           return res.status(404).json({message:"Product not found!!"})
        }
        const updatedProduct = await Product.findById(id)
        res.status(200).json(updatedProduct)

       } catch (error){
         res.status(500).json({message:error.message})
       }
})



//*DELETE

router.delete('/:id',async(req,res) => {
    try{
       
        const id = req.params.id;
        const product = await Product.findByIdAndDelete(id)

        if (!product) {
           return res.status(404).json({message:"Product not found!!"})
        }

        res.status(200).json({message:"Product deleted"})

       } catch (error){
         res.status(500).json({message:error.message})
       }
})

module.exports = router;

