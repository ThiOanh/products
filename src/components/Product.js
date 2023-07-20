import React from 'react';
import { Row, Col, Card, Typography, Tag } from 'antd';

const { Title, Text } = Typography;

const ProductList = ({ products }) => {
  return (
    <Row gutter={[16, 16]}>
      {products.map((product) => (
        <Col key={product._id} span={6}>
          <Card title={<Title level={3}>{product.name}</Title>}>
            <Text>{product.description}</Text>
            <br />
            <Text strong>Price:</Text> {product.price}
            <br />
            <Text strong>Discount:</Text> {product.discount}%
            <br />
            <Text strong>Stock:</Text> {product.stock}
            <br />
            <Text strong>Category:</Text> {product.category.name}
            <br />
            <Text strong>Supplier:</Text> {product.supplier.name}
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ProductList;
