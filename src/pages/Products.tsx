import React from 'react';
import ProductList from '../components/product/ProductList';
import { Product } from '../types';

interface ProductsProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

const Products: React.FC<ProductsProps> = ({ products, onAddToCart }) => {
  return (
    <div>
      <div className="bg-light py-4">
        <div className="container">
          <h2 className="mb-0">
            <i className="bi bi-grid me-2"></i>
            Catálogo de Productos
          </h2>
          <p className="text-muted mb-0">
            Encuentra los mejores productos tecnológicos
          </p>
        </div>
      </div>
      <ProductList products={products} onAddToCart={onAddToCart} />
    </div>
  );
};

export default Products;