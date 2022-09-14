import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter } from "react-router-dom";
import App from "./components/app";
import reducers from "./reducers";
const rootElement = document.getElementById("app-wrapper");
const root = ReactDOM.createRoot(rootElement);
const createStoreWithMiddleware = applyMiddleware()(createStore);

import "./style/main.scss";

function main() {
  root.render(
    <React.StrictMode>
      <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
}

document.addEventListener("DOMContentLoaded", main);
