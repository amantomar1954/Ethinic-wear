"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FiSearch, FiHeart, FiUser, FiShoppingBag, FiMenu, FiX } from "react-icons/fi";

const EthnicHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const categories = [
    { name: "Products", path: "products", },
    { name: "Shop", path: "shop"},
    { name: "Sale", path: "sale", },
    { name: "New", path: "new",},
    { name: "Category", path: "category" }
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-lg" : "bg-white"}`}>
      {/* Top Announcement Bar */}
      <div className="bg-amber-800 text-white text-center py-2 text-sm font-medium">
        Free Shipping on Orders Above ₹1999 | Use Code ETHNIC20 for 20% Off
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="text-3xl font-bold text-amber-700 font-serif">EthnicWear</div>
          </Link>

          {/* Categories - Desktop */}
          <nav className="hidden lg:flex space-x-1">
            {categories.map((category) => (
              <div 
                key={category.name}
                className="relative group"
                onMouseEnter={() => setActiveCategory(category.name)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                <Link 
                  href={`/${category.path}`}
                  className={`px-4 py-2 text-sm font-medium rounded-md ${activeCategory === category.name ? "text-amber-700 bg-amber-50" : "text-gray-800 hover:text-amber-700"}`}
                >
                  {category.name}
                </Link>
                {category.subcategories && (
                  <div className={`absolute left-0 mt-1 w-56 bg-white shadow-lg rounded-md py-2 z-20 ${activeCategory === category.name ? "block" : "hidden"}`}>
                    {category.subcategories.map((sub) => (
                      <Link 
                        key={sub} 
                        href={`/${category.path}/${sub.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-700"
                      >
                        {sub}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-5">
            {/* Search Icon - Triggers mobile search */}
            <button className="p-1 lg:hidden">
              <FiSearch className="h-5 w-5 text-gray-700" />
            </button>

            {/* Search Bar - Desktop */}
            <div className="hidden  items-center relative w-64">
              <input
                type="text"
                placeholder="Search for ethnic wear..."
                className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FiSearch className="absolute right-3 h-4 w-4 text-gray-500" />
            </div>

            <div className="hidden  items-center space-x-5">
              <Link href="/account" className="flex flex-col items-center">
                <FiUser className="h-5 w-5 text-gray-700 hover:text-amber-700" />
                <span className="text-xs mt-1">Account</span>
              </Link>
              <Link href="/wishlist" className="flex flex-col items-center">
                <FiHeart className="h-5 w-5 text-gray-700 hover:text-amber-700" />
                <span className="text-xs mt-1">Wishlist</span>
              </Link>
              <Link href="/cart" className="flex flex-col items-center relative">
                <FiShoppingBag className="h-5 w-5 text-gray-700 hover:text-amber-700" />
                <span className="text-xs mt-1">Cart</span>
                <span className="absolute -top-1 -right-1 bg-amber-700 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  0
                </span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <FiX className="h-6 w-6 text-gray-700" />
              ) : (
                <FiMenu className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search - Shows when toggled */}
        {isMenuOpen && (
          <div className="hidden px-4 pb-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for ethnic wear..."
                className="block w-full pl-4 pr-10 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FiSearch className="absolute hidden right-3 top-2.5 h-4 w-4 text-gray-500" />
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-xl absolute w-full z-10 border-t border-gray-200">
          <div className="px-4 py-3">
            {categories.map((category) => (
              <div key={category.name} className="mb-1">
                <Link
                  href={`/${category.path}`}
                  className="block font-medium text-gray-800 py-3 px-2 rounded-md hover:bg-amber-50 hover:text-amber-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category.name}
                </Link>
                {category.subcategories && (
                  <div className="pl-4">
                    {category.subcategories.map((sub) => (
                      <Link
                        key={sub}
                        href={`/${category.path}/${sub.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block py-2 px-2 text-sm text-gray-600 rounded-md hover:bg-amber-50 hover:text-amber-700"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {sub}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="border-t hidden border-gray-200 mt-3 pt-3">
              <Link 
                href="/account" 
                className="flex items-center py-2 px-2 text-gray-800 rounded-md hover:bg-amber-50 hover:text-amber-700"
                onClick={() => setIsMenuOpen(false)}
              >
                <FiUser className="mr-3" /> My Account
              </Link>
              <Link 
                href="/wishlist" 
                className="flex items-center py-2 px-2 text-gray-800 rounded-md hover:bg-amber-50 hover:text-amber-700"
                onClick={() => setIsMenuOpen(false)}
              >
                <FiHeart className="mr-3" /> Wishlist
              </Link>
              <Link 
                href="/cart" 
                className="flex items-center py-2 px-2 text-gray-800 rounded-md hover:bg-amber-50 hover:text-amber-700"
                onClick={() => setIsMenuOpen(false)}
              >
                <FiShoppingBag className="mr-3" /> My Cart
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default EthnicHeader;