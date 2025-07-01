import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const categories = [
    { 
      name: 'New Arrivals', 
      subcategories: ['View All', 'Dresses', 'Tops', 'Bottoms', 'Jumpsuits'],
      featured: [
        { name: 'Summer Collection', href: '/new/summer', image: 'https://via.placeholder.com/150' },
        { name: 'Wedding Wear', href: '/new/wedding', image: 'https://via.placeholder.com/150' }
      ]
    },
    { 
      name: 'Clothing', 
      subcategories: ['Dresses', 'Tops', 'Bottoms', 'Jumpsuits', 'Sets'],
      featured: [
        { name: 'Best Sellers', href: '/clothing/bestsellers', image: 'https://via.placeholder.com/150' },
        { name: 'Festive Wear', href: '/clothing/festive', image: 'https://via.placeholder.com/150' }
      ]
    },
    { 
      name: 'Dresses', 
      subcategories: ['A-Line', 'Wrap', 'Maxi', 'Mini', 'Anarkali'],
      featured: [
        { name: 'Party Dresses', href: '/dresses/party', image: 'https://via.placeholder.com/150' },
        { name: 'Casual Dresses', href: '/dresses/casual', image: 'https://via.placeholder.com/150' }
      ]
    }
  ];

  return (
    <nav className="bg-red-600 text-white relative z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hidden md:flex">
          <ul className="flex space-x-6">
            {categories.map((category, index) => (
              <li 
                key={index}
                className="relative py-3 group"
                onMouseEnter={() => setActiveMenu(index)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link 
                  href={`/${category.name.toLowerCase().replace(' ', '-')}`}
                  className="text-sm font-medium hover:underline"
                >
                  {category.name}
                </Link>
                
                {activeMenu === index && (
                  <div className="absolute left-0 w-full bg-white text-gray-800 shadow-xl rounded-b-md z-20">
                    <div className="grid grid-cols-4 gap-6 p-6">
                      <div className="col-span-1">
                        <h4 className="font-bold mb-4">Categories</h4>
                        <ul className="space-y-2">
                          {category.subcategories.map((sub, i) => (
                            <li key={i}>
                              <Link 
                                href={`/${category.name.toLowerCase().replace(' ', '-')}/${sub.toLowerCase().replace(' ', '-')}`}
                                className="hover:text-red-600 text-sm"
                              >
                                {sub}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="col-span-3">
                        <h4 className="font-bold mb-4">Featured Collections</h4>
                        <div className="flex space-x-6">
                          {category.featured.map((item, i) => (
                            <Link key={i} href={item.href} className="group">
                              <div className="w-48 h-64 bg-gray-100 rounded-md overflow-hidden">
                                <img 
                                  src={item.image} 
                                  alt={item.name}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                                />
                              </div>
                              <p className="mt-2 text-sm font-medium">{item.name}</p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;