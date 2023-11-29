import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import EditPost from "./EditPost";
import About from "./About";
import Missing from "./Missing";
import { useEffect } from "react";
import useAxiosFetch from "./hooks/useAxiosFetch";
import { Route, Switch } from "react-router-dom";
import { useStoreActions } from "easy-peasy";


function App() {
  const setPosts = useStoreActions((actions) => actions.setPosts);
  const { data, fetchError, isLoading } = useAxiosFetch(
    "http://localhost:5174"
  );

  useEffect(() => {
    setPosts(data);
  }, [data, setPosts]);

  return (
    <div className="App">
      <Header title="Blog" />      
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home
            isLoading={isLoading}
            fetchError={fetchError}
            />
          </Route>
          <Route exact path="/post" Component={NewPost} />
          <Route path="/edit/:id" Component={EditPost} />
          <Route path="/post/:id" Component={PostPage} />
          <Route path="/about" Component={About} />
          <Route path="*" Component={Missing} />
        </Switch>      
      <Footer />
    </div>
  );
}
export default App;
