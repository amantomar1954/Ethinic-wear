import React from 'react';
import Link from 'next/link';

const CategorySection = () => {
  const categories = [
    { name: 'Dresses', image: 'https://www.houseofindya.com/img/category/dresses.jpg', link: '/dresses' },
    { name: 'Tops', image: 'https://www.houseofindya.com/img/category/tops.jpg', link: '/tops' },
    { name: 'Bottoms', image: 'https://www.houseofindya.com/img/category/bottoms.jpg', link: '/bottoms' },
    { name: 'Jumpsuits', image: 'https://www.houseofindya.com/img/category/jumpsuits.jpg', link: '/jumpsuits' },
    { name: 'Accessories', image: 'https://www.houseofindya.com/img/category/accessories.jpg', link: '/accessories' },
    { name: 'Footwear', image: 'https://www.houseofindya.com/img/category/footwear.jpg', link: '/footwear' },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">SHOP BY CATEGORY</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <Link 
              key={index}
              href={category.link}
              className="group relative block overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <img 
                src={category.image} 
                alt={category.name}
                className="w-full h-48 md:h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <h3 className="text-white text-xl font-bold">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;