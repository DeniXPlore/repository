import { useState, useEffect } from "react"

const Product = () => {
  
  const [products, getProduts] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(data => data.json())
    .then(result => getProduts(result))
  }, [])
  return (
    <>
    <h1>Product dashboard</h1>
    {JSON.stringify(products)}
    </>
  )
}
export default Product