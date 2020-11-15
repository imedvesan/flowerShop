import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'


// description: fetch all products
// route: GET/api/products
// access: public route
const getProducts = asyncHandler(async(req, res) => {
  const products = await Product.find({})
  res.json(products)
})


// description: fetch single product
// route: GET/api/products/:id
// access: public route
const getProductById = asyncHandler(async(req, res) => {
  const product = await Product.findById(req.params.id)

  if(product) {
    res.json(product)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

// description: Delete a product
// route: DELETE/api/products/:id
// access: private admin route
const deleteProduct = asyncHandler(async(req, res) => {
  const product = await Product.findById(req.params.id)

  if(product) {
    await product.remove()
    res.json({ message: 'Product removed'})
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

// description: Create product
// route: POST/api/products
// access: private admin route
const createProduct = asyncHandler(async(req, res) => {
  const product = new Product({
    name: 'Sample name',
    price: 0,
    user: req.user._id,
    image: '/images/sample.jpg',
    category: 'Sample category',
    countInStock: 0,
    numReviews: 0,
    description: 'Sample description'
  })

  const createdProduct = await product.save()
  res.status(201).json(createdProduct)
})


// description: Update product
// route: PUT/api/products/:id
// access: private admin route
const updateProduct = asyncHandler(async(req, res) => {
  const {name, price, description, image, category, countInStock} = req.body

  const product = await Product.findById(req.params.id)

  if(product) {
    product.name = name
    product.price = price
    product.description = description
    product.image = image
    product.category = category
    product.countInStock = countInStock

  const updatedProduct = await product.save()
  res.json(updatedProduct)

  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})
export { getProducts, getProductById, deleteProduct, createProduct, updateProduct }
