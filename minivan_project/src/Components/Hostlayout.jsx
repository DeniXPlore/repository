import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./HostLayout.css";

function HostLayout() {
  const activeStyles = {
    fontweight: "bold",
    color: "black",    
  }
  return (
    <>
      <nav className="host-nav">
        <NavLink
          style={({ isActive }) => (isActive ? activeStyles : null)}
          to="/host"
          end
        >
          Dashboard
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyles : null)}
          to="/host/income"
        >
          Income
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyles : null)}
          to="/host/reviews"
        >
          Reviews
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyles : null)}
          to="/host/vans"
        >
          Vans
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}

export default HostLayout;
