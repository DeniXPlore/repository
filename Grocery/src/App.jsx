import Header from "./Header";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
import Content from "./Content";
import Footer from "./Footer";
import { useState, useEffect } from "react";

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem("shoppingList")) || []);
  const [search, setSearch] = useState("");
  const [newItem, setNewItem] = useState(""); 

  useEffect(() => { 
    localStorage.setItem("shoppingList", JSON.stringify(items))   
  }, [items]);

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);
  };

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };

  return (
    <div className="App">
      <Header title="Grocery list" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <Content
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        items={items.filter((item) =>
          item.item.toLowerCase().includes(search.toLowerCase())
        )}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
