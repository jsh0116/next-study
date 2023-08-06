import React from 'react';
import {notFound} from "next/navigation";

type Props = {
  params: {
    slug: string;
  }
}

const ProductPage = ({ params }: Props) => {
  if (params.slug === 'nothing') {
    notFound();
  }
  return (
    <h1>{params.slug}바지 제품 설명 페이지</h1>
  );
};

/**
 * Return a list of `params` to populate the [slug] dynamic segment
 */
export const generateStaticParams = () => {
  const products = ['pants', 'skirt'];
  return products.map((product) => ({
    slug: product,
  }));
}

export default ProductPage;