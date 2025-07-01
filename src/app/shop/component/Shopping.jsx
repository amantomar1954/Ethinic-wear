"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import mockProducts from '../../data/shop.json'; // Assuming you have a mockProducts.js file with product data

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    price: '',
    size: '',
    color: '',
    sort: 'featured',
    category: '' // Added category to filters
  });
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [wishlist, setWishlist] = useState([]);

  // Mock product data
  useEffect(() => {
    // const mockProducts = [
    //   {
    //     id: 1,
    //     name: 'Floral Print Anarkali Suit',
    //     price: 2499,
    //     originalPrice: 3499,
    //     discount: 29,
    //     image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    //     category: 'suits',
    //     colors: ['red', 'blue', 'green'],
    //     sizes: ['S', 'M', 'L', 'XL'],
    //     rating: 4.5,
    //     reviews: 128,
    //     isNew: true
    //   },
    //   {
    //     id: 2,
    //     name: 'Silk Embroidered Lehenga',
    //     price: 5999,
    //     originalPrice: 7999,
    //     discount: 25,
    //     image: 'https://images.unsplash.com/photo-1595341595379-cf0f9570e0a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    //     category: 'lehengas',
    //     colors: ['pink', 'gold', 'maroon'],
    //     sizes: ['M', 'L', 'XL'],
    //     rating: 4.8,
    //     reviews: 89,
    //     isNew: false
    //   },
    //   {
    //     id: 3,
    //     name: 'Cotton Printed Kurti',
    //     price: 899,
    //     originalPrice: 1299,
    //     discount: 31,
    //     image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    //     category: 'kurtis',
    //     colors: ['yellow', 'blue', 'white'],
    //     sizes: ['S', 'M', 'L'],
    //     rating: 4.2,
    //     reviews: 215,
    //     isNew: true
    //   },
    //   {
    //     id: 4,
    //     name: 'Designer Saree with Blouse',
    //     price: 3499,
    //     originalPrice: 4499,
    //     discount: 22,
    //     image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    //     category: 'sarees',
    //     colors: ['black', 'red', 'purple'],
    //     sizes: ['Free Size'],
    //     rating: 4.6,
    //     reviews: 156,
    //     isNew: false
    //   },
    //   {
    //     id: 5,
    //     name: 'Party Wear Palazzo Suit',
    //     price: 1999,
    //     originalPrice: 2599,
    //     discount: 23,
    //     image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    //     category: 'suits',
    //     colors: ['navy', 'teal', 'grey'],
    //     sizes: ['S', 'M', 'L'],
    //     rating: 4.3,
    //     reviews: 178,
    //     isNew: true
    //   },
    //   {
    //     id: 6,
    //     name: 'Bridal Lehenga with Dupatta',
    //     price: 8999,
    //     originalPrice: 11999,
    //     discount: 25,
    //     image: 'https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    //     category: 'lehengas',
    //     colors: ['red', 'gold'],
    //     sizes: ['M', 'L', 'XL'],
    //     rating: 4.9,
    //     reviews: 64,
    //     isNew: false
    //   },
    //   {
    //     id: 7,
    //     name: 'Casual Cotton Kurti',
    //     price: 799,
    //     originalPrice: 999,
    //     discount: 20,
    //     image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    //     category: 'kurtis',
    //     colors: ['white', 'black', 'grey'],
    //     sizes: ['S', 'M', 'L'],
    //     rating: 4.1,
    //     reviews: 203,
    //     isNew: false
    //   },
    //   {
    //     id: 8,
    //     name: 'Banarasi Silk Saree',
    //     price: 4999,
    //     originalPrice: 5999,
    //     discount: 17,
    //     image: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    //     category: 'sarees',
    //     colors: ['red', 'green', 'blue'],
    //     sizes: ['Free Size'],
    //     rating: 4.7,
    //     reviews: 142,
    //     isNew: true
    //   },
    //   {
    //     id: 9,
    //     name: 'Printed Georgette Saree',
    //     price: 2799,
    //     originalPrice: 3599,
    //     discount: 22,
    //     image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    //     category: 'sarees',
    //     colors: ['blue', 'green', 'pink'],
    //     sizes: ['Free Size'],
    //     rating: 4.4,
    //     reviews: 97,
    //     isNew: false
    //   },
    //   {
    //     id: 10,
    //     name: 'Designer Sharara Suit',
    //     price: 3299,
    //     originalPrice: 4299,
    //     discount: 23,
    //     image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    //     category: 'suits',
    //     colors: ['peach', 'mint', 'lavender'],
    //     sizes: ['S', 'M', 'L'],
    //     rating: 4.6,
    //     reviews: 112,
    //     isNew: true
    //   }
    // ];

    setProducts(mockProducts.products);
    setFilteredProducts(mockProducts.products);
    setLoading(false);
  }, []);

  // Apply filters and sorting
  useEffect(() => {
    let result = [...products];
    
    // Category filter
    if (filters.category) {
      result = result.filter(product => product.category === filters.category);
    }
    
    // Price filter
    if (filters.price) {
      const [min, max] = filters.price.split('-').map(Number);
      result = result.filter(product => {
        if (max) {
          return product.price >= min && product.price <= max;
        } else {
          return product.price >= min;
        }
      });
    }
    
    // Size filter
    if (filters.size) {
      result = result.filter(product => product.sizes.includes(filters.size));
    }
    
    // Color filter
    if (filters.color) {
      result = result.filter(product => product.colors.includes(filters.color));
    }
    
    // Sorting
    switch (filters.sort) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.sort((a, b) => b.isNew - a.isNew);
        break;
      case 'discount':
        result.sort((a, b) => b.discount - a.discount);
        break;
      default: // featured
        result.sort((a, b) => b.rating - a.rating);
    }
    
    setFilteredProducts(result);
  }, [filters, products]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleCategoryChange = (category) => {
    setFilters(prev => ({ ...prev, category }));
  };

  const toggleWishlist = (productId) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId) 
        : [...prev, productId]
    );
  };

  const clearFilters = () => {
    setFilters({
      price: '',
      size: '',
      color: '',
      sort: 'featured',
      category: ''
    });
  };

  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    ...(filters.category ? [{ 
      name: `${filters.category.charAt(0).toUpperCase() + filters.category.slice(1)}`, 
      href: '#' 
    }] : [])
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-[1600px]  mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex mt-28 items-center space-x-4">
              {breadcrumbItems.map((item, index) => (
                <li key={item.name}>
                  <div className="flex items-center">
                    {index > 0 && (
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                      </svg>
                    )}
                    <Link
                      href={item.href}
                      className={`ml-4 text-sm font-medium ${index === breadcrumbItems.length - 1 ? 'text-red-600' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                      {item.name}
                    </Link>
                  </div>
                </li>
              ))}
            </ol>
          </nav>
          <h1 className="text-2xl font-bold text-gray-900 mt-2">
            {filters.category ? `${filters.category.charAt(0).toUpperCase() + filters.category.slice(1)} Collection` : 'Shop Ethnic Wear'}
          </h1>
        </div>
      </header>

      <main className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Mobile filter dialog */}
        <div className="md:hidden mb-4">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            onClick={() => setMobileFiltersOpen(true)}
          >
            Filters
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {mobileFiltersOpen && (
          <div className="fixed inset-0 z-40 overflow-y-auto p-4 bg-black bg-opacity-50 md:hidden">
            <div className="bg-white rounded-lg shadow-xl max-w-xs mx-auto p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold">Filters</h2>
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="space-y-6">
                {/* Category Filter */}
                <div>
                  <h3 className="font-medium mb-2">Category</h3>
                  <select
                    name="category"
                    value={filters.category}
                    onChange={handleFilterChange}
                    className="w-full p-2 border border-gray-300 rounded"
                  >
                    <option value="">All Categories</option>
                    <option value="suits">Suits</option>
                    <option value="lehengas">Lehengas</option>
                    <option value="kurtis">Kurtis</option>
                    <option value="sarees">Sarees</option>
                  </select>
                </div>

                {/* Price Filter */}
                <div>
                  <h3 className="font-medium mb-2">Price Range</h3>
                  <select
                    name="price"
                    value={filters.price}
                    onChange={handleFilterChange}
                    className="w-full p-2 border border-gray-300 rounded"
                  >
                    <option value="">All Prices</option>
                    <option value="0-1000">Under ₹1000</option>
                    <option value="1000-3000">₹1000 - ₹3000</option>
                    <option value="3000-5000">₹3000 - ₹5000</option>
                    <option value="5000">Above ₹5000</option>
                  </select>
                </div>

                {/* Size Filter */}
                <div>
                  <h3 className="font-medium mb-2">Size</h3>
                  <select
                    name="size"
                    value={filters.size}
                    onChange={handleFilterChange}
                    className="w-full p-2 border border-gray-300 rounded"
                  >
                    <option value="">All Sizes</option>
                    <option value="S">Small</option>
                    <option value="M">Medium</option>
                    <option value="L">Large</option>
                    <option value="XL">XL</option>
                  </select>
                </div>

                {/* Color Filter */}
                <div>
                  <h3 className="font-medium mb-2">Color</h3>
                  <select
                    name="color"
                    value={filters.color}
                    onChange={handleFilterChange}
                    className="w-full p-2 border border-gray-300 rounded"
                  >
                    <option value="">All Colors</option>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="black">Black</option>
                    <option value="white">White</option>
                  </select>
                </div>

                <div className="flex space-x-3">
                  <button
                    onClick={() => {
                      setMobileFiltersOpen(false);
                    }}
                    className="flex-1 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
                  >
                    Apply
                  </button>
                  <button
                    onClick={() => {
                      clearFilters();
                      setMobileFiltersOpen(false);
                    }}
                    className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded hover:bg-gray-300"
                  >
                    Clear
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters Sidebar */}
          <aside className="w-full md:w-64 flex-shrink-0 hidden md:block">
            <div className="bg-white p-4 rounded-lg shadow sticky top-6">
              <h2 className="font-bold text-lg mb-4">Filters</h2>
              
              <div className="space-y-6">
                {/* Category Filter */}
                <div>
                  <h3 className="font-medium mb-2">Category</h3>
                  <select
                    name="category"
                    value={filters.category}
                    onChange={handleFilterChange}
                    className="w-full p-2 border border-gray-300 rounded"
                  >
                    <option value="">All Categories</option>
                    <option value="suits">Suits</option>
                    <option value="lehengas">Lehengas</option>
                    <option value="kurtis">Kurtis</option>
                    <option value="sarees">Sarees</option>
                  </select>
                </div>

                {/* Price Filter */}
                <div>
                  <h3 className="font-medium mb-2">Price Range</h3>
                  <select
                    name="price"
                    value={filters.price}
                    onChange={handleFilterChange}
                    className="w-full p-2 border border-gray-300 rounded"
                  >
                    <option value="">All Prices</option>
                    <option value="0-1000">Under ₹1000</option>
                    <option value="1000-3000">₹1000 - ₹3000</option>
                    <option value="3000-5000">₹3000 - ₹5000</option>
                    <option value="5000">Above ₹5000</option>
                  </select>
                </div>

                {/* Size Filter */}
                <div>
                  <h3 className="font-medium mb-2">Size</h3>
                  <select
                    name="size"
                    value={filters.size}
                    onChange={handleFilterChange}
                    className="w-full p-2 border border-gray-300 rounded"
                  >
                    <option value="">All Sizes</option>
                    <option value="S">Small</option>
                    <option value="M">Medium</option>
                    <option value="L">Large</option>
                    <option value="XL">XL</option>
                  </select>
                </div>

                {/* Color Filter */}
                <div>
                  <h3 className="font-medium mb-2">Color</h3>
                  <select
                    name="color"
                    value={filters.color}
                    onChange={handleFilterChange}
                    className="w-full p-2 border border-gray-300 rounded"
                  >
                    <option value="">All Colors</option>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="black">Black</option>
                    <option value="white">White</option>
                  </select>
                </div>

                <div className="flex space-x-3">
                  <button
                    onClick={() => {}}
                    className="flex-1 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
                  >
                    Apply
                  </button>
                  <button
                    onClick={clearFilters}
                    className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded hover:bg-gray-300"
                  >
                    Clear
                  </button>
                </div>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Sort Options */}
            <div className="bg-white p-4 rounded-lg shadow mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div>
                <span className="text-sm text-gray-600">
                  Showing {filteredProducts.length} of {products.length} products
                </span>
              </div>
              <div className="flex items-center w-full sm:w-auto">
                <label htmlFor="sort" className="mr-2 text-sm text-gray-600 whitespace-nowrap">
                  Sort by:
                </label>
                <select
                  name="sort"
                  value={filters.sort}
                  onChange={handleFilterChange}
                  className="p-2 border border-gray-300 rounded text-sm w-full"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest Arrivals</option>
                  <option value="discount">Discount %</option>
                </select>
              </div>
            </div>

            {/* Category Tabs */}
            <div className="bg-white p-4 rounded-lg shadow mb-6 overflow-x-auto">
              <div className="flex space-x-4 min-w-max">
                <button
                  onClick={() => handleCategoryChange('')}
                  className={`px-4 py-2 rounded-md ${!filters.category ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                >
                  All
                </button>
                <button
                  onClick={() => handleCategoryChange('suits')}
                  className={`px-4 py-2 rounded-md ${filters.category === 'suits' ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                >
                  Suits
                </button>
                <button
                  onClick={() => handleCategoryChange('lehengas')}
                  className={`px-4 py-2 rounded-md ${filters.category === 'lehengas' ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                >
                  Lehengas
                </button>
                <button
                  onClick={() => handleCategoryChange('kurtis')}
                  className={`px-4 py-2 rounded-md ${filters.category === 'kurtis' ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                >
                  Kurtis
                </button>
                <button
                  onClick={() => handleCategoryChange('sarees')}
                  className={`px-4 py-2 rounded-md ${filters.category === 'sarees' ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                >
                  Sarees
                </button>
              </div>
            </div>

            {/* Loading State */}
            {loading && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="bg-white rounded-lg shadow overflow-hidden animate-pulse">
                    <div className="h-64 bg-gray-200"></div>
                    <div className="p-4 space-y-2">
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Products Grid */}
            {!loading && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow group">
                    <div className="relative">
                      <Link href={`/shop/${product.id}`}>
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-64 object-cover"
                        />
                      </Link>
                      {product.discount > 0 && (
                        <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                          {product.discount}% OFF
                        </div>
                      )}
                      <button
                        onClick={() => toggleWishlist(product.id)}
                        className={`absolute top-2 left-2 p-2 rounded-full ${wishlist.includes(product.id) ? 'text-red-600' : 'text-gray-400 hover:text-red-600'} bg-white shadow-md hover:shadow-lg transition-all`}
                      >
                        <svg
                          className="w-5 h-5"
                          fill={wishlist.includes(product.id) ? 'currentColor' : 'none'}
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </button>
                      {product.isNew && (
                        <div className="absolute top-2 left-12 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
                          NEW
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <Link href={`/shop/${product.id}`}>
                        <h3 className="font-medium text-gray-900 mb-1 hover:text-red-600 transition-colors">
                          {product.name}
                        </h3>
                      </Link>
                      <div className="flex items-center mb-2">
                        <div className="flex items-center">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg
                              key={star}
                              className={`w-4 h-4 ${star <= Math.round(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <span className="text-red-600 font-bold">₹{product.price.toLocaleString()}</span>
                          {product.originalPrice > product.price && (
                            <span className="text-gray-500 text-sm line-through ml-2">
                              ₹{product.originalPrice.toLocaleString()}
                            </span>
                          )}
                        </div>
                        <button className="text-sm font-medium text-red-600 hover:text-red-700">
                          Quick View
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Empty State */}
            {!loading && filteredProducts.length === 0 && (
              <div className="bg-white p-8 rounded-lg shadow text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your filters or search for something else</p>
                <button
                  onClick={clearFilters}
                  className="bg-red-600 text-white py-2 px-6 rounded hover:bg-red-700"
                >
                  Clear Filters
                </button>
              </div>
            )}

            {/* Pagination */}
            {!loading && filteredProducts.length > 0 && (
              <div className="bg-white p-4 rounded-lg shadow mt-6 flex justify-center">
                <nav className="flex items-center space-x-2">
                  <button className="px-3 py-1 rounded border border-gray-300 text-gray-500 hover:bg-gray-50">
                    Previous
                  </button>
                  <button className="px-3 py-1 rounded bg-red-600 text-white">1</button>
                  <button className="px-3 py-1 rounded border border-gray-300 text-gray-700 hover:bg-gray-50">
                    2
                  </button>
                  <button className="px-3 py-1 rounded border border-gray-300 text-gray-700 hover:bg-gray-50">
                    3
                  </button>
                  <span className="px-2 text-gray-500">...</span>
                  <button className="px-3 py-1 rounded border border-gray-300 text-gray-700 hover:bg-gray-50">
                    8
                  </button>
                  <button className="px-3 py-1 rounded border border-gray-300 text-gray-500 hover:bg-gray-50">
                    Next
                  </button>
                </nav>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ShopPage;
