import React, { useEffect, useState } from "react";
import { fetchProducts } from "../services/product";
import "../components/product.style.scss";

interface Product {
  id: number;
  productName: string;
  qty: number;
  price: number;
  remark: string;
  description: string;
}

function Product() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    (async () => {
      const data = await fetchProducts();
      setProducts(data);
    })();
  }, []);

  return (
    <>
      {products.map((product) => {
        return (
          <div className="product-card" key={product.id}>
            <div>{product.productName}</div>
            <div>{product.qty}</div>
            <div>{product.price}</div>
            <div>{product.remark}</div>
            <div>{product.description}</div>
          </div>
        );
      })}
    </>
  );
}

export default Product;
