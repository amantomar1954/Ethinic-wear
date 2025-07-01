"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const footerLinks = [
    {
      title: 'Customer Service',
      links: [
        { name: 'Contact Us', href: '/contact' },
        // { name: 'Track Order', href: '/track-order' },
        // { name: 'Returns & Refunds', href: '/returns' },
        { name: 'FAQ', href: '/faq' },
        // { name: 'Shipping Policy', href: '/shipping' }
      ]
    },
    {
      title: 'About Us',
      links: [
        { name: 'Our Story', href: '/about' },
        // { name: 'Careers', href: '/careers' },
        { name: 'Terms & Conditions', href: '/terms' },
        { name: 'Privacy Policy', href: '/privacy-policy' },
        // { name: 'Sitemap', href: '/sitemap' }
      ]
    },
    {
      title: 'Shop',
      links: [
        { name: 'New Arrivals', href: '/new' },
        // { name: 'Best Sellers', href: '/bestsellers' },
        { name: 'Sale', href: '/sale' },
        { name: 'Products', href: '/products' },
        { name: 'Shop', href: '/shop' },
        { name: 'Categories', href: '/categories' },
        // { name: '', href: '/shop' },
      ]
    }
  ];

  const socialLinks = [
    { icon: <FaFacebook className="text-lg" />, href: '#' },
    { icon: <FaInstagram className="text-lg" />, href: '#' },
    { icon: <FaTwitter className="text-lg" />, href: '#' },
    { icon: <FaPinterest className="text-lg" />, href: '#' },
    { icon: <FaYoutube className="text-lg" />, href: '#' }
  ];

  const paymentMethods = [
    'visa', 'mastercard', 'amex', 'paypal', 'upi',
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Logo and Description */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <Link href="/" className="flex items-center">
              <svg className="w-8 h-8 text-red-600 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L4 12l8 10 8-10-8-10zm0 15a5 5 0 100-10 5 5 0 000 10z" />
              </svg>
              <span className="text-xl font-bold font-serif">ETHNIC WEAR</span>
            </Link>
            <p className="text-gray-300 text-sm">
              Bringing you the finest ethnic wear collections from across India. Handcrafted with love and tradition.
            </p>
            
            {/* Newsletter Subscription */}
            {/* <div className="mt-4">
              <h3 className="text-sm font-semibold mb-2">Subscribe to our newsletter</h3>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 w-full rounded-l-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-r-md transition-colors">
                  Subscribe
                </button>
              </div> */}
            {/* </div> */}
          </motion.div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold border-b border-red-600 pb-2 inline-block">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, i) => (
                  <motion.li 
                    key={i}
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Link 
                      href={link.href} 
                      className="text-gray-300 hover:text-white text-sm transition-colors flex items-center"
                    >
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Social and Payment Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-700"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ y: -3 }}
                  className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            {/* Payment Methods */}
            <div className="flex flex-wrap justify-center gap-2">
              {paymentMethods.map((method, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -3 }}
                  className="bg-white p-1 rounded-md shadow-sm"
                >
                  <img 
                    src={`https://logo.clearbit.com/${method}.com`} 
                    alt={method} 
                    className="h-6 w-auto object-contain"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/40/FFFFFF/000000?text=${method.charAt(0).toUpperCase() + method.slice(1)}`;
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 text-center">
            <p className="text-xs text-gray-400">
              © {new Date().getFullYear()} Ethnic Wear. All Rights Reserved.
            </p>
            <div className="flex justify-center space-x-4 mt-2">
              <Link href="/terms" className="text-xs text-gray-400 hover:text-white">Terms of Service</Link>
              <Link href="/privacy-policy" className="text-xs text-gray-400 hover:text-white">Privacy Policy</Link>
              {/* <Link href="#" className="text-xs text-gray-400 hover:text-white">Cookie Policy</Link> */}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;