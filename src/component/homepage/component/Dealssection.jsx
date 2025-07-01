import React from 'react';
import Link from 'next/link';

const DealsSection = () => {
  const deals = [
    {
      title: 'FLAT 30% OFF',
      subtitle: 'On all dresses',
      image: 'https://www.houseofindya.com/img/deals/dresses-deal.jpg',
      link: '/dresses-sale',
      cta: 'SHOP NOW',
      expiration: 'Offer ends in 2 days'
    },
    {
      title: 'BUY 1 GET 1 FREE',
      subtitle: 'On selected tops',
      image: 'https://www.houseofindya.com/img/deals/tops-deal.jpg',
      link: '/tops-sale',
      cta: 'EXPLORE',
      expiration: 'Limited time offer'
    },
    {
      title: 'UPTO 50% OFF',
      subtitle: 'Summer collection',
      image: 'https://www.houseofindya.com/img/deals/summer-deal.jpg',
      link: '/summer-sale',
      cta: 'GRAB DEAL',
      expiration: 'While stocks last'
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">HOT DEALS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {deals.map((deal, index) => (
            <div key={index} className="relative rounded-lg overflow-hidden shadow-lg">
              <img 
                src={deal.image} 
                alt={deal.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{deal.title}</h3>
                <p className="text-white mb-4">{deal.subtitle}</p>
                <p className="text-yellow-300 text-sm mb-4">{deal.expiration}</p>
                <Link 
                  href={deal.link}
                  className="bg-white text-red-600 px-6 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors"
                >
                  {deal.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DealsSection;