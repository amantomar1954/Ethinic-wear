import Link from 'next/link';

const HorizontalScrollCards = ({ title, items }) => {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-6">{title}</h2>
        <div className="relative">
          <div className="overflow-x-auto pb-6 scrollbar-hide">
            <div className="flex space-x-6">
              {items.map((item, index) => (
                <div key={index} className="flex-shrink-0 w-64">
                  <Link href={item.link}>
                    <div className="bg-gray-100 rounded-lg overflow-hidden group">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <h3 className="mt-2 font-medium">{item.title}</h3>
                    <p className="text-red-600 font-bold">{item.price}</p>
                    {item.originalPrice && (
                      <p className="text-gray-500 text-sm line-through">{item.originalPrice}</p>
                    )}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalScrollCards;