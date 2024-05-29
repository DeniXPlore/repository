import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ChatWindow from "./ChatWindow";
import { Provider } from "react-redux";
import store from "./features/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider  store={store}>
      <ChatWindow/>
    </Provider>
  </React.StrictMode>
);
