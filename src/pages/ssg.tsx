import React from 'react';
import Link from 'next/link';
import MeowArticle from '@/components/MeowArticle';
import { getProducts } from '@/service/product';
import { Product } from '@/model/product';

interface Props {
  products: Product[];
}

const SSGPage = ({ products }: Props) => {
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

export async function getStaticProps() {
  const products = await getProducts();
  return {
    props: { products },
    revalidate: 10,
  }
};

export default SSGPage;