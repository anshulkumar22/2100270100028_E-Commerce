import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../services/api';
import ProductCard from '../components/ProductCard';
// import './AllProductsPage.css';

const AllProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({ category: '', company: '', rating: 0, priceRange: [0, 1000], availability: true });
  const [sort, setSort] = useState('price');

  useEffect(() => {
    const loadProducts = async () => {
      const response = await fetchProducts(filters.category, filters.company);
      setProducts(response.data);
    };
    loadProducts();
  }, [filters]);

  return (
    <div>
      <h1>All Products</h1>
      {/* Filters and Sorting UI */}
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProductsPage;