"use client";
import { motion } from "framer-motion";
import Head from "next/head";

const PrivacyPolicy = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Head>
        <title>Privacy Policy | Ethnic Elegance</title>
        <meta name="description" content="Read our privacy policy to understand how we collect, use, and protect your personal information." />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-rose-700 to-rose-600 text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-4 mt-16 font-serif"
            >
              Privacy Policy
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl max-w-3xl mx-auto"
            >
              Your privacy is important to us. Learn how we protect your information.
            </motion.p>
          </div>
        </div>

        {/* Policy Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-6 md:p-8"
          >
            <div className="prose prose-rose max-w-none">
              <motion.section 
                whileHover={{ x: 5 }}
                className="mb-8"
              >
                <h2 className="text-2xl font-bold text-rose-800 mb-4 border-b border-rose-100 pb-2">
                  Information We Collect
                </h2>
                <p className="text-gray-700 mb-4">
                  We collect personal information when you register, place an order, or interact with our site. This may include:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Name, email address, and contact details</li>
                  <li>Shipping and billing addresses</li>
                  <li>Payment information (processed securely)</li>
                  <li>Purchase history and preferences</li>
                  <li>Device and browsing information</li>
                </ul>
              </motion.section>

              <motion.section 
                whileHover={{ x: 5 }}
                className="mb-8"
              >
                <h2 className="text-2xl font-bold text-rose-800 mb-4 border-b border-rose-100 pb-2">
                  How We Use Your Information
                </h2>
                <p className="text-gray-700 mb-4">
                  Your information helps us provide and improve our services:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Process orders and deliver products</li>
                  <li>Communicate about your orders</li>
                  <li>Improve our website and customer experience</li>
                  <li>Send promotional offers (with your consent)</li>
                  <li>Prevent fraud and enhance security</li>
                </ul>
              </motion.section>

              <motion.section 
                whileHover={{ x: 5 }}
                className="mb-8"
              >
                <h2 className="text-2xl font-bold text-rose-800 mb-4 border-b border-rose-100 pb-2">
                  Data Security
                </h2>
                <p className="text-gray-700 mb-4">
                  We implement robust security measures to protect your information:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>SSL encryption for all transactions</li>
                  <li>Secure payment gateways</li>
                  <li>Regular security audits</li>
                  <li>Limited employee access to sensitive data</li>
                </ul>
              </motion.section>

              <motion.section 
                whileHover={{ x: 5 }}
                className="mb-8"
              >
                <h2 className="text-2xl font-bold text-rose-800 mb-4 border-b border-rose-100 pb-2">
                  Cookies & Tracking
                </h2>
                <p className="text-gray-700 mb-4">
                  Our website uses cookies to enhance your experience:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Essential cookies for site functionality</li>
                  <li>Analytics cookies to understand usage</li>
                  <li>Marketing cookies (with your consent)</li>
                  <li>You can manage preferences in your browser</li>
                </ul>
              </motion.section>

              <motion.section 
                whileHover={{ x: 5 }}
                className="mb-8"
              >
                <h2 className="text-2xl font-bold text-rose-800 mb-4 border-b border-rose-100 pb-2">
                  Third-Party Sharing
                </h2>
                <p className="text-gray-700 mb-4">
                  We only share data when necessary with:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Payment processors to complete transactions</li>
                  <li>Shipping carriers for order delivery</li>
                  <li>Service providers who assist our operations</li>
                  <li>Legal authorities when required by law</li>
                </ul>
              </motion.section>

              <motion.section 
                whileHover={{ x: 5 }}
                className="mb-8"
              >
                <h2 className="text-2xl font-bold text-rose-800 mb-4 border-b border-rose-100 pb-2">
                  Your Rights
                </h2>
                <p className="text-gray-700 mb-4">
                  You have control over your personal data:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Access and request a copy of your data</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Withdraw consent where applicable</li>
                </ul>
              </motion.section>

              <motion.section 
                whileHover={{ x: 5 }}
              >
                <h2 className="text-2xl font-bold text-rose-800 mb-4 border-b border-rose-100 pb-2">
                  Policy Updates
                </h2>
                <p className="text-gray-700 mb-4">
                  We may update this policy periodically. Significant changes will be notified through our website or email.
                </p>
                <p className="text-gray-700">
                  <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </motion.section>
            </div>

            {/* Contact Information */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-12 bg-rose-50 rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold text-rose-800 mb-4">Contact Us</h3>
              <p className="text-gray-700 mb-2">
                For privacy-related questions or requests, please contact:
              </p>
              <p className="text-gray-700">
                <strong>Email:</strong> privacy@ethnicelegance.com<br />
                <strong>Phone:</strong> +1 (800) 123-4567<br />
                <strong>Address:</strong> 123 Fashion Street, Mumbai, India 400001
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;