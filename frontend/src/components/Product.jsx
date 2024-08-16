import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <Card className="my-3 py-3 rounded" title={product.name}>
      <Card.Img src={product.image} className="card-img-top" />
      <Card.Body>
        <Link to={`product/${product._id}`}>
          <Card.Title as="div" className="product-title">
            {product.name}
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>
        <Card.Text as="h3">AU${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
