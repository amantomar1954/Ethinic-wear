"use client"
import React from 'react'
import { motion } from 'framer-motion'
const Testimonialsec = () => {
  return (
    <>
    {/* Testimonials Section */}
<div className="bg-gray-50 py-12 md:py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">What Our Customers Say</h2>
        <p className="text-gray-600">Trusted by thousands of ethnic wear lovers</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            quote: "The Banarasi saree I bought during the sale was even more beautiful in person!",
            name: "Priya Sharma",
            rating: 5
          },
          {
            quote: "Amazing discounts on authentic ethnic wear. My lehenga arrived perfectly!",
            name: "Ananya Patel",
            rating: 5
          },
          {
            quote: "Fast delivery and the quality exceeded my expectations. Will shop again!",
            name: "Riya Gupta",
            rating: 4
          }
        ].map((testimonial, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
            <p className="font-medium text-gray-900">- {testimonial.name}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
</div>
    </>
  )
}

export default Testimonialsec