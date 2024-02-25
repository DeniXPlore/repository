import { useSelector, useDispatch } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { remove } from "../features/cartSlice";

const Cart = () => {
  const dispatch = useDispatch()
  const productCart = useSelector((state) => state.cart);
 const removeFromCart = (id) => {
  dispatch(remove(id))
 }



  const cards = productCart.map((product) => (
    <div className="col-md-4" style={{ marginBottom: "1rem" }} key={product.id}>
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
          <Button variant="danger" onClickCapture={()=>removeFromCart(product.id)}>
            Remove Item
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));


  return <div className="row">{cards}</div>;
};
export default Cart;
