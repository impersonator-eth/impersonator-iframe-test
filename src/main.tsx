import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ImpersonatorIframeProvider } from "@impersonator/iframe";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ImpersonatorIframeProvider>
      <App />
    </ImpersonatorIframeProvider>
  </React.StrictMode>
);
