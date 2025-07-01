import React from 'react';
import Link from 'next/link';

const ProductGrid = ({ title = 'TRENDING NOW', products }) => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <Link href={product.link} className="block">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                  {product.discount && (
                    <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                      {product.discount}
                    </div>
                  )}
                  <button className="absolute bottom-2 left-2 bg-white text-gray-800 p-2 rounded-full shadow hover:bg-gray-100">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-medium mb-1">{product.name}</h3>
                  <div className="flex items-center">
                    <span className="text-red-600 font-bold">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-gray-500 text-sm line-through ml-2">{product.originalPrice}</span>
                    )}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link 
            href="/shop"
            className="inline-block border-2 border-red-600 text-red-600 px-8 py-3 rounded-md font-medium hover:bg-red-600 hover:text-white transition-colors"
          >
            VIEW ALL
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;