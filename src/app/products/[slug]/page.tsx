import React from 'react';
import {notFound} from "next/navigation";
import Link from 'next/link';
import { getProduct, getProducts } from '@/service/product';

// export const revalidate = 3;

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

const ProductPage = async ({ params: {slug} }: Props) => {
  const product = await getProduct(slug);

  if (!product) {
    notFound();
  }

  return <h1>{product.name} 제품 설명 페이지</h1>
};

/**
 * Return a list of `params` to populate the [slug] dynamic segment
 */
export const generateStaticParams = async () => {
  const products = await getProducts();
  return products.map((product) => ({
    slug: product.id,
  }));
}

export default ProductPage;