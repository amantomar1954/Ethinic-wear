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
        <meta
          name="description"
          content="Read our privacy policy to understand how we collect, use, and protect your personal information."
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-rose-700 to-rose-600 text-white py-16 md:py-24">
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-4 mt-16 font-serif">
              Privacy Policy
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
            {/* <div className="prose prose-rose max-w-none">
          
            </div> */}

            {/* EthnicWear Privacy Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-12 bg-rose-50 rounded-lg p-6">
              <h3 className="text-xl text-center font-semibold text-rose-800 mb-4">
                EthnicWear Privacy Commitment
              </h3>
              <div className="text-gray-700 space-y-4">
                <p>
                  We respect your privacy at EthnicWear and are dedicated to
                  your personal information protection. This policy outlines how
                  we gather, use, and secure your data.
                </p>

                <h4 className="font-medium text-rose-700">What We Collect:</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Personal Information:</strong> Name, email, phone
                    number, and address when you create an account or check out.
                  </li>
                  <li>
                    <strong>Payment Details:</strong> Securely processed by
                    trusted gateways.
                  </li>
                  <li>
                    <strong>Browsing Data:</strong> IP address, browser type,
                    and interaction data for analytics purposes.
                  </li>
                </ul>

                <h4 className="font-medium text-rose-700">
                  How We Use Your Information:
                </h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To efficiently process and deliver your orders.</li>
                  <li>
                    For enhancing website performance and user experience.
                  </li>
                  <li>
                    For sending promotional email (you can opt out at any time).
                  </li>
                </ul>

                <h4 className="font-medium text-rose-700">Data Security:</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    We secure your information with advanced encryption and
                    secure servers.
                  </li>
                  <li>
                    Payment transactions are conducted through trusted payment
                    gateways to ensure privacy.
                  </li>
                </ul>

                <h4 className="font-medium text-rose-700">Cookies:</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Cookies assist us in enhancing your browsing experience by
                    remembering user preferences.
                  </li>
                  <li>
                    You can control or disable cookies in your browser settings.
                  </li>
                </ul>

                <h4 className="font-medium text-rose-700">
                  Third-Party Sharing:
                </h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>We do not sell or trade your personal information.</li>
                  <li>
                    Data can be disclosed to trusted service providers (e.g.,
                    delivery partners) for operations.
                  </li>
                </ul>

                <h4 className="font-medium text-rose-700">Your Rights:</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    You are entitled to access, correct, or remove your personal
                    data by reaching out to us.
                  </li>
                </ul>

                <h4 className="font-medium text-rose-700">
                  Changes to This Policy:
                </h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    EthnicWear has the right to modify this policy to suit
                    changes in practice or as a result of legal obligations.
                  </li>
                  <li>Changes will be notified by email or website alerts.</li>
                </ul>

                <p>
                  For any concerns regarding privacy, write to us at
                  privacy@ethnicwear.
                </p>
              </div>
            </motion.div>

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
                <strong>Email:</strong> privacy@ethnicwear.com
                <br />
                <strong>Phone:</strong> +1 (800) 123-4567
                <br />
                <strong>Address:</strong> 123 Fashion Street, Mumbai, India
                400001
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
