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
        <title>Terms and Conditions | Punjabi Juttis</title>
        <meta
          name="description"
          content="Read our Terms and Conditions to understand how we collect, use, and protect your personal information."
        />
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
              className="text-4xl md:text-5xl font-bold mb-4 mt-16 font-serif">
              Terms and Conditions
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl max-w-3xl mx-auto">
              Your privacy is important to us. Learn how we protect your
              information.
            </motion.p>
          </div>
        </div>

        {/* Policy Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <div className="prose prose-rose max-w-none">
              {/* Additional sections remain unchanged */}
              {/* ... */}

              {/* EthnicWear Terms and Conditions */}
              <motion.section whileHover={{ x: 5 }} className="mb-8">
                <h2 className="text-2xl text-center font-bold text-rose-800 mb-4 border-b border-rose-100 pb-2">
                  Terms and Conditions
                </h2>
                <p className="text-gray-700 mb-4">
                  Welcome to EthnicWear! The Terms and Conditions below describe
                  the rules and regulations of using our website. By accessing
                  or using EthnicWear, you will be bound by these terms. If you
                  don't agree, then please do not use our site.
                </p>

                <h3 className="text-xl font-semibold text-rose-700 mt-6 mb-3">
                  Acceptance of Terms:
                </h3>
                <p className="text-gray-700 mb-4">
                  Using our site means that you accept these terms.
                </p>

                <h3 className="text-xl font-semibold text-rose-700 mt-6 mb-3">
                  Product Information:
                </h3>
                <p className="text-gray-700 mb-4">
                  We try to give you an accurate description of our products and
                  images. But there can be variations due to photography or
                  display settings.
                </p>

                <h3 className="text-xl font-semibold text-rose-700 mt-6 mb-3">
                  Pricing and Payments:
                </h3>
                <p className="text-gray-700 mb-4">
                  All prices are Indian Rupees (INR). Prices are liable to
                  change without notice. Safe payment methods are credit/debit
                  cards, UPI, and net banking.
                </p>

                <h3 className="text-xl font-semibold text-rose-700 mt-6 mb-3">
                  Shipping and Delivery:
                </h3>
                <p className="text-gray-700 mb-4">
                  Delivery times are location- and courier-dependent. Delays due
                  to circumstances beyond our control, such as weather or
                  logistics, cannot be controlled by us.
                </p>

                <h3 className="text-xl font-semibold text-rose-700 mt-6 mb-3">
                  Returns and Refunds:
                </h3>
                <p className="text-gray-700 mb-4">
                  Returns are accepted according to our Returns Policy. Refunds
                  will be initiated within 7-10 business days of authorisation.
                </p>

                <h3 className="text-xl font-semibold text-rose-700 mt-6 mb-3">
                  User Conduct:
                </h3>
                <p className="text-gray-700 mb-4">
                  Users are required to input true information when registering
                  or checking out. Abuse of the site will result in suspension
                  of account.
                </p>

                <h3 className="text-xl font-semibold text-rose-700 mt-6 mb-3">
                  Intellectual Property:
                </h3>
                <p className="text-gray-700 mb-4">
                  EthnicWear owns all content, including text, images, and
                  logos. Unauthorised use is not allowed.
                </p>

                <h3 className="text-xl font-semibold text-rose-700 mt-6 mb-3">
                  Privacy Policy:
                </h3>
                <p className="text-gray-700 mb-4">
                  We respect your privacy. For information on how we process
                  your data, see our Privacy Policy.
                </p>

                <h3 className="text-xl font-semibold text-rose-700 mt-6 mb-3">
                  Changes to Terms:
                </h3>
                <p className="text-gray-700 mb-4">
                  EthnicWear may change these terms at any time with or without
                  notice. Your continued access to and use of the site after
                  making any changes constitutes your agreement to the revised
                  terms.
                </p>

                <p className="text-gray-700 mt-6">
                  For further information or queries, feel free to email us at
                  support@punjabijuttis.
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
              className="mt-12 bg-rose-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-rose-800 mb-4">
                Contact Us
              </h3>
              <p className="text-gray-700 mb-2">
                For privacy-related questions or requests, please contact:
              </p>
              <p className="text-gray-700">
                <strong>Email:</strong> privacy@punjabijuttis.com
                <br />
                <strong>Phone:</strong> +1 (800) 123-4567
                <br />
                <strong>Address:</strong> s-12 Janta Market Rajouri Garden, New Delhi, India
                110027
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
