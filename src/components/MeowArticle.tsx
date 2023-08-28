'use client';
import React, { useEffect, useState } from 'react';
import styles from '@/components/Meow.module.css';

const MeowArticle = () => {
  const [text, setText] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://meowfacts.herokuapp.com', {
        // next: { revalidate: 0 }, // ssr
        // cache: 'no-store',
      });
      const json = await res.json();
      setText(json.data[0]);
    }
    fetchData();
  }, []);

  return <article className={styles.article}>{text}</article>;
};

export default MeowArticle;