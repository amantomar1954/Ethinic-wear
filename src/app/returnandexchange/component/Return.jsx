"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaExchangeAlt,
  FaShippingFast,
  FaMoneyBillWave,
  FaQuestionCircle,
} from "react-icons/fa";

const ReturnExchangePage = () => {
  const policies = [
    {
      title: "Easy Returns",
      icon: <FaExchangeAlt className="text-3xl text-red-600" />,
      description:
        "Not happy with your purchase? No worries! Return it within 30 days for a full refund.",
      details: [
        "30-day return policy from delivery date",
        "Items must be unused and in original condition",
        "Original tags and packaging must be intact",
      ],
      animation: { x: -50 },
    },
    {
      title: "Simple Exchanges",
      icon: <FaExchangeAlt className="text-3xl text-red-600" />,
      description:
        "Need a different size or color? We'll help you exchange it quickly.",
      details: [
        "Free exchanges within 14 days",
        "Subject to product availability",
        "Original shipping fees may apply for exchanges",
      ],
      animation: { y: 50 },
    },
    {
      title: "Fast Refunds",
      icon: <FaMoneyBillWave className="text-3xl text-red-600" />,
      description:
        "Get your money back quickly with our streamlined refund process.",
      details: [
        "Refunds processed within 3-5 business days",
        "Original payment method will be credited",
        "Shipping fees non-refundable unless return is our fault",
      ],
      animation: { x: 50 },
    },
    {
      title: "Hassle-Free Process",
      icon: <FaShippingFast className="text-3xl text-red-600" />,
      description: "We've made returns and exchanges as simple as possible.",
      details: [
        "Initiate returns from your account dashboard",
        "Prepaid return labels available",
        "Track your return status in real-time",
      ],
      animation: { y: -50 },
    },
  ];

  const faqs = [
    {
      question: "How do I initiate a return or exchange?",
      answer:
        "Log in to your account, go to 'My Orders', select the item you want to return/exchange, and follow the prompts. If you checked out as a guest, contact our customer service.",
    },
    {
      question: "What items are not eligible for return?",
      answer:
        "For hygiene reasons, intimate apparel, earrings, and personalized items cannot be returned. Sale items may have different return policies as noted on the product page.",
    },
    {
      question: "Who pays for return shipping?",
      answer:
        "We provide free return shipping for defective or incorrect items. For other returns, the customer is responsible unless you choose to exchange for store credit.",
    },
    {
      question: "How long does it take to process my refund?",
      answer:
        "Once we receive your return, refunds are processed within 3-5 business days. It may take additional time for your bank to post the credit to your account.",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-red-700 to-red-900 text-white py-16 md:py-24 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mt-16 mb-4">
            Return & Exchange Policy
          </h1>
          <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto">
            We want you to love what you buy. If you don't, we'll make it right.
          </p>
        </motion.div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat opacity-50"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Policy Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {policies.map((policy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, ...policy.animation }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col items-center text-center">
                {policy.icon}
                <h3 className="text-xl font-bold mt-4 mb-2">{policy.title}</h3>
                <p className="text-gray-600 mb-4">{policy.description}</p>
                <ul className="text-left text-gray-700 space-y-2">
                  {policy.details.map((detail, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 font-serif">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <span className="text-red-700 text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Initiate Return</h3>
              <p className="text-gray-600">
                Start your return or exchange request through your account or
                contact us within 30 days of delivery.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <span className="text-red-700 text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Pack & Ship</h3>
              <p className="text-gray-600">
                Securely pack your item with all original packaging and tags.
                Use the provided return label.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <span className="text-red-700 text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Receive Refund/Exchange
              </h3>
              <p className="text-gray-600">
                Once received, we'll process your refund within 3-5 days or ship
                your exchange immediately.
              </p>
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 font-serif">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.01 }}
                className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start">
                    <FaQuestionCircle className="text-red-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-red-700 to-red-900 rounded-lg p-8 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Need Help With Your Return?
          </h2>
          <p className="text-xl text-red-100 mb-6 max-w-2xl mx-auto">
            Our customer service team is here to help with any questions about
            returns or exchanges.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-red-700 hover:bg-gray-100 px-6 py-3 rounded-md font-semibold transition-colors">
              Contact Support
            </Link>
            <Link
              href="/account/returns"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-red-700 px-6 py-3 rounded-md font-semibold transition-colors">
              Start Return Now
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ReturnExchangePage;
