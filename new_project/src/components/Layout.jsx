import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import SideBar from "./SideBar";


const Layout = () => {
  return (
    <div className="app">
      <Header />
      <main className="container">
        <SideBar/>
        <Outlet />
      </main>      
      <Footer />
    </div>
  );
};

export default Layout;
