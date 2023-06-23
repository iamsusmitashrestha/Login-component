import React, { useEffect, useState } from "react";
import "./App.css";
import Router from "./Router";
import { fetchProducts } from "./services/product";

function App() {
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
