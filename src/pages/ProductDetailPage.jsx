import React from "react";
import products from "../mock-data/productsMockData.js";
import { useParams, Link } from "react-router-dom";

const ProductDetailPage = () => {
  const { id: productId } = useParams();

  const product = products.find((product) => product.id === Number(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Link to="/">Go Back</Link>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default ProductDetailPage;
