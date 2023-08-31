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
import HostVans from "./pages/hosts/HostVans"
import HostVanDetail from "./pages/hosts/HostVanDetail"
import HostVanInfo from "./pages/hosts/HostVanInfo"
import HostVanPricing from "./pages/hosts/HostVanPricing"
import HostVanPhotos from "./pages/hosts/HostVanPhotos"
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
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVanDetail />}>
              <Route index element={<HostVanInfo />}/>
              <Route path="pricing" element={<HostVanPricing />}/>
              <Route path="photos" element={<HostVanPhotos />}/>
            </Route>
          </Route>
        </Route>
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
