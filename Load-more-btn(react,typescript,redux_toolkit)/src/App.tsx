import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await response.json();
      console.log(result);
      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
        setLoading(false);
      }
    } catch {
      console.error("error");
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products.length === 100) {
      setDisableButton(true);
    } else {
      setDisableButton(false);
    }
  }, [products]);

  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <div className="container">
      <div className="product-container">
        {products && products.length
          ? products.map((item) => (
              <div className="product" key={item.id}>
                <img src={item.thumbnail} alt="item.title" />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div>
        <button
          className="button-container"
          onClick={() => setCount(count + 1)}
          disabled={disableButton}
        >
          Load morte products...
        </button>

        {disableButton ? <p>You have reached 100 products</p> : null}
      </div>
    </div>
  );
}

export default App;
