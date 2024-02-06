import { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";

const Product = () => {
  const [products, getProduts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((result) => getProduts(result));
  }, []);

  const cards = products.map((product) => (
    <div className="col-md-3" style={{ marginBottom: "1rem" }}>
      <Card key={products.id} className="h-100">
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.image}
            style={{
              width: "100px",
              height: "130px",
              marginTop: "1rem",
            }}
          />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
        </Card.Body>
        <Card.Footer style={{background: 'white'}}>
          <Button variant="primary">Add to cart</Button>
        </Card.Footer>
      </Card>
    </div>
  ));
  console.log(products);
  return (
    <>
      <h1>Product dashboard</h1>
      <div className="row">{cards}</div>
    </>
  );
};
export default Product;
