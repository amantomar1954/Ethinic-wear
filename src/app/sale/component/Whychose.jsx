"use client "
import React from 'react'
import { motion } from 'framer-motion'
const Whychose = () => {
  return (
    <>
    {/* Why Choose Us Section */}
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <div className="text-center mb-10">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Why Choose Ethnic Elegance</h2>
      <p className="text-gray-600">We're committed to bringing you the best ethnic wear experience</p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          icon: "🛍️",
          title: "Authentic Collections",
          description: "Directly sourced from artisans across India"
        },
        {
          icon: "🚚",
          title: "Fast Delivery",
          description: "Free shipping on orders above ₹999"
        },
        {
          icon: "💯",
          title: "Quality Assurance",
          description: "Every piece is quality checked before dispatch"
        }
      ].map((feature, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.03 }}
          className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all text-center"
        >
          <div className="text-4xl mb-4">{feature.icon}</div>
          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </motion.div>
      ))}
    </div>
  </motion.div>
</div>
    </>
  )
}

export default Whychose