import React from "react";
import { Card } from "react-bootstrap";

const Product = ({ product }) => {
  return (
    <Card className="my-3 py-3 rounded" title={product.name}>
      <Card.Img src={product.image} className="card-img-top" />
      <Card.Body>
        <Card.Title as="div" className="product-title">
          {product.name}
        </Card.Title>
        <Card.Text as="div">{`${product.numReviews} reviews`}</Card.Text>
        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
