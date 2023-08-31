import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./HostLayout.css";

function HostLayout() {
  const activeStyles = {
    fontweight: "bold",
    color: "black",
    textDecoration: "underline"    
  }
  return (
    <>
      <nav className="host-nav">
        <NavLink
          style={({ isActive }) => (isActive ? activeStyles : null)}
          to="."
          end
        >
          Dashboard
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyles : null)}
          to="income"
        >
          Income
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyles : null)}
          to="reviews"
        >
          Reviews
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyles : null)}
          to="vans"
        >
          Vans
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}

export default HostLayout;
