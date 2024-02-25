import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Provider } from "react-redux";
import store from "../features/store";



const Layout = () => {
  return (
    <Provider store={store}>
      <Header />
      <main>
        <Outlet />
      </main>
    </Provider>
  );
};
export default Layout;
