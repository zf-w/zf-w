import React from "react";
import ReactDOM from "react-dom/client";
import { SanElem } from "./components/SanElem.jsx";
import "./index.css";

import { Route } from "react-router-dom";
import { GraphSection } from "./pages/GraphSection";
import { SingleGraph } from "./pages/SingleGraph";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { createRoutesFromElements } from "react-router-dom";

const errorElement = (
  <h1
    style={{
      color: "#ffffff",
      width: "100%",
      textAlign: "center",
      height: "100vh",
    }}
  >
    404 Not found
  </h1>
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route exact path="Graphs" errorElement={errorElement}>
        <Route index element={<GraphSection />} />
        <Route exact path="Pages/:id" element={<GraphSection />} />
        <Route
          loader={async ({ signal }) => {
            console.log("Loading~");
            return fetch("/graph-files/index.json", { signal });
          }}
          path=":str"
          element={<SingleGraph />}
        />
      </Route>
      <Route path="*" element={errorElement} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <SanElem />
    <RouterProvider router={router} />
  </>
);
