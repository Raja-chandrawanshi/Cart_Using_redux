import React from "react";
import ReactDOM from "react-dom/client";
//import App from "./App.jsx";
import "./index.css";
//import { Provider } from "react";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import Counter1 from "./counter";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Counter1 />
  </Provider>
);
