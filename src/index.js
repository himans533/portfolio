import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from '@auth0/auth0-react';
import "./index.css";
import App from "./App";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-k8wuqi77ewn2qnqi.us.auth0.com"
    clientId="w8pHTSrKg9IGw30ygjJiiVAMT8PLxUi0"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />

  </Auth0Provider>
);

