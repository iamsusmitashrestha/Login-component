import React, { useState } from "react";

interface productProps {
  prodName: string;
  qty: number;
  price: number;
  remark: string;
  description: string;
}

function AddProduct() {
  const [prodName, setProdName] = useState("");
  const [qty, setQty] = useState("");
  const [price, setPrice] = useState("");
  const [remark, setRemark] = useState("");
  const [description, setDescription] = useState("");

  const onProdNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProdName(event.target.value);
  };
  const onQtyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQty(event.target.value);
  };
  const onPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(event.target.value);
  };
  const onRemarkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRemark(event.target.value);
  };
  const onDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  function addProduct() {}
  return (
    <div>
      <h4>AddProduct</h4>
      <div className="container">
        <label>Product Name:</label>
        <input type="text" value={prodName} onChange={onProdNameChange} />
        <label>Quantity:</label>
        <input type="string" value={qty} onChange={onQtyChange} />
        <label>Price:</label>
        <input type="number" value={price} onChange={onPriceChange} />
        <label>Remark:</label>
        <input type="text" value={remark} onChange={onRemarkChange} />
        <label>Description:</label>
        <input type="text" value={description} onChange={onDescriptionChange} />

        <button onClick={addProduct}>Add Product</button>
      </div>
    </div>
  );
}

export default AddProduct;
