"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiHeart, FiShoppingBag, FiStar, FiChevronRight } from "react-icons/fi";

const NewArrivals = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const categories = [
    { id: "all", name: "All New Arrivals" },
    { id: "sarees", name: "Sarees" },
    { id: "lehengas", name: "Lehengas" },
    { id: "kurtas", name: "Kurtas" },
    { id: "jewelry", name: "Jewelry" },
    { id: "accessories", name: "Accessories" },
  ];

  const products = [
    // Sarees
    {
      id: 1,
      name: "Banarasi Silk Gold Zari Saree",
      price: 5999,
      discountPrice: 4499,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFuYXJhc2klMjBzaWxrJTIwc2FyZWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      category: "sarees",
      isNew: true,
      colors: ["#C19A6B", "#E6BE8A", "#F5DEB3"],
    },
    {
      id: 2,
      name: "Kanjivaram Pure Silk Saree",
      price: 8999,
      discountPrice: 7199,
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2Fuaml2YXJhbSUyMHNpbGslMjBzYXJlZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      category: "sarees",
      isNew: true,
      colors: ["#800020", "#C41E3A", "#E0115F"],
    },
    {
      id: 3,
      name: "Chanderi Cotton Floral Saree",
      price: 4599,
      discountPrice: 3679,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1630001896327-df7c525357d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhbmRlcmklMjBzYXJlZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      category: "sarees",
      isNew: true,
      colors: ["#4682B4", "#5D8AA8", "#B0E0E6"],
    },

    // Lehengas
    {
      id: 4,
      name: "Bridal Red Lehenga with Zardozi",
      price: 15999,
      discountPrice: 12799,
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGVoZW5nYSUyMGNob2xpfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      category: "lehengas",
      isNew: true,
      colors: ["#800000", "#C41E3A", "#FF2400"],
    },
    {
      id: 5,
      name: "Pastel Pink Net Lehenga",
      price: 12999,
      discountPrice: 10399,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmV0JTIwbGVoZW5nYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      category: "lehengas",
      isNew: true,
      colors: ["#FFC0CB", "#F8C8DC", "#FFD1DC"],
    },
    {
      id: 6,
      name: "Royal Blue Velvet Lehenga",
      price: 13999,
      discountPrice: 11199,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dmVsdmV0JTIwbGVoZW5nYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      category: "lehengas",
      isNew: true,
      colors: ["#00008B", "#4169E1", "#1E90FF"],
    },

    // Kurtas
    {
      id: 7,
      name: "Chikankari Embroidered Kurta Set",
      price: 4999,
      discountPrice: 3999,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpa2Fua2FyaSUyMGt1cnRhfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      category: "kurtas",
      isNew: true,
      colors: ["#FFFFFF", "#F5F5F5", "#F8F8FF"],
    },
    {
      id: 8,
      name: "Ajrakh Printed Cotton Kurta",
      price: 3999,
      discountPrice: 3199,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWpyYWtoJTIwa3VydGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      category: "kurtas",
      isNew: true,
      colors: ["#556B2F", "#6B8E23", "#808000"],
    },
    {
      id: 9,
      name: "Silk Anarkali Kurta with Dupatta",
      price: 5999,
      discountPrice: 4799,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2lsayUyMGt1cnRhfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      category: "kurtas",
      isNew: true,
      colors: ["#800080", "#9370DB", "#DA70D6"],
    },

    // Jewelry
    {
      id: 10,
      name: "Kundan Necklace Set",
      price: 7999,
      discountPrice: 6399,
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a3VuZGFuJTIwamV3ZWxyeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      category: "jewelry",
      isNew: true,
      colors: ["#FFD700", "#C5B358", "#E6BE8A"],
    },
    {
      id: 11,
      name: "Polki Earrings & Maang Tikka Set",
      price: 5999,
      discountPrice: 4799,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9sa2klMjBqZXdlbHJ5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      category: "jewelry",
      isNew: true,
      colors: ["#FFFFFF", "#F5F5F5", "#FFFAFA"],
    },
    {
      id: 12,
      name: "Temple Jewelry Set",
      price: 8999,
      discountPrice: 7199,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGVtcGxlJTIwamV3ZWxyeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      category: "jewelry",
      isNew: true,
      colors: ["#C0C0C0", "#D3D3D3", "#E5E4E2"],
    },

    // Accessories
    {
      id: 13,
      name: "Zari Work Potli Bag",
      price: 1999,
      discountPrice: 1599,
      rating: 4.4,
      image:
        "https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG90bGklMjBiYWd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      category: "accessories",
      isNew: true,
      colors: ["#800020", "#722F37", "#C41E3A"],
    },
    {
      id: 14,
      name: "Silk Embroidered Clutch",
      price: 2499,
      discountPrice: 1999,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZW1icm9pZGVyZWQlMjBjbHV0Y2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      category: "accessories",
      isNew: true,
      colors: ["#000000", "#36454F", "#708090"],
    },
    {
      id: 15,
      name: "Brocade Stole with Tassels",
      price: 1799,
      discountPrice: 1439,
      rating: 4.3,
      image:
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJvY2FkZSUyMHN0b2xlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      category: "accessories",
      isNew: true,
      colors: ["#556B2F", "#6B8E23", "#8F9779"],
    },
  ];

  const filteredProducts =
    activeTab === "all"
      ? products
      : products.filter((product) => product.category === activeTab);

  // Featured products are always the first 4 products regardless of filter
  const featuredProducts = products.slice(0, 4);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const stagger = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const ProductCard = ({ product }) => (
    <motion.div
      variants={fadeIn}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover"
        />
        {product.isNew && (
          <div className="absolute top-2 right-2 bg-rose-600 text-white text-xs font-bold px-2 py-1 rounded">
            NEW
          </div>
        )}
        <button className="absolute top-2 left-2 bg-white p-2 rounded-full shadow-md hover:bg-rose-50">
          <FiHeart className="text-gray-700 hover:text-rose-600" />
        </button>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
        <div className="flex items-center mb-2">
          <FiStar className="text-yellow-400 mr-1" />
          <span className="text-sm text-gray-700">
            {product.rating} | <span className="text-gray-500">24 Reviews</span>
          </span>
        </div>
        <div className="flex items-center">
          <span className="text-lg font-bold text-rose-600 mr-2">
            ₹{product.discountPrice.toLocaleString()}
          </span>
          <span className="text-sm text-gray-500 line-through">
            ₹{product.price.toLocaleString()}
          </span>
        </div>
        <div className="flex mt-3 space-x-1">
          {product.colors.map((color, index) => (
            <div
              key={index}
              className="w-4 h-4 rounded-full border border-gray-200"
              style={{ backgroundColor: color }}></div>
          ))}
        </div>
        <button className="w-full mt-4 bg-rose-600 hover:bg-rose-700 text-white py-2 rounded-lg flex items-center justify-center transition-colors">
          <FiShoppingBag className="mr-2" /> Add to Bag
        </button>
      </div>
    </motion.div>
  );

  return (
    <div className="bg-gradient-to-b from-rose-50 to-white min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-800 to-rose-600 opacity-90"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-serif">
              New Arrivals
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8">
              Discover our latest ethnic wear collection for the season
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-rose-700 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all">
              Shop Now
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="flex overflow-x-auto pb-2 scrollbar-hide">
          <div className="flex space-x-2">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                variants={fadeIn}
                onClick={() => setActiveTab(category.id)}
                className={`px-6 py-2 rounded-full whitespace-nowrap transition-colors ${
                  activeTab === category.id
                    ? "bg-rose-600 text-white"
                    : "bg-white text-gray-800 hover:bg-gray-100"
                }`}>
                {category.name}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Featured Collection */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Featured Collection
            </h2>
            <button className="flex items-center text-rose-600 hover:text-rose-800">
              View All <FiChevronRight className="ml-1" />
            </button>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className="bg-gray-200 rounded-lg h-96 animate-pulse"></div>
              ))}
            </div>
          ) : (
            <motion.div
              variants={stagger}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Trend Alert Section */}
      <div className="bg-rose-50 py-12">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Trend Alert: This Season's Favorites
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover what everyone is loving right now
            </p>
          </motion.div>

          {isLoading ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className="bg-gray-200 rounded-lg h-64 animate-pulse"></div>
              ))}
            </div>
          ) : (
            <motion.div
              variants={stagger}
              className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  name: "Banarasi Silk",
                  image:
                    "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFuYXJhc2klMjBzaWxrJTIwc2FyZWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
                  link: "/category/sarees/banarasi-silk",
                },
                {
                  name: "Kundan Jewelry",
                  image:
                    "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a3VuZGFuJTIwamV3ZWxyeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
                  link: "/category/jewelry/kundan",
                },
                {
                  name: "Chikankari Kurtas",
                  image:
                    "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpa2Fua2FyaSUyMGt1cnRhfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
                  link: "/category/kurtas/chikankari",
                },
                {
                  name: "Bridal Lehengas",
                  image:
                    "https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnJpZGFsJTIwbGVoZW5nYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
                  link: "/category/lehengas/bridal",
                },
              ].map((trend, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  whileHover={{ scale: 1.03 }}
                  className="relative rounded-lg overflow-hidden group">
                  <img
                    src={trend.image}
                    alt={trend.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <div>
                      <h3 className="text-white font-semibold text-lg group-hover:underline">
                        {trend.name}
                      </h3>
                      <button className="mt-2 text-sm text-white hover:text-rose-200 flex items-center">
                        Shop Now <FiChevronRight className="ml-1" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>

      {/* All New Arrivals */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              All New Arrivals
            </h2>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Sort By:</span>
              <select className="border border-gray-300 rounded-md px-3 py-1 text-sm">
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest First</option>
                <option>Customer Rating</option>
              </select>
            </div>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, index) => (
                <div
                  key={index}
                  className="bg-gray-200 rounded-lg h-80 animate-pulse"></div>
              ))}
            </div>
          ) : (
            <motion.div
              variants={stagger}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-rose-700 to-rose-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Join Our Fashion Community
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Sign up to get exclusive access to new arrivals, special offers,
              and styling tips.
            </p>
            <div className="flex flex-col sm:flex-row justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 rounded-l-sm w-full focus:outline-none text-gray-900"
              />
              <button className="bg-black text-white px-6 py-3 rounded-r-sm hover:bg-gray-900 transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
