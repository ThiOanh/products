import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductList from './Product';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://batch-293-0-nodejs.onrender.com/user/products?fbclid=IwAR3ZITzl2PM83MLucQj73spCrAkGwRU5redzEkTgklxtKkd1sm_H4ht3y9c'); // Replace with your actual API endpoint
        setProducts(response.data.payload);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      <ProductList products={products} />
    </div>
  );
};

export default Home;
