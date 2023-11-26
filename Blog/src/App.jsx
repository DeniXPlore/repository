import Layout from "./Layout";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";
import { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import "index.css";

function App() {
  const [posts, setPosts] = useState([])
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([])

  const handleDelete = (id) => {
    const postList = posts.filter(post => post.id !== id)
    setPosts(postList)
  }
  return (
    <div className="App">
      <Header title="Blog"/>
      <Nav search={search} setSearh={setSearch}/>
      <Switch>
        <Route exact path="/">
          <Home posts={posts}/>
        </Route>
        <Route exact path="/post">
          <NewPost />
        </Route>
        <Route path="/post/:id">
          <PostPage posts={posts} handleDelete={handleDelete}/>
        </Route>
        <Route path="/about" Component={<About/>}/>
        <Route path="*" Component={<Missing/>}/>        
      </Switch>
      <Footer />
    </div>
  );
}
export default App;
