import React from 'react';
import styles from './product.module.css';
import Link from 'next/link';
import { Metadata } from 'next';
import { getProducts } from '@/service/product';

export const metadata: Metadata = {
  title: '제품 확인',
  description: '제품 내용들을 확인해보십시오.'
}

interface Props {
  children: React.ReactNode;
}

const ProductsLayout = async ({ children }: Props) => {
  const products = await getProducts();
  return (
    <>
      <nav className={styles.nav}>
        <Link href='/products/woman'>여성옷</Link>
        <Link href='/products/man'>남성옷</Link>
      </nav>
      <section className={styles.product}>{children}</section>
    </>
  );
};

export default ProductsLayout;