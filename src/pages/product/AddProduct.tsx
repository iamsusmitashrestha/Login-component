import React from "react";
import InputField from "../../components/common/Input";

function AddProduct() {
  function addProduct() {}
  return (
    <div>
      <h4>AddProduct</h4>
      <div className="container">
        <InputField label="Product Name" />
        <InputField label="Quantity" type="number" />
        <InputField label="Price" />
        <InputField label="Remark" />
        <InputField label="Description" />

        <button onClick={addProduct}>Add Product</button>
      </div>
    </div>
  );
}

export default AddProduct;
