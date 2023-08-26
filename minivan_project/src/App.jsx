import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import Vans from "./pages/Vans";
import VanDetail from "./pages/VanDetail";
import Dashboard from "./pages/hosts/Dashboard";
import Reviews from "./pages/hosts/Reviews";
import Income from "./pages/hosts/Income";
import Layout from "./Components/Layout";
import HostLayout from "./Components/Hostlayout";

import "./server";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />
          <Route path="/host" element={<HostLayout />}>
            <Route index element={<Dashboard />}/>
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
