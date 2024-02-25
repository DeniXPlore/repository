import { useEffect } from "react";
import { Card, Button} from "react-bootstrap";
import Alert from "react-bootstrap/Alert"
import { useDispatch, useSelector } from "react-redux";
import { add } from "../features/cartSlice";
import { getProducts } from "../features/productSlice";
import StatusCode from "../../utils/StatusCode"


const Product = () => {
  const dispatch = useDispatch();
  const { data: products, status} = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  if(status === StatusCode.LOADING){
    return <p>Loading...</p>
  }
  if(status === StatusCode.ERROR){
    return <Alert key="danger" variant="danger">Something went wrong</Alert>
  }

  const addToCart = (product) => {
    dispatch(add(product));
  };
 console.log(products)
  const cards = products.map((product) => (
    <div className="col-md-3" style={{ marginBottom: "1rem" }} key={product.id}>
      <Card key={product.id} className="h-100">
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
        <Card.Footer style={{ background: "white" }}>
          <Button variant="primary" onClick={() => addToCart(product)}>
            Add to cart
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));
  
  return (
    <>      
      <div className="row">{cards}</div>
    </>
  );
};
export default Product;
