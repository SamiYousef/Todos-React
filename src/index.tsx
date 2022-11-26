import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./containers/App";
import reducers from "./reducers";

const element = document.getElementById("root");
const root = createRoot(element!);

const store = createStore(reducers);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
