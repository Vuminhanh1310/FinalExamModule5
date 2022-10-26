import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";
import CreateProduct from "./pages/CreateProduct";
import EditProduct from "./pages/EditProduct";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/products" element={<ProductList/>}/>
              <Route path="/products/:id" element={<ProductDetails/>}/>
              <Route path="/products/create" element={<CreateProduct/>}/>
              <Route path="/products/edit/:id" element={<EditProduct/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
