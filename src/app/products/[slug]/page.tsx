import React from 'react';
import {notFound, redirect} from "next/navigation";
import { getProduct, getProducts } from '@/service/product';
import Image from "next/image";
import Button from "@/components/Button";
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
    redirect('/products');
    // notFound();
  }

  const { name } = product;

  return (
    <>
      <h1>{name} 제품 설명 페이지</h1>
      <Image
        src={`/images/${product.image}`}
        alt={name}
        width='300'
        height='300'
      />
      <Button />
    </>

  )
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
