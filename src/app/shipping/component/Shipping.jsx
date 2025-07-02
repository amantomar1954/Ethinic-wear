"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaTruck,
  FaBoxOpen,
  FaGlobeAmericas,
  FaClock,
  FaShippingFast,
  FaMapMarkerAlt,
  FaQuestionCircle,
} from "react-icons/fa";

const ShippingPolicyPage = () => {
  const shippingOptions = [
    {
      title: "Standard Shipping",
      icon: <FaTruck className="text-3xl text-red-600" />,
      deliveryTime: "3-5 business days",
      price: "Free on orders over $50 | $4.99 otherwise",
      details: [
        "Order processing: 1-2 business days",
        "Delivery to most US addresses",
        "Tracking information provided",
      ],
      animation: { x: -50 },
    },
    {
      title: "Express Shipping",
      icon: <FaShippingFast className="text-3xl text-red-600" />,
      deliveryTime: "2-3 business days",
      price: "$9.99",
      details: [
        "Order processing: 1 business day",
        "Priority handling",
        "Includes tracking and insurance",
      ],
      animation: { y: 50 },
    },
    {
      title: "International Shipping",
      icon: <FaGlobeAmericas className="text-3xl text-red-600" />,
      deliveryTime: "7-14 business days",
      price: "Varies by destination",
      details: [
        "Available to most countries",
        "Customs fees may apply",
        "Tracking available",
      ],
      animation: { x: 50 },
    },
  ];

  const faqs = [
    {
      question: "How long does order processing take?",
      answer:
        "Most orders are processed within 1-2 business days (excluding weekends and holidays). Express orders are processed within 1 business day.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Yes! We ship to most countries worldwide. International shipping costs and delivery times vary by destination. Customs fees may apply and are the responsibility of the customer.",
    },
    {
      question: "Can I track my order?",
      answer:
        "Absolutely! Once your order ships, you'll receive a tracking number via email. You can track your package directly through our website or the carrier's tracking system.",
    },
    {
      question: "What if my package is lost or damaged?",
      answer:
        "We insure all shipments against loss or damage. If your package is lost in transit or arrives damaged, please contact our customer service within 7 days of delivery for assistance.",
    },
    {
      question: "Do you offer same-day shipping?",
      answer:
        "Orders placed before 12 PM EST Monday-Friday may qualify for same-day shipping (excluding holidays). This service is available for domestic orders only and incurs an additional fee.",
    },
  ];

  const shippingTimeline = [
    {
      step: "Order Placed",
      description: "Your order is received and queued for processing",
      icon: <FaBoxOpen className="text-red-600" />,
    },
    {
      step: "Processing",
      description: "We prepare your items for shipment (1-2 business days)",
      icon: <FaClock className="text-red-600" />,
    },
    {
      step: "Shipped",
      description: "Your package is with the carrier and on its way",
      icon: <FaTruck className="text-red-600" />,
    },
    {
      step: "In Transit",
      description: "Your package is moving through the carrier's network",
      icon: <FaShippingFast className="text-red-600" />,
    },
    {
      step: "Out for Delivery",
      description: "Your package is with your local carrier for final delivery",
      icon: <FaMapMarkerAlt className="text-red-600" />,
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
            Shipping Policy
          </h1>
          <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto">
            Fast, reliable shipping options to get your order to you quickly and
            safely.
          </p>
        </motion.div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat opacity-50"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Shipping Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {shippingOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, ...option.animation }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-red-600">
              <div className="flex flex-col h-full">
                <div className="flex flex-col items-center text-center mb-4">
                  {option.icon}
                  <h3 className="text-xl font-bold mt-4">{option.title}</h3>
                  <p className="text-lg font-semibold text-red-600 my-2">
                    {option.deliveryTime}
                  </p>
                  <p className="text-gray-700 mb-4">{option.price}</p>
                </div>
                <ul className="text-left text-gray-700 space-y-2 flex-grow">
                  {option.details.map((detail, i) => (
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

        {/* Shipping Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 font-serif">
            Your Shipping Journey
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 h-full w-1 bg-red-100 transform -translate-x-1/2"></div>

            <div className="space-y-8 md:space-y-0">
              {shippingTimeline.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className={`flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } mb-8 md:mb-12`}>
                  <div
                    className={`md:w-1/2 p-4 ${
                      index % 2 === 0
                        ? "md:pr-8 md:text-right"
                        : "md:pl-8 md:text-left"
                    }`}>
                    <h3 className="text-xl font-semibold mb-2">{item.step}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                  <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mx-4 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div
                    className={`md:w-1/2 p-4 ${
                      index % 2 === 0
                        ? "md:pl-8 md:text-left"
                        : "md:pr-8 md:text-right"
                    }`}>
                    {/* Empty on purpose for layout */}
                  </div>
                </motion.div>
              ))}
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
            Shipping FAQs
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.01 }}
                className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start">
                    <div className="bg-red-100 p-2 rounded-full mr-4">
                      <FaQuestionCircle className="text-red-600" />
                    </div>
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

        {/* Important Notes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-red-50 border-l-4 border-red-600 p-6 mb-16">
          <h3 className="text-xl font-bold text-red-800 mb-4">
            Important Shipping Notes
          </h3>
          <ul className="space-y-2 text-red-700">
            <li className="flex items-start">
              <span className="text-red-600 mr-2">•</span>
              Delivery times are estimates and not guaranteed, as delays may
              occur due to carrier issues or customs processing.
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-2">•</span>
              We are not responsible for incorrect addresses entered during
              checkout. Please double-check your shipping information.
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-2">•</span>
              Some remote areas may require additional delivery time or may not
              be serviceable by all shipping methods.
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-2">•</span>
              During peak seasons (holidays, sales events), processing and
              delivery times may be extended.
            </li>
          </ul>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-red-700 to-red-900 rounded-lg p-8 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Need Shipping Help?
          </h2>
          <p className="text-xl text-red-100 mb-6 max-w-2xl mx-auto">
            Our team is happy to answer any questions about shipping options or
            your current order.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-red-700 hover:bg-gray-100 px-6 py-3 rounded-md font-semibold transition-colors">
              Contact Support
            </Link>
            {/* <Link
              href="/track-order"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-red-700 px-6 py-3 rounded-md font-semibold transition-colors">
              Track Your Order
            </Link> */}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ShippingPolicyPage;
