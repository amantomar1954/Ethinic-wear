"use client"
import { useState } from 'react';
import Head from 'next/head';

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How can I watch Ethinic Wear on your website?",
      answer: "You can stream Ethinic Wear directly on our platform after signing up for an account. Some Ethinic Wear may require a premium subscription."
    },
    {
      question: "Do you offer subtitles for Ethinic Wear?",
      answer: "Yes, most of our Ethinic Wear come with multiple subtitle options. You can enable/disable them from the player controls while watching."
    },
    {
      question: "Can I download Ethinic Wear to watch offline?",
      answer: "Absolutely! Our premium members can download Ethinic Wear to watch offline on our mobile apps. Downloads are available for a limited time."
    },
    {
      question: "How often do you add new Ethinic Wear?",
      answer: "We add new Ethinic Wear every week, with major releases coming as soon as they're available for digital streaming."
    },
    {
      question: "Is there a limit to how many Ethinic Wear I can watch?",
      answer: "Premium members have unlimited access to our entire library. Free members have a monthly viewing limit."
    },
    {
      question: "What devices can I use to watch Ethinic Wear?",
      answer: "Our platform works on smartphones, tablets, computers, smart TVs, and streaming devices like Roku, Apple TV, and Fire TV."
    }
  ];

  return (
    <>
      <Head>
        <title>Ethinic Wear - Frequently Asked Questions</title>
        <meta name="description" content="Get answers to common questions about our movie streaming service" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-purple-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Animated Title */}
          <div className="text-center mt-16 mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 animate-fade-in">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-purple-200 animate-fade-in-delay">
              Find answers to common questions about our movie streaming service
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-gray-800 bg-opacity-60 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:bg-opacity-70"
              >
                <button
                  className={`w-full px-6 py-4 text-left focus:outline-none transition-colors duration-300 ${activeIndex === index ? 'bg-purple-700' : 'hover:bg-gray-700'}`}
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg md:text-xl font-semibold text-white">
                      {faq.question}
                    </h3>
                    <svg
                      className={`w-6 h-6 text-purple-300 transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index ? 'max-h-96 py-4 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-gray-300 pb-4">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Help Section */}
          <div className="mt-16 bg-gray-800 bg-opacity-60 rounded-xl p-8 text-center border border-purple-500 border-opacity-30 transform hover:scale-[1.01] transition-transform duration-300">
            <h2 className="text-2xl font-bold text-white mb-4">Still need help?</h2>
            <p className="text-gray-300 mb-6">
              Can't find the answer you're looking for? Our support team is ready to help you.
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50">
              Contact Support
            </button>
          </div>
        </div>
      </div>

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .animate-fade-in-delay {
          animation: fadeIn 0.8s ease-out 0.3s forwards;
          opacity: 0;
        }
      `}</style>
    </>
  );
}