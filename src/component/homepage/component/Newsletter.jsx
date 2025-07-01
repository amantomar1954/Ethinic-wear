"use client";
import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this to your backend
    console.log('Subscribed with:', email);
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <section className="py-12 bg-red-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">JOIN OUR NEWSLETTER</h2>
          <p className="mb-8 text-lg">Subscribe to get updates on new arrivals, exclusive offers and more</p>
          
          {subscribed ? (
            <div className="bg-green-500 text-white p-4 rounded-md">
              Thank you for subscribing! You'll hear from us soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-300"
                required
              />
              <button 
                type="submit"
                className="bg-black text-white px-8 py-3 rounded-md font-medium hover:bg-gray-900 transition-colors"
              >
                SUBSCRIBE
              </button>
            </form>
          )}

          <p className="mt-4 text-sm opacity-80">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;