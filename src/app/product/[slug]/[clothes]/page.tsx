import React from 'react';

type Props = {
  params: {
    clothes: string;
  }
}

export const generateMetadata = ({ params }: Props) => {
  return {
    title: `제품 이름: ${params.clothes}`
  }
}

const ClothesPage = ({ params }: Props) => {
  return (
    <h2>
      {params.clothes} 종류들입니다.
    </h2>
  );
};

export const generateStaticParams = () => {
  const clothes = ['skirts', 'shoes', 'pants', 'shirts'];
  return clothes.map((cloth) => ({
    clothes: cloth,
  }));
}

export default ClothesPage;