import React from 'react';
import Link from 'next/link';
import MeowArticle from '@/components/MeowArticle';
import { Product } from '@/model/product';
import { getProducts } from '@/service/product';

interface Props {
  products: Product[];
}

const SSRPage = ({ products }: Props) => {
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

export async function getServerSideProps() {
  const products = await getProducts();
  return {
    props: { products },
  }
}

export default SSRPage;