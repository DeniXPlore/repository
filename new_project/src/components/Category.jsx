import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useGetProductsQuery } from "../features/api/apiSlice";
import Products from "./Products";

const Category = () => {
  const { id } = useParams();
  const { list } = useSelector(({ categories }) => categories);

  const defaultValues = {
    title: "",
    price_min: 0,
    price_max: 0,
  };

  const defaultParams = {
    categoryId: id,
    limit: 5,
    offset: 0,
    ...defaultValues,
  };

  const [isEnd, setEnd] = useState(false);
  const [values, setValues] = useState(defaultValues);
  const [cat, setCat] = useState(null);
  const [items, setItems] = useState([]);
  const [params, setParams] = useState(defaultParams);

  const { data = [], isLoading, isSuccess } = useGetProductsQuery(params);

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };
  console.log(data);
  useEffect(() => {
    if (!id) return;
    setItems([])
    setEnd(false)
    setValues(defaultValues)
    setParams({ ...defaultParams, categoryId: id });
  }, [id]);

  useEffect(() => {
    if (!isLoading) return;
    if (!data.length) return setEnd(true);
    setItems((_items) => [..._items, ...data]);
  }, [data, isLoading]);

  useEffect(() => {
    if (!id || !list.length) return;
    const category = list.find((item) => item.id === id * 1);
    setCat(category);
  }, [list, id]);

  const handleSubmit = (e) => {
    e.prevent.default();
    setItems([])
    setEnd(false)
    setParams({ ...defaultParams, ...values });
  };

  return (
    <section className="category-wrapper">
      <h2 className="category-title">{cat?.name}</h2>
      <form action="" className="category-filters" onSubmit={handleSubmit}>
        <div className="category-filter">
          <input
            type="text"
            name="title"
            placeholder="Product name"
            onChange={handleChange}
            value={values.title}
          />
        </div>
        <div className="category-filter">
          <input
            type="number"
            name="price_min"
            placeholder="0"
            onChange={() => {}}
            value={values.price_min}
          />
        </div>
        <div className="category-filter">
          <input
            type="number"
            name="price_max"
            placeholder="0"
            onChange={() => {}}
            value={values.price_max}
          />
        </div>
        <button type="submit" hidden />
      </form>
      {isLoading ? (
        <div className="preloader">Loading</div>
      ) : !isSuccess || data.length ? (
        <div className="category-back">
          <span>No result</span>
          <button>Reset</button>
        </div>
      ) : (
        <Products
          title=""
          products={items}
          style={{ padding: 0 }}
          amount={items.length}
        />
      )}
      {!isEnd && (
        <div className="category-more">
          <button
            onClick={() =>
              setParams({ ...params, offset: params.offset + params.limit })
            }
          >
            See more
          </button>
        </div>
      )}
    </section>
  );
};
export default Category;
