const express = require('express')
const router = express.Router()


//* import modules
const Product = require('../models/product.model')
const ProductController = require('../controllers/product.controller')

//*lista todos os produtos
router.get('/', ProductController.getProducts)



//*lista based on id
router.get('/:id', ProductController.getProductsById )



router.post('/',ProductController.createProducts)



//* UPDATE
//? rece o id como parametro no GET e o que vai atualizar no body http (postman mandar um json obj)

router.put('/:id', ProductController.updateProducts)



//*DELETE

router.delete('/:id', ProductController.deleteProducts)

module.exports = router;

