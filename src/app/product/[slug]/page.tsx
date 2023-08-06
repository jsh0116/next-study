import React from 'react';
import {notFound} from "next/navigation";
import Link from 'next/link';

type Props = {
  params: {
    slug: string;
  }
}

export const generateMetadata = ({ params }: Props) => {
  return {
    title: `${params.slug} 제품`
  }
}

const ProductPage = ({ params }: Props) => {
  if (params.slug === 'nothing') {
    notFound();
  }
  const PRODUCT_URL = `/product/${params.slug}`;
  return (
    <ul>
      <li>
        <Link href={`${PRODUCT_URL}/pants`}>pants</Link>
      </li>
      <li>
        <Link href={`${PRODUCT_URL}/skirts`}>skirts</Link>
      </li>
      <li>
        <Link href={`${PRODUCT_URL}/shirts`}>shirts</Link>
      </li>
      <li>
        <Link href={`${PRODUCT_URL}/shoes`}>shoes</Link>
      </li>
    </ul>


  );
};

/**
 * Return a list of `params` to populate the [slug] dynamic segment
 */
export const generateStaticParams = () => {
  const products = ['man', 'woman'];
  return products.map((product) => ({
    slug: product,
  }));
}

export default ProductPage;