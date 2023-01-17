import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Navbar from "./Navbar";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Navbar />} />)
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
