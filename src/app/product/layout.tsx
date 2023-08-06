import React from 'react';
import styles from './product.module.css';
const ProductLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <nav className={styles.nav}>
        <a href="">여성옷</a>
        <a href="">남성옷</a>
      </nav>
      <section className={styles.product}>{children}</section>
    </>
  );
};

export default ProductLayout;