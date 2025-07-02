"use client";
import { useState, useEffect } from "react";
import Head from "next/head";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    setTimeout(() => {
      setSubmitSuccess(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-rose-50">
      <Head>
        <title>Contact Us | Ethnic Elegance</title>
        <meta
          name="description"
          content="Get in touch with Ethnic Elegance for inquiries about our traditional wear collections"
        />
      </Head>

      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div
          className={`text-center mb-16 mt-16 transition-all duration-1000 ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}>
          <h1 className="text-4xl md:text-5xl font-bold text-rose-800 mb-4 font-serif">
            Contact Us
          </h1>
          <p className="text-lg text-amber-900 max-w-2xl mx-auto">
            Have questions about our exquisite ethnic wear collection? Reach out
            to us and our team will be happy to assist you.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Form */}
          <div
            className={`lg:w-1/2 bg-white rounded-xl shadow-lg p-8 transition-all duration-1000 delay-200 ${
              animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
            <h2 className="text-2xl font-bold text-rose-700 mb-6 font-serif">
              Send Us a Message
            </h2>

            {submitSuccess && (
              <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg animate-bounce">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-amber-900 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-amber-900 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-amber-900 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-amber-900 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                  placeholder="Tell us about your inquiry..."></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 bg-rose-700 hover:bg-rose-800 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}>
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div
            className={`lg:w-1/2 space-y-8 transition-all duration-1000 delay-300 ${
              animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-rose-700 mb-6 font-serif">
                Our Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-rose-100 p-3 rounded-full mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-rose-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-amber-900 mb-1">
                      Our Boutique
                    </h3>
                    <p className="text-gray-600">
                      S-12 Janta Market, Rajouri Garden
                      <br />
                      New Delhi, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-rose-100 p-3 rounded-full mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-rose-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-amber-900 mb-1">Call Us</h3>
                    <p className="text-gray-600">
                      +91 98765 43210
                      <br />
                      
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-rose-100 p-3 rounded-full mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-rose-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-amber-900 mb-1">
                      Email Us
                    </h3>
                    <p className="text-gray-600">
                      info@ethnicwear.com
                      <br />
                      support@ethnicwear.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-rose-700 mb-6 font-serif">
                Business Hours
              </h2>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-amber-900">Monday - Friday</span>
                  <span className="text-gray-600">10:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-amber-900">Saturday</span>
                  <span className="text-gray-600">10:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-amber-900">Sunday</span>
                  <span className="text-gray-600">11:00 AM - 7:00 PM</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
                <p className="text-amber-800 text-sm">
                  Note: During festival seasons, we extend our hours to
                  accommodate your shopping needs.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional EthnicWear Content */}
        <div
          className={`max-w-[1600px] mx-auto mt-20 bg-white rounded-xl shadow-lg p-8 transition-all duration-1000 delay-500 ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
          <div className="space-y-6 text-amber-900">
            <h2 className="text-2xl text-center font-bold text-rose-700 mb-4 font-serif">
              We appreciate your trust at EthnicWear
            </h2>
            <p>
              We appreciate your trust at EthnicWear and value making your
              shopping experience smooth and hassle-free. If you have a question
              related to our products, want assistance with an order, or wish to
              leave feedback, we are here for you.
            </p>
            <p>You can reach us on the following modes:</p>
            <ul className="space-y-3 list-disc pl-5">
              <li>
                <strong>Email:</strong> Mail your questions to
                support@ethnicwear, and our team will respond within 24-48
                hours.
              </li>
              <li>
                <strong>Phone:</strong> Dial us at +91 98765 43210, Monday to
                Friday, 10:00 AM to 6:00 PM IST.
              </li>
              <li>
                <strong>Office Address:</strong>
                <br />
                S-12 Janta Market, Rajouri Garden
                <br />
                New Delhi, India.
              </li>
            </ul>
            <p>
              Or simply use our contact form to contact us directly. Provide
              your name, email, and message, and we will get back to you soon.
            </p>
            <p>
              Your suggestions and feedback assist us in enhancing and bettering
              our services. We welcome the opportunity to connect with you and
              make your experience at EthnicWear even more wonderful.
            </p>
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="fixed top-20 left-10 w-16 h-16 bg-rose-200 rounded-full opacity-20 -z-10 animate-float"></div>
      <div className="fixed bottom-32 right-16 w-24 h-24 bg-amber-200 rounded-full opacity-20 -z-10 animate-float-delay"></div>

      {/* Add some keyframes for animation in your global CSS */}
      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes float-delay {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float-delay 7s ease-in-out infinite 1s;
        }
      `}</style>
    </div>
  );
}
