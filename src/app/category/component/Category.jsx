"use client";
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { FiShoppingBag, FiHeart, FiChevronRight } from 'react-icons/fi';
import Link from 'next/link';

const EthnicWearCategory = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('women');
  const [hoveredCard, setHoveredCard] = useState(null);

  const categories = {
    women: [
      { id: 1, name: 'Sarees', image: '/images/saree.jpg', items: 125, colors: ['#FF6B6B', '#4ECDC4', '#45B7D1'] },
      { id: 2, name: 'Salwar Kameez', image: '/images/salwar.jpg', items: 89, colors: ['#A5D8FF', '#B298DC', '#FFD6A5'] },
      { id: 3, name: 'Lehengas', image: '/images/lehenga.jpg', items: 64, colors: ['#FF9E9E', '#A0E7E5', '#B5EAEA'] },
      { id: 4, name: 'Kurtis', image: '/images/kurti.jpg', items: 112, colors: ['#FFD3B6', '#DCEDC1', '#D4A5A5'] },
    ],
    men: [
      { id: 1, name: 'Kurtas', image: '/images/kurta.jpg', items: 78, colors: ['#3A5A40', '#588157', '#DAD7CD'] },
      { id: 2, name: 'Sherwanis', image: '/images/sherwani.jpg', items: 45, colors: ['#1A1A1D', '#4E4E50', '#C3073F'] },
      { id: 3, name: 'Dhotis', image: '/images/dhoti.jpg', items: 32, colors: ['#F8E9A1', '#F76C6C', '#A8D0E6'] },
      { id: 4, name: 'Jodhpuris', image: '/images/jodhpuri.jpg', items: 56, colors: ['#2F3E46', '#354F52', '#52796F'] },
    ],
    kids: [
      { id: 1, name: 'Frocks', image: '/images/frock.jpg', items: 42, colors: ['#FFCBF2', '#F3C4FB', '#ECBCFD'] },
      { id: 2, name: 'Kurtas', image: '/images/kid-kurta.jpg', items: 38, colors: ['#A8D8EA', '#AA96DA', '#FCBAD3'] },
      { id: 3, name: 'Lehengas', image: '/images/kid-lehenga.jpg', items: 29, colors: ['#FFAAA5', '#FF8B94', '#FFD3B6'] },
      { id: 4, name: 'Sherwanis', image: '/images/kid-sherwani.jpg', items: 31, colors: ['#A2D2FF', '#BDE0FE', '#CDB4DB'] },
    ],
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const tabContentVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    },
    exit: { opacity: 0 }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-amber-50 to-amber-100">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-amber-400 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Ethnic Wear Collections | Traditional Clothing</title>
        <meta name="description" content="Explore our exquisite collection of ethnic wear for men, women, and kids" />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1600px] mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center mt-24 mb-12"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-amber-900 mb-4"
            >
              Traditional Punjabi Juttis
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-lg text-amber-700 max-w-2xl mx-auto"
            >
              Discover our handcrafted collections celebrating cultural heritage
            </motion.p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="flex justify-center mb-12"
          >
            <div className="inline-flex rounded-xl shadow-md bg-white p-1" role="group">
              {['women', 'men', 'kids'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 text-sm font-medium rounded-lg transition-all duration-300 flex items-center ${
                    activeTab === tab
                      ? 'bg-amber-600 text-white shadow-inner'
                      : 'text-amber-800 hover:bg-amber-50'
                  } ${tab === 'women' ? 'rounded-r-none' : ''} ${
                    tab === 'kids' ? 'rounded-l-none' : ''
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  {activeTab === tab && (
                    <motion.span 
                      layoutId="activeTab"
                      className="ml-2 w-2 h-2 bg-white rounded-full"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={tabContentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {categories[activeTab].map((category) => (
                <motion.div
                  key={category.id}
                  whileHover={{ y: -5 }}
                  onHoverStart={() => setHoveredCard(category.id)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className="relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="relative h-72 overflow-hidden">
                    <motion.img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1 }}
                      animate={{ 
                        scale: hoveredCard === category.id ? 1.05 : 1 
                      }}
                      transition={{ duration: 0.5 }}
                    />
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-between p-4"
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: hoveredCard === category.id ? 1 : 0.7 
                      }}
                    >
                      <div className="flex justify-end">
                        <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                          <FiHeart className="text-white" />
                        </button>
                      </div>
                      <div>
                        <motion.span 
                          className="text-white/90 text-sm"
                          initial={{ y: 10 }}
                          animate={{ 
                            y: hoveredCard === category.id ? 0 : 10 
                          }}
                        >
                          {category.items} styles available
                        </motion.span>
                      </div>
                    </motion.div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-amber-900 mb-2">
                      {category.name}
                    </h3>
                    <div className="flex mb-4">
                      {category.colors.map((color, index) => (
                        <div 
                          key={index}
                          className="w-5 h-5 rounded-full mr-2 border border-gray-200"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                    <Link href="/products">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="w-full cursor-pointer flex items-center justify-center py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
                    >
                      <FiShoppingBag className="mr-2" />
                      Explore Collection
                    </motion.button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link href="/products">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 cursor-pointer bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl hover:shadow-lg transition-all flex items-center mx-auto"
            >
              View All Collections
              <FiChevronRight className="ml-2" />
            </motion.button>
            </Link>
          </motion.div>
        </div>
      </main>
    </>
  );
};

export default EthnicWearCategory;