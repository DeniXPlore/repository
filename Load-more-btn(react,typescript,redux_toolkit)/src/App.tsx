import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './features/store';
import {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,
} from './features/productSlice';

function App() {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.products);
  const loading = useSelector((state: RootState) => state.products.loading);
  const error = useSelector((state: RootState) => state.products.error);

 
  const fetchProducts = useCallback(async () => {
    try {
      dispatch(fetchProductsStart());
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=0`
      );
      const result = await response.json();
      dispatch(fetchProductsSuccess(result.products));
    } catch (error) {
      dispatch(fetchProductsFailure('Ошибка при загрузке данных'));
      console.log(error);
    }
  }, [dispatch]);
 
 
  useEffect(() => {
    fetchProducts();
  }, [dispatch, fetchProducts]);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container">
      <div className="product-container">
        {products.map((item, index) => (
          <div className="product" key={`${item.id}-${index}`}>
            <img src={item.thumbnail} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
