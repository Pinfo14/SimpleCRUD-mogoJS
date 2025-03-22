const express = require('express')
const app = express()


const producRouter = require('./routes/product.route')


app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/api/products",producRouter)


//!DB connection
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://sa:Pinfo12435@cluster75167.y9shp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster75167')
  .then(() => console.log('Connected!'),app.listen(3000, () => console.log("Listening on port 3000")) )
  .catch(() => console.log('Failed to connect'));



app.set('view engine', 'ejs');



app.get('/', function (req, res) {
  res.send("hello")
})

