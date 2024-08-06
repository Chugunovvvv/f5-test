import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import client from "./apollo/apolloClient.ts";
import { ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";
import store from "./store/store.ts";
import "./index.scss";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Provider>
  </React.StrictMode>
);
