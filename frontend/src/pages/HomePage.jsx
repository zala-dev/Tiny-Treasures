import React from "react";
import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";
import Loader from "../components/Loader.jsx";
import Message from "../components/Message.jsx";
import TopProducts from "../components/TopProducts.jsx";
import { useParams, Link } from "react-router-dom";
import { useGetProductsQuery } from "../slices/productApiSlice.js";

const HomePage = () => {
  const { keyword } = useParams();
  const { data: products, isLoading, error } = useGetProductsQuery({ keyword });

  return (
    <>
      {!keyword ? (
        <TopProducts />
      ) : (
        <Link to="/" className="btn btn-light">
          Go Back
        </Link>
      )}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <h1>Latest Products</h1>
          <Row>
            {products?.map((product) => (
              <Col key={product.name} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
};

export default HomePage;
