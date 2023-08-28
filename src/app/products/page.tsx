import React from 'react';
import Link from 'next/link';
import { getProducts } from '@/service/product';
import styles from './page.module.css';

const ProductsPage = async () => {
  const products = await getProducts();
  const res = await fetch('https://meowfacts.herokuapp.com', {
    // next: { revalidate: 0 }, // ssr
    // cache: 'no-store',
  });
  const json = await res.json();
  const text = json.data[0];
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
      <article className={styles.article}>{text}</article>
    </>
  );
};

export default ProductsPage;