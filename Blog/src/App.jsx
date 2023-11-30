import Layout from "./Layout";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import EditPost from "./EditPost";
import About from "./About";
import Missing from "./Missing";
import { useEffect } from "react";
import useAxiosFetch from "./hooks/useAxiosFetch";
import {
  Route,
  Routes,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { useStoreActions } from "easy-peasy";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={<Home />}
          // isLoading={isLoading}
          // fetchError={fetchError}
        />
        <Route path="/post">
          <Route index element={<NewPost />} />
          <Route path="/posts/:id" element={<PostPage />} />
        </Route>
        <Route path="/edit/:id" element={<EditPost />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  )
);

function App() {
  const setPosts = useStoreActions((actions) => actions.setPosts);
  const { data} = useAxiosFetch(
    "http://localhost:5174"
  );

  useEffect(() => {
    setPosts(data);
  }, [data, setPosts]);

  return <RouterProvider router={router}  />;
}
// fetchError={fetchError} isLoading={isLoading}
export default App;
