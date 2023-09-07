import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import Vans, {loader as vansLoader} from "./pages/Vans";
import VanDetail from "./pages/VanDetail";
import Dashboard from "./pages/hosts/Dashboard";
import Reviews from "./pages/hosts/Reviews";
import Income from "./pages/hosts/Income";
import HostVans from "./pages/hosts/HostVans";
import HostVanDetail from "./pages/hosts/HostVanDetail";
import HostVanInfo from "./pages/hosts/HostVanInfo";
import HostVanPricing from "./pages/hosts/HostVanPricing";
import HostVanPhotos from "./pages/hosts/HostVanPhotos";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login"
import Layout from "./Components/Layout";
import HostLayout from "./Components/Hostlayout";
import Error from "./Components/Error";

import "./server";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<Login/>}/>
      <Route path="vans" element={<Vans />} loader={vansLoader} errorElement={<Error />} />
      <Route path="vans/:id" element={<VanDetail />} />
      <Route path="/host" element={<HostLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="income" element={<Income />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="vans" element={<HostVans />} />
        <Route path="vans/:id" element={<HostVanDetail />}>
          <Route index element={<HostVanInfo />} />
          <Route path="pricing" element={<HostVanPricing />} />
          <Route path="photos" element={<HostVanPhotos />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
