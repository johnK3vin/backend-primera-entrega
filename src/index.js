import express from "express";
//rutas
import prodsRouter from "./routes/products.routes.js";
import cartRouter from "./routes/carts.routes.js";

const PORT = 8080;
const app = express();

//middlaware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//Routers
app.use('/api/products', prodsRouter)
app.use('/api/carts', cartRouter)

app.listen(PORT, ()=>{
    console.log(`Server on port ${PORT}`)
})