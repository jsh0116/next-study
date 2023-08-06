import React from 'react';
import styles from './product.module.css';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '제품 확인',
  description: '제품 내용들을 확인해보십시오.'
}

const ProductLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <nav className={styles.nav}>
        <Link href="/product/woman">여성옷</Link>
        <Link href="/product/man">남성옷</Link>
      </nav>
      <section className={styles.product}>{children}</section>
    </>
  );
};

export default ProductLayout;