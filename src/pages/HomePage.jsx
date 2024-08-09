import React from "react";
import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";
import { products } from "../mock-data/productsMockData.js";

const HomePage = () => {
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product.name} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomePage;
