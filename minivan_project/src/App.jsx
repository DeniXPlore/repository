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
import Vans, { loader as vansLoader } from "./pages/Vans";
import VanDetail, { loader as vanDetailLoader } from "./pages/VanDetail";
import Dashboard from "./pages/hosts/Dashboard";
import Reviews from "./pages/hosts/Reviews";
import Income from "./pages/hosts/Income";
import HostVans, { loader as hostVansLoader } from "./pages/hosts/HostVans";
import HostVanDetail, {
  loader as hostVanDetailLoader,
} from "./pages/hosts/HostVanDetail";
import HostVanInfo from "./pages/hosts/HostVanInfo";
import HostVanPricing from "./pages/hosts/HostVanPricing";
import HostVanPhotos from "./pages/hosts/HostVanPhotos";
import NotFound from "./pages/NotFound";
import Login, {
  loader as loginLoader,
  action as loginAction,
} from "./pages/Login";
import Layout from "./Components/Layout";
import HostLayout from "./Components/Hostlayout";
import Error from "./Components/Error";
import { requireAuth } from "./Utils";

import "./server";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route
        path="login"
        element={<Login />}
        loader={loginLoader}
        action={loginAction}
      />
      <Route
        path="vans"
        element={<Vans />}
        loader={vansLoader}
        errorElement={<Error />}
      />
      <Route
        path="vans/:id"
        element={<VanDetail />}
        loader={vanDetailLoader}
        errorElement={<Error />}
      />
      <Route path="/host" element={<HostLayout />}>
        <Route
          index
          element={<Dashboard />}
          loader={async ({ request }) => {
            return await requireAuth(request);
          }}
        />
        <Route
          path="income"
          element={<Income />}
          loader={async ({ request }) => {
            return await requireAuth(request);
          }}
        />
        <Route
          path="reviews"
          element={<Reviews />}
          loader={async ({ request }) => {
            return await requireAuth(request);
          }}
        />
        <Route
          path="vans"
          element={<HostVans />}
          loader={hostVansLoader}
          errorElement={<Error />}
        />
        <Route
          path="vans/:id"
          element={<HostVanDetail />}
          loader={hostVanDetailLoader}
          errorElement={<Error />}
        >
          <Route
            index
            element={<HostVanInfo />}
            loader={async ({ request }) => {
              return await requireAuth(request);
            }}
          />
          <Route
            path="pricing"
            element={<HostVanPricing />}
            loader={async ({ request }) => {
              return await requireAuth(request);
            }}
          />
          <Route
            path="photos"
            element={<HostVanPhotos />}
            loader={async ({ request }) => {
              return await requireAuth(request);
            }}
          />
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
