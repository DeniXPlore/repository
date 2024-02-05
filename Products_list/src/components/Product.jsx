import { useState, useEffect } from "react"
import { Card, Button } from "react-bootstrap"

const Product = () => {
  
  const [products, getProduts] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(data => data.json())
    .then(result => getProduts(result))
      }, [])

  const cards = products.map(product => (
    <div className="col-md-3">
      <Card style={{ width: '18rem', margin: '2rem' }}>
      <Card.Img variant="top" src={product.image} style={{width: '100px', height: '130px', margin: '1rem 0 0 1rem '}} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
         {product.description}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  ))
 console.log(products)
  return (
    <>
    <h1>Product dashboard</h1>
    <div className="row">
      {cards}
      {/* {JSON.stringify(products)} */}
    </div>
    </>
  )
}
export default Product