import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Cart from "./components/Cart";
import SideBar from "./components/SideBar";
import Products from "./components/Products";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCategories } from "./features/category/categoriesSlice";
import { getProducts } from "./features/products/productsSlice";
import SingleProduct from "./components/SingleProduct";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/categories/:id" element={<SideBar />} />
        <Route path="/products/" element={<Products />} />
        <Route path="/products/:id" element={<SingleProduct />} />
      </Route>
    </Routes>
  );
}

export default App;
