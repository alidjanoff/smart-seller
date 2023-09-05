import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";
// Router
import { BrowserRouter } from "react-router-dom";

// Style
import "./assets/scss/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GoogleOAuthProvider clientId="167700561926-h2qthna9p0d9uff76m3of19cvmm1nhpe.apps.googleusercontent.com">
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </GoogleOAuthProvider>
);
