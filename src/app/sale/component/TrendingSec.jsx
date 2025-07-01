"use client"
import React from 'react'
import { motion } from 'framer-motion'
const TrendingSec = () => {
  return (
    <>
    {/* Trending Now Section */}
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <div className="text-center mb-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Trending This Season</h2>
      <p className="text-gray-600 max-w-2xl mx-auto">Our customers' most loved picks at unbeatable prices</p>
    </div>
    
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      {['Banarasi Silk', 'Kanjivaram', 'Chanderi Cotton', 'Temple Jewelry'].map((trend, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all"
        >
          <div className="relative h-40 md:h-48">
            <img
              src={`/trending-${index+1}.jpg`}
              alt={trend}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
              <h3 className="text-white font-medium text-lg">{trend}</h3>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
</div>
    </>
  )
}

export default TrendingSec