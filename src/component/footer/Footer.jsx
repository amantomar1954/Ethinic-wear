"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPinterest,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHeadset,
} from "react-icons/fa";

const Footer = () => {
  const footerLinks = [
    {
      title: "Customer Service",
      links: [
        // {
        //   name: "Contact Us",
        //   href: "/contact",
        //   icon: <FaHeadset className="mr-2" />,
        // },
        // { name: "FAQs", href: "/faq", icon: <FaHeadset className="mr-2" /> },
        {
          name: "Returns & Exchanges",
          href: "/returnandexchange",
          icon: <FaHeadset className="mr-2" />,
        },
        {
          name: "Shipping Info",
          href: "/shipping",
          icon: <FaHeadset className="mr-2" />,
        },
        {
          name: "Terms and Conditions",
          href: "/terms",
          icon: <FaHeadset className="mr-2" />,
        },
        {
          name: "Privacy-Policy",
          href: "/privacy-policy",
          icon: <FaHeadset className="mr-2" />,
        },
      ],
    },
    {
      title: "About Us",
      links: [
        {
          name: "About Us",
          href: "/about",
          icon: <FaHeadset className="mr-2" />,
        },
        {
          name: "Contact Us",
          href: "/contact",
          icon: <FaHeadset className="mr-2" />,
        },
        {
          name: "Category",
          href: "/category",
          icon: <FaHeadset className="mr-2" />,
        },
        // {
        //   name: "Careers",
        //   href: "/careers",
        //   icon: <FaHeadset className="mr-2" />,
        // },
      ],
    },
    {
      title: "Shop",
      links: [
        {
          name: "New Arrivals",
          href: "/new",
          icon: <FaHeadset className="mr-2" />,
        },
        {
          name: "Products",
          href: "/products",
          icon: <FaHeadset className="mr-2" />,
        },
        { name: "Sale", href: "/sale", icon: <FaHeadset className="mr-2" /> },
        {
          name: "Shop",
          href: "/shop",
          icon: <FaHeadset className="mr-2" />,
        },
      ],
    },
  ];

  const socialLinks = [
    { icon: <FaFacebook size={18} />, name: "Facebook" },
    { icon: <FaInstagram size={18} />, name: "Instagram" },
    { icon: <FaTwitter size={18} />, name: "Twitter" },
    { icon: <FaPinterest size={18} />, name: "Pinterest" },
    { icon: <FaYoutube size={18} />, name: "YouTube" },
  ];

  const paymentMethods = [
    { name: "visa", displayName: "Visa" },
    { name: "mastercard", displayName: "Mastercard" },
    { name: "amex", displayName: "Amex" },
    { name: "paypal", displayName: "PayPal" },
    // { name: "applepay", displayName: "Apple Pay" },
    // { name: "googlepay", displayName: "Google Pay" },
  ];

  const contactInfo = [
    { icon: <FaPhone className="text-red-400" />, text: "+91 8884356246" },
    {
      icon: <FaEnvelope className="text-red-400" />,
      text: "support@punjabijutties.com",
    },
    {
      icon: <FaMapMarkerAlt className="text-red-400" />,
      text: "S-12 Janta Market Rajouri Garden New Delhi, India",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Top Section - Newsletter */}
      <div className="bg-gradient-to-r hidden from-red-700 to-red-900 py-8">
        <div className="max-w-[1600px] hidden mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold font-serif">
                Join Our Newsletter
              </h3>
              <p className="text-red-100">
                Get 15% off your first order and updates on new arrivals
              </p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 w-full md:w-64 rounded-l-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button className="bg-black hover:bg-gray-800 px-6 py-3 rounded-r-md transition-colors font-medium">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6">
            <Link href="/" className="flex items-center">
              <svg
                className="w-10 h-10 text-red-600 mr-3"
                viewBox="0 0 24 24"
                fill="currentColor">
                <path d="M12 2L4 12l8 10 8-10-8-10zm0 15a5 5 0 100-10 5 5 0 000 10z" />
              </svg>
              <span className="text-2xl font-bold font-serif">Punjabi Jutties</span>
            </Link>
            <p className="text-gray-300">
              Bringing you the finest Punjabi jutties wear collections from across India.
              Handcrafted with love and tradition.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1">{item.icon}</div>
                  <p className="text-gray-300">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-6">
              <h3 className="text-lg font-bold border-b border-red-600 pb-2 inline-block">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, i) => (
                  <motion.li
                    key={i}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors flex items-center">
                      {link.icon}
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6">
            <h3 className="text-lg font-bold border-b border-red-600 pb-2 inline-block">
              Follow Us

              {/* sd,fmhnlkgrehqpdijogerpqio
              sd,mcbxnkjfdvlkjgerfd
              f ckxjbnkdfjbsngklcv
              dncxbjlsnfkldjv,fd
              ndfjkscvbnkvlfbndscvl
              df kgdfnlsbdfcz
              ,nbdflgmdbvco */}
            </h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.name}
                  whileHover={{ y: -3 }}
                  className="bg-gray-800 hover:bg-red-700 p-3 rounded-full transition-all duration-300">
                  {social.icon}
                </motion.a>
              ))}
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Download Our App</h4>
              <div className="flex flex-col space-y-3">
                <button className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-md flex items-center justify-center gap-2 transition-colors">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
                  </svg>
                  Google Play
                </button>
                <button className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-md flex items-center justify-center gap-2 transition-colors">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  App Store
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-800 py-6">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Payment Methods */}
            <div className="flex flex-wrap justify-center gap-2">
              {paymentMethods.map((method, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -3 }}
                  className="bg-white p-2 rounded-md shadow-sm flex items-center justify-center"
                  style={{ minWidth: "60px", height: "40px" }}>
                  <img
                    src={`https://logo.clearbit.com/${method.name}.com`}
                    alt={method.displayName}
                    className="h-6 w-auto object-contain"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/60/FFFFFF/000000?text=${method.displayName}`;
                      e.target.className = "h-6 w-auto object-contain p-1";
                    }}
                  />
                </motion.div>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} Punjabi Juttis All Rights Reserved.
              </p>
              <div className=" hidden flex flex-wrap justify-center md:justify-end gap-3 mt-2">
                <Link
                  href="/terms"
                  className="text-xs text-gray-400 hover:text-white transition-colors">
                  Terms
                </Link>
                <Link
                  href="/privacy-policy"
                  className="text-xs text-gray-400 hover:text-white transition-colors">
                  Privacy
                </Link>
                <Link
                  href="/cookies"
                  className="text-xs text-gray-400 hover:text-white transition-colors">
                  Cookies
                </Link>
                <Link
                  href="/sitemap"
                  className="text-xs text-gray-400 hover:text-white transition-colors">
                  Sitemap
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
