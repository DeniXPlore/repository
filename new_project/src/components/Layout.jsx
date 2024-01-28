import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import SideBar from "./SideBar";
import UserForm from "./UserForm";


const Layout = () => {
  return (
    <div className="app">
      <Header />
      <UserForm/>
      <main className="container">
        <SideBar/>
        <Outlet />
      </main>      
      <Footer />
    </div>
  );
};

export default Layout;
