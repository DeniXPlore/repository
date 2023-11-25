import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";

import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Header />
    <Nav />
    <Home />
    <NewPost />
    <PostPage />
    <About />
    <Missing />
    <Footer />
  ))

function App() {
  return (
    <RouterProvider router={router} />
  );
}
export default App;
