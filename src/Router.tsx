import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import AddProduct from "./pages/product/AddProduct";
import Product from "./components/Product";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="addProduct" element={<AddProduct />} />
        <Route path="getProduct" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
