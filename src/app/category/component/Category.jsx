"use client";
import { useState, useEffect } from 'react';
import Head from 'next/head';

const EthnicWearCategory = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('women');

  const categories = {
    women: [
      { id: 1, name: 'Sarees', image: '/images/saree.jpg', items: 125 },
      { id: 2, name: 'Salwar Kameez', image: '/images/salwar.jpg', items: 89 },
      { id: 3, name: 'Lehengas', image: '/images/lehenga.jpg', items: 64 },
      { id: 4, name: 'Kurtis', image: '/images/kurti.jpg', items: 112 },
    ],
    men: [
      { id: 1, name: 'Kurtas', image: '/images/kurta.jpg', items: 78 },
      { id: 2, name: 'Sherwanis', image: '/images/sherwani.jpg', items: 45 },
      { id: 3, name: 'Dhotis', image: '/images/dhoti.jpg', items: 32 },
      { id: 4, name: 'Jodhpuris', image: '/images/jodhpuri.jpg', items: 56 },
    ],
    kids: [
      { id: 1, name: 'Frocks', image: '/images/frock.jpg', items: 42 },
      { id: 2, name: 'Kurtas', image: '/images/kid-kurta.jpg', items: 38 },
      { id: 3, name: 'Lehengas', image: '/images/kid-lehenga.jpg', items: 29 },
      { id: 4, name: 'Sherwanis', image: '/images/kid-sherwani.jpg', items: 31 },
    ],
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-amber-50">
        <div className="animate-pulse flex space-x-4">
          <div className="w-12 h-12 bg-amber-200 rounded-full"></div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Ethnic Wear Collections | Traditional Clothing</title>
        <meta name="description" content="Explore our exquisite collection of ethnic wear for men, women, and kids" />
      </Head>

      <main className="min-h-screen bg-amber-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mt-26 mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-amber-800 mb-2 animate-fade-in">
            Traditional Ethnic Wear
          </h1>
          <p className="text-center text-amber-600 mb-8 max-w-2xl mx-auto animate-fade-in">
            Discover our handcrafted collections celebrating cultural heritage
          </p>

          <div className="flex justify-center mb-10">
            <div className="inline-flex rounded-md shadow-sm" role="group">
              {['women', 'men', 'kids'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-amber-600 text-white'
                      : 'bg-white text-amber-800 hover:bg-amber-100'
                  } ${tab === 'women' ? 'rounded-r-none' : ''} ${
                    tab === 'kids' ? 'rounded-l-none' : ''
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories[activeTab].map((category) => (
              <div
                key={category.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="relative overflow-hidden h-60">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-medium">
                      {category.items} styles available
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-amber-900 mb-1">
                    {category.name}
                  </h3>
                  <button className="mt-2 w-full py-2 bg-amber-100 text-amber-800 rounded-md hover:bg-amber-200 transition-colors duration-300">
                    Explore
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center animate-fade-in-up">
            <button className="px-6 py-3 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors duration-300 shadow-lg hover:shadow-amber-200">
              View All Collections
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default EthnicWearCategory;