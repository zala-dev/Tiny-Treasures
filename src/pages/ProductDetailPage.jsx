import React from "react";
import products from "../mock-data/productsMockData.js";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetailPage = () => {
  const { id: productId } = useParams();
  const navigate = useNavigate();

  const product = products.find((product) => product.id === Number(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div>
      <button onClick={handleBackClick}>Back</button>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default ProductDetailPage;
