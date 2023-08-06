import React from 'react';
import styles from './product.module.css';
import Link from 'next/link';
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