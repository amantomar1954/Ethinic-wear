"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import {
  FaChevronDown,
  FaChevronUp,
  FaLeaf,
  FaAward,
  FaShieldAlt,
  FaSmile,
  FaTruck,
  FaExchangeAlt,
} from "react-icons/fa";

const ContentWithFAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const features = [
    {
      icon: <FaLeaf className="text-3xl text-green-600" />,
      title: "Eco-Friendly Products",
      description:
        "All our products are made with sustainable materials and ethical manufacturing processes.",
    },
    {
      icon: <FaAward className="text-3xl text-blue-600" />,
      title: "Premium Quality",
      description:
        "We source only the highest quality materials for exceptional durability and performance.",
    },
    {
      icon: <FaShieldAlt className="text-3xl text-red-600" />,
      title: "1-Year Warranty",
      description:
        "All purchases come with our comprehensive warranty for peace of mind.",
    },
    {
      icon: <FaSmile className="text-3xl text-yellow-500" />,
      title: "Customer Satisfaction",
      description:
        "Over 98% of our customers report being highly satisfied with their purchases.",
    },
    {
      icon: <FaTruck className="text-3xl text-purple-600" />,
      title: "Fast Shipping",
      description:
        "Most orders ship within 24 hours and arrive in 2-3 business days.",
    },
    {
      icon: <FaExchangeAlt className="text-3xl text-orange-500" />,
      title: "Easy Returns",
      description:
        "Not satisfied? We offer hassle-free returns within 30 days.",
    },
  ];

  const faqs = [
    {
      question: "What makes your products different from competitors?",
      answer:
        "Our products stand out through exceptional craftsmanship, premium materials, and rigorous quality control. We invest in innovative designs that combine functionality with aesthetic appeal. Each item undergoes multiple inspections before shipping to ensure perfection. Unlike mass-produced alternatives, we focus on sustainable production methods that minimize environmental impact while maximizing product longevity.",
    },
    {
      question: "How do I know what size to order?",
      answer:
        "We provide detailed size guides for each product category, including measurements and fit recommendations. Our customer service team can also offer personalized sizing advice based on your preferences. Many products feature adjustable components for a customized fit. If you're between sizes, we typically recommend sizing up for comfort. Remember, we offer free exchanges if the size isn't quite right.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, Apple Pay, Google Pay, and Amazon Pay. For added security, we use encrypted payment processing that never stores your full payment details on our servers. We also offer installment payment options through third-party providers for qualifying orders over $100.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we ship to over 50 countries worldwide. International shipping rates and delivery times vary by destination. All international orders include tracking and are shipped duty-paid, so you won't face unexpected customs charges. Please note that some restrictions may apply to certain products based on international regulations. Delivery typically takes 7-14 business days for most international destinations.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order ships, you'll receive an email with tracking information and a link to monitor your package's progress. You can also check order status by logging into your account on our website. Our tracking system updates in real-time as your package moves through the carrier network. For expedited orders, we provide text message alerts for major delivery milestones.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy for most items (some exclusions apply). Items must be unused, in original condition with all tags attached. To initiate a return, visit our returns portal or contact customer service. We provide a prepaid return label for domestic returns. Refunds are processed within 3-5 business days after we receive your return. For defective or incorrect items, we cover all return shipping costs.",
    },
    {
      question: "Are your products ethically sourced?",
      answer:
        "Absolutely. We maintain strict ethical sourcing standards throughout our supply chain. All manufacturing partners must comply with our code of conduct regarding fair wages, safe working conditions, and environmental responsibility. We conduct regular audits and prioritize suppliers with recognized sustainability certifications. Many of our materials are organic, recycled, or sustainably harvested.",
    },
    {
      question: "Do you offer discounts for bulk orders?",
      answer:
        "Yes, we provide volume discounts for orders of 10+ items. Discounts vary by product and quantity. Our corporate sales team can create customized solutions for businesses, schools, or organizations. Registered non-profits may qualify for additional discounts. Contact our wholesale department for pricing tiers and to discuss your specific needs.",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-[1600px] mx-auto">
        {/* EthnicWear Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Experience Timeless Beauty with EthnicWear
          </h2>
          <div className="max-w-[1600px] mx-auto text-lg text-gray-600 space-y-6">
            <p>
              In an age in which fashion trends are changed like the blink of an
              eye, there is something incredibly soothing and empowering about
              traditional fashions. EthnicWear captures this timeless beauty by
              presenting a fabulous collection of fashionable pieces with
              cultural roots that are contemporary yet elegant and stylish, not
              with standing their ethnic background.
            </p>
            <p>
              Typically, we tend to dress up when we attend festive
              celebrations, weddings, or just want to reconnect with our roots.
              EthnicWear hosts a well curated selection of designs that attempt
              to connect with the beauty of our Indian tradition by bridging the
              ancient to the contemporary.
            </p>
          </div>
        </motion.div>

        {/* Creating Culture Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20 bg-white p-8 md:p-12 rounded-xl shadow-md">
          <h3 className="text-3xl font-bold text-center mb-8">
            Creating Culture With Every Stitch
          </h3>
          <div className="space-y-6 text-gray-700">
            <p>
              EthnicWear believes that clothing is more than simply fabric; it
              is a story. The story of centuries of heritage, cultural artistry,
              and form that have remained untouched by time. Our collections are
              inspired by the many forms of Indian heritage. From the royal
              drape of the Banarasi silk sarees, the beautiful colours from
              Punjabi phulkari, the thoughtful mirror work of Gujarat, and the
              graceful drape of Anarkali suits.
            </p>
            <p>
              At EthnicWear we do not simply pick a piece or hand knock our
              designs. We want to ensure the piece chosen is authentic and high
              quality. We work with artisans from across India, who have ensured
              that their generations of techniques have been maintained. For us,
              it is not just about dressing you beautifully; it is about
              connecting you to the heritage of traditional Indian craftsmanship
              on the world stage.
            </p>
          </div>
        </motion.div>

        {/* Curated Collection Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <h3 className="text-3xl font-bold mb-8">
            A Curated Collection for Every Occasion
          </h3>
          <div className="max-w-[1600px] mx-auto text-lg text-gray-600 space-y-6">
            <p>
              Whether it is Diwali, Eid, Navratri, a wedding, or a formal event,
              your outfit is a big deal. EthnicWear provides a wide spectrum of
              clothing for every occasion:
            </p>
            <p>
              <strong>Women's Wear:</strong> Ethnic dresses include sarees,
              salwar kameez, Anarkali suits, kurtis, lehengas, and Indo Western;
              all made of deluxe fabric, with authentic embroidery and
              embellishments.
            </p>
            <p>
              <strong>Men's Wear:</strong> The collection for men includes
              stylish kurtas, pakis and sherwanis that take traditions and frame
              them within current silhouettes for a refined ethnic look.
            </p>
            <p>
              <strong>Kids' Wear:</strong> Funky ethnic clothing for children,
              allowing them to look festive while feeling free.
            </p>
            <p>
              Whether you are young or old, style savvy or not, or attending a
              casual or formal event, EthnicWear has something for you.
            </p>
          </div>
        </motion.div>

        {/* Contemporary Comfort Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20 bg-white p-8 md:p-12 rounded-xl shadow-md">
          <h3 className="text-3xl font-bold text-center mb-8">
            Contemporary Comfort with Vintage Charm
          </h3>
          <div className="space-y-6 text-gray-700">
            <p>
              How can we know what tickles the fancy of our consumers? Today's
              consumers want beautiful designs, but they also want comfort, fit
              and feel. That is why EthnicWear makes/creates/has inclusive fit
              options with attention to detail and finish. EthnicWear offers
              breathable fabrics, tailored fits, and designs meant to make you
              feel good as well as look good.
            </p>
            <p>
              Our styling and pairing options are available to make sure that if
              you are new to wearing traditional attire, you feel comfortable
              and confident.
            </p>
          </div>
        </motion.div>

        {/* Why Choose EthnicWear Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Sustainability Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20 bg-white p-8 md:p-12 rounded-xl shadow-md">
          <h3 className="text-3xl font-bold text-center mb-8">
            Sustainability Rooted In Tradition
          </h3>
          <div className="space-y-6 text-gray-700">
            <p>
              In a fast paced world, sustainable fashion is as relevant as ever.
              EthnicWear is dedicated to eco friendly practices; we use organic
              fabric and natural dyes and minimise waste throughout handcrafted
              production. When you choose EthnicWear, you choose to embrace
              tradition and value making a sustainable choice for a healthier
              planet.
            </p>
          </div>
        </motion.div>

        {/* Join the Movement Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20">
          <h3 className="text-3xl font-bold mb-8">
            Join the Movement – Wear Your Culture
          </h3>
          <div className="max-w-[1600px] mx-auto text-lg text-gray-600 space-y-6">
            <p>
              EthnicWear is not just a brand; it's a way of being. It's an
              opportunity to reconnect, appreciate and wear our identity with
              pride. When you step out for a family function or a cultural event
              or even integrate ethnic style into your everyday wear, we want
              you to have a meaningful experience.
            </p>
            <p>
              Browse through our collection and let EthnicWear be your stop for
              timeless style, culture, and elegance.
            </p>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.005 }}
                className="bg-white rounded-xl shadow-md overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex justify-between items-center focus:outline-none">
                  <h4 className="text-lg font-semibold text-gray-800">
                    {faq.question}
                  </h4>
                  {activeIndex === index ? (
                    <FaChevronUp className="text-gray-500" />
                  ) : (
                    <FaChevronDown className="text-gray-500" />
                  )}
                </button>
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: activeIndex === index ? "auto" : 0,
                    opacity: activeIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden">
                  <div className="px-6 pb-6 text-gray-600">
                    <p>{faq.answer}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Closing CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center">
          <h3 className="text-3xl font-bold mb-6">Still Have Questions?</h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Our customer support team is available 24/7 to assist you with any
            inquiries.
          </p>
          <Link href="/contact">
            <button className="bg-gradient-to-r cursor-pointer from-red-600 to-red-800 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
              Contact Our Support Team
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ContentWithFAQs;
