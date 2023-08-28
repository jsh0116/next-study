import React from 'react';
import Link from 'next/link';
import { getProducts } from '@/service/product';
import styles from './page.module.css';
import MeowArticle from '@/components/MeowArticle';

const ProductsPage = async () => {
  const products = await getProducts();

  return (
    <>
      <h2>제품 소개 페이지</h2>
      <ul>
        {products.map((product, index) => (
          <li key={`product-${index.toString()}`}>
            <Link href={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
      <MeowArticle />
    </>
  );
};

export default ProductsPage;