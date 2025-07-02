// /src/app/products/[productId]/page.js

import React from 'react';
import ProductPage from './component/Products';
import productData from "../../data/products.json";

// ✅ Dynamic Metadata
export async function generateMetadata({ params }) {
  const { productId } = params;

  // Find the product
  const product = productData.products.find((item) => String(item.id) === productId);

  // If product not found, you can return default metadata
  if (!product) {
    return {
      title: 'Product Not Found',
      description: 'This product does not exist.',
    };
  }

  return {
    title: product.name,
    description: `${product.description}`,
  };
}

const page = ({ params }) => {
  return (
    <>
      {/* <ProductPage params={params} />
       */}
       <ProductPage params={{ productId: params.productId }} />
    </>
  );
};

export default page;