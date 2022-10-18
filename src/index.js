import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { rootReducer_XucSac } from "./Ex_Tai_Xiu/redux/reducer/rootReducer";
import { Provider } from "react-redux";
import { createStore } from "redux";

let store = createStore(
  rootReducer_XucSac,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);



