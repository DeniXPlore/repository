import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import "./App.css";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Vans, { loader as vansLoader } from "./pages/Vans/Vans";
import VanDetail, {
  loader as vanDetailLoader,
} from "./pages/VanDetail/VanDetail";
import Dashboard, {
  loader as dashBoardLoader,
} from "./pages/hosts/Dashboard/Dashboard";
import Reviews from "./pages/hosts/Reviews/Reviews";
import Income from "./pages/hosts/Income/Income";
import HostVans, {
  loader as hostVansLoader,
} from "./pages/hosts/HostVans/HostVans";
import HostVanDetail, {
  loader as hostVanDetailLoader,
} from "./pages/hosts/HostVanDetail/HostVanDetail";
import HostVanInfo from "./pages/hosts/HostVanInfo/HostVanInfo";
import HostVanPricing from "./pages/hosts/HostVanInfo/HostVanPricing";
import HostVanPhotos from "./pages/hosts/HostVanInfo/HostVanPhotos";
import NotFound from "./pages/NotFound/NotFound";
import Login, {
  loader as loginLoader,
  action as loginAction,
} from "./pages/Login/Login";
import Layout from "./Components/Layout/Layout";
import HostLayout from "./Components/Hostlayout/Hostlayout.jsx";
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
        <Route index element={<Dashboard />} loader={dashBoardLoader} />
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
