// app/shop/[slug]/page.js
import { notFound } from 'next/navigation';
import products from "../../data/shop.json";
import ProductDetailPage from './component/Shope';  

export async function generateMetadata({ params }) {
  const { slug } = params;
  
  // Find the specific product
  const product = products.products.find(
    (item) => String(item.id) === String(slug)
  );

  if (!product) {
    return {
      title: 'Product Not Found',
      description: 'This product does not exist',
    };
  }

  return {
    title: product.name,
    description: product.description || `${product.name} - Product details`,
    openGraph: {
      title: product.name,
      description: product.description || `${product.name} - Product details`,
      images: [
        {
          url: product.image,
          width: 800,
          height: 600,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: product.name,
      description: product.description || `${product.name} - Product details`,
      images: [product.image],
    },
  };
}

const Page = ({ params }) => {
  return <ProductDetailPage />;
};

export default Page;