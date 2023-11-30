import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StoreProvider } from "easy-peasy";
import store from "./store";

// ReactDOM.render(
//   <React.StrictMode>
//     <StoreProvider store={store}>
//       <Router>
//         <Routes>
//           <Route path="/*" element={<App/>} />
//         </Routes>
//       </Router>
//     </StoreProvider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<React.StrictMode>
    <StoreProvider store={store}>
      <Router>
        <Routes>
          <Route path="/*" element={<App/>} />
        </Routes>
      </Router>
    </StoreProvider>
  </React.StrictMode>
);

