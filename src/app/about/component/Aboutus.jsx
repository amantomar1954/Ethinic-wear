"use client";
import { useState, useEffect } from "react";
import Head from "next/head";

const AboutUs = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("story");

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-amber-50">
        <div className="animate-pulse flex space-x-4">
          <div className="w-12 h-12 bg-amber-200 rounded-full"></div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>About Us | Traditional Ethnic Wear</title>
        <meta
          name="description"
          content="Discover our journey in preserving and promoting traditional ethnic wear"
        />
      </Head>

      <main className="bg-amber-50">
        {/* Hero Section */}
        <section className="relative h-96 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/70 to-amber-600/50"></div>
          <img
            src="/images/about-hero.jpg"
            alt="Traditional artisans at work"
            className="w-full h-full object-cover animate-zoom-in"
          />
          <div className="absolute inset-0 flex items-center justify-center text-center px-4">
            <div className="text-white max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-down">
                Weaving Tradition into Modern Lives
              </h1>
              <p className="text-xl md:text-2xl font-light animate-fade-in-up delay-100">
                Preserving heritage through authentic ethnic fashion
              </p>
            </div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <div className="bg-amber-100 sticky top-0 z-10 shadow-sm">
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex overflow-x-auto">
              {[
                { id: "story", label: "Our Story" },
                { id: "craft", label: "The Craft" },
                { id: "artisans", label: "Our Artisans" },
                { id: "values", label: "Our Values" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-4 font-medium text-sm md:text-base whitespace-nowrap transition-colors duration-300 ${
                    activeTab === tab.id
                      ? "text-amber-900 border-b-2 border-amber-600"
                      : "text-amber-700 hover:text-amber-900 hover:bg-amber-200/50"
                  }`}>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          {/* Our Story */}
          {activeTab === "story" && (
            <div className="animate-fade-in">
              {/* EthnicWear Introduction Section */}
              <div className="bg-white rounded-xl shadow-md p-8 md:p-12 mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-6 text-center">
                  Welcome to EthnicWear – Where Tradition is Timeless Fashion
                </h2>
                <div className="text-amber-800 space-y-6">
                  <p>
                    At EthnicWear, we recognise that clothing serves a purpose
                    beyond just covering the body – it represents culture,
                    identity, and emotion. Our brand originated from a basic
                    desire to revive and highlight the richness of Indian wear
                    in a world so quick to jump on fashion bandwagons. Today,
                    EthnicWear serves as a reminder to all those who appreciate
                    heritage, craftsmanship and sophistication.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-6">
                    Our Story
                  </h2>
                  <p className="text-amber-800 mb-4">
                    EthnicWear was founded on our love of Indian culture and
                    textiles, so the past and the present of craft and changing
                    fashion sensibility can be connected. We believe that every
                    stitch tells a story, and every ethnic wear piece draws from
                    the spirit of our plurality. Our collections celebrate the
                    colourful heritage of India and demonstrate the rich
                    splendour of Banarasi silk and the delicate intricacies of
                    Lucknowi chikankari, from traditional Anarkali shapes to
                    modern Indo-western combinations.
                  </p>
                  <p className="text-amber-800 mb-4">
                    What started as a simple thought has blossomed into a
                    full-fledged platform serving customers throughout India and
                    beyond. We aim to make ethnic wear not just accessible, but
                    relevant for every generation.
                  </p>
                  <div className="bg-amber-100 border-l-4 border-amber-500 p-4 my-6">
                    <p className="italic text-amber-700">
                      "Every thread tells a story, every pattern holds a legacy.
                      We're not just selling clothes, we're keeping traditions
                      alive."
                    </p>
                    <p className="text-amber-600 mt-2">
                      - Priya Sharma, Founder
                    </p>
                  </div>
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-lg h-96">
                  <img
                    src="/images/founder.jpg"
                    alt="Founder with artisans"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <p className="text-white text-sm">
                      Priya with our master weavers in Varanasi, 2012
                    </p>
                  </div>
                </div>
              </div>

              {/* What We Offer Section */}
              <div className="bg-white rounded-xl shadow-md p-8 md:p-12 mb-16">
                <h3 className="text-2xl font-bold text-amber-900 mb-6 text-center">
                  What We Have to Offer
                </h3>
                <div className="text-amber-800 space-y-6">
                  <p>
                    At EthnicWear, we have a specially curated selection of:
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">•</span>
                      <span>
                        <strong>Women's Wear:</strong> Sarees, Anarkali suits,
                        salwar kameez, lehengas, kurtis and fusion wear.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">•</span>
                      <span>
                        <strong>Men's Wear:</strong> Stylish kurtas, sherwanis,
                        Nehru jackets, and pathani suits.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">•</span>
                      <span>
                        <strong>Kids' ethnic wear:</strong> Cute and festive
                        boys' and girls' wear for all occasions.
                      </span>
                    </li>
                  </ul>
                  <p>
                    Each product is sourced or designed with consideration to
                    quality fabric, skilled craftsmanship and the right blend of
                    tradition and trend.
                  </p>
                </div>
              </div>

              {/* Why Choose Us Section */}
              <div className="bg-amber-50 rounded-xl p-8 md:p-12 mb-16">
                <h3 className="text-2xl font-bold text-amber-900 mb-6 text-center">
                  Why Choose Us?
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold text-amber-800 mb-3">
                      Authenticity
                    </h4>
                    <p className="text-amber-700">
                      We work with artisans, weavers and designers around the
                      country to ensure that you receive authentic, handmade,
                      ethnic wear fashion.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-amber-800 mb-3">
                      Quality Control
                    </h4>
                    <p className="text-amber-700">
                      We check each detail for quality management from the time
                      we select the fabric until the final garment is stitched.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-amber-800 mb-3">
                      Size Inclusivity
                    </h4>
                    <p className="text-amber-700">
                      We want ethnic wear to be accessible to all, which is why
                      we helped make size inclusive and included sizing tips for
                      all styles.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-amber-800 mb-3">
                      Customer Happiness
                    </h4>
                    <p className="text-amber-700">
                      Your happiness is important to us because it reflects the
                      service we provide. We take care to make sure that your
                      experience is an excellent one, with hassle-free returns
                      and a team of support who is always available to assist
                      you.
                    </p>
                  </div>
                </div>
              </div>

              {/* Our Vision Section */}
              <div className="bg-white rounded-xl shadow-md p-8 md:p-12 mb-16">
                <h3 className="text-2xl font-bold text-amber-900 mb-6 text-center">
                  Our Vision
                </h3>
                <div className="text-amber-800 space-y-6">
                  <p>
                    We live in a world where ethnic wear transcends special
                    occasions, and we wear ethnic clothing daily, not only for
                    festivities or weddings but for every single moment worthy
                    of celebration. We see this as a way to inspire our
                    customers to enjoy the journey back to meaningful roots and
                    to develop a global appreciation for Indian art and culture.
                  </p>
                </div>
              </div>

              {/* Join Us Section */}
              <div className="text-center mb-16">
                <h3 className="text-2xl font-bold text-amber-900 mb-6">
                  Join the EthnicWear Family
                </h3>
                <p className="text-amber-800 max-w-3xl mx-auto">
                  When you wear EthnicWear, you're wearing a story, a legacy and
                  a piece of India's cultural heritage. Regardless if it is
                  Diwali, a wedding, or you just want to feel special in
                  everyday life, EthnicWear is there to bring tradition back
                  into your clothing, one outfit at a time.
                </p>
                <p className="text-amber-600 mt-6">
                  Thank you for including us in your journey.
                </p>
              </div>

              {/* Original Journey in Numbers Section */}
              <div className="bg-white rounded-xl shadow-md p-8 md:p-12 mb-16">
                <h3 className="text-2xl font-bold text-amber-900 mb-6 text-center">
                  Our Journey in Numbers
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  {[
                    { number: "12+", label: "Years of Excellence" },
                    { number: "500+", label: "Skilled Artisans" },
                    { number: "75+", label: "Traditional Crafts" },
                    { number: "50K+", label: "Happy Customers" },
                  ].map((stat, index) => (
                    <div
                      key={stat.label}
                      className="p-6 bg-amber-50 rounded-lg hover:bg-amber-100 transition-colors duration-300 animate-fade-in-up"
                      style={{ animationDelay: `${index * 100}ms` }}>
                      <p className="text-4xl font-bold text-amber-700 mb-2">
                        {stat.number}
                      </p>
                      <p className="text-amber-600">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* The Craft */}
          {activeTab === "craft" && (
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-8 text-center">
                The Art Behind Our Collections
              </h2>
              <p className="text-amber-800 mb-12 max-w-4xl mx-auto text-center">
                Each piece in our collection is a testament to centuries-old
                craftsmanship, blending traditional techniques with contemporary
                designs.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {[
                  {
                    title: "Handloom Weaving",
                    desc: "Our sarees are woven on traditional handlooms, preserving techniques passed down through generations.",
                    image: "/images/weaving.jpg",
                  },
                  {
                    title: "Natural Dyes",
                    desc: "We use only plant-based dyes, creating vibrant colors that are eco-friendly and skin-safe.",
                    image: "/images/dyeing.jpg",
                  },
                  {
                    title: "Embroidery Art",
                    desc: "Intricate hand embroidery done by master artisans, each stitch telling a cultural story.",
                    image: "/images/embroidery.jpg",
                  },
                  {
                    title: "Block Printing",
                    desc: "Traditional wooden blocks create unique patterns, with no two pieces exactly alike.",
                    image: "/images/block-print.jpg",
                  },
                  {
                    title: "Zari Work",
                    desc: "Authentic gold and silver thread work that adds royal elegance to our outfits.",
                    image: "/images/zari.jpg",
                  },
                  {
                    title: "Sustainable Practices",
                    desc: "From sourcing to packaging, we prioritize environmental responsibility.",
                    image: "/images/sustainable.jpg",
                  },
                ].map((craft, index) => (
                  <div
                    key={craft.title}
                    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="h-48 overflow-hidden">
                      <img
                        src={craft.image}
                        alt={craft.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-semibold text-amber-900 mb-2">
                        {craft.title}
                      </h4>
                      <p className="text-amber-700">{craft.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Our Artisans */}
          {activeTab === "artisans" && (
            <div className="animate-fade-in">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
                  Meet Our Master Artisans
                </h2>
                <p className="text-amber-800 max-w-3xl mx-auto">
                  Behind every exquisite piece is a skilled artisan whose hands
                  weave magic. We work directly with craft communities across
                  India, ensuring fair wages and preserving endangered art
                  forms.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {[
                  {
                    name: "Rukmini Devi",
                    craft: "Banarasi Weaving",
                    location: "Varanasi, UP",
                    years: "35+ years",
                    image: "/images/artisan1.jpg",
                  },
                  {
                    name: "Abdul Kareem",
                    craft: "Chikankari Embroidery",
                    location: "Lucknow, UP",
                    years: "28 years",
                    image: "/images/artisan2.jpg",
                  },
                  {
                    name: "Laxmi Ben",
                    craft: "Bandhani Tie-Dye",
                    location: "Bhuj, Gujarat",
                    years: "42 years",
                    image: "/images/artisan3.jpg",
                  },
                  {
                    name: "Rajendra Singh",
                    craft: "Block Printing",
                    location: "Jaipur, Rajasthan",
                    years: "23 years",
                    image: "/images/artisan4.jpg",
                  },
                  {
                    name: "Meena Kumari",
                    craft: "Kantha Stitching",
                    location: "Kolkata, WB",
                    years: "19 years",
                    image: "/images/artisan5.jpg",
                  },
                  {
                    name: "Prabhakar Joshi",
                    craft: "Pattachitra Painting",
                    location: "Puri, Odisha",
                    years: "31 years",
                    image: "/images/artisan6.jpg",
                  },
                ].map((artisan, index) => (
                  <div
                    key={artisan.name}
                    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="h-64 overflow-hidden relative">
                      <img
                        src={artisan.image}
                        alt={artisan.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                        <h4 className="text-white font-semibold text-lg">
                          {artisan.name}
                        </h4>
                        <p className="text-amber-200 text-sm">
                          {artisan.craft}
                        </p>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between text-sm text-amber-700 mb-2">
                        <span>{artisan.location}</span>
                        <span>{artisan.years}</span>
                      </div>
                      <p className="text-amber-800 mt-4">
                        "Our ancestors created these art forms, it's our duty to
                        keep them alive for future generations."
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-amber-800 text-white rounded-xl p-8 md:p-12 text-center">
                <h3 className="text-2xl font-bold mb-4">
                  Artisan Welfare Program
                </h3>
                <p className="mb-6 max-w-3xl mx-auto">
                  We invest 5% of all profits into education and healthcare
                  initiatives for artisan communities. Your purchase directly
                  supports these families and helps preserve India's textile
                  heritage.
                </p>
                <button className="px-6 py-3 bg-white text-amber-800 rounded-lg font-medium hover:bg-amber-100 transition-colors duration-300">
                  Learn About Our Initiatives
                </button>
              </div>
            </div>
          )}

          {/* Our Values */}
          {activeTab === "values" && (
            <div className="animate-fade-in">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
                  Our Core Values
                </h2>
                <p className="text-amber-800 max-w-3xl mx-auto">
                  These principles guide every decision we make, from design to
                  delivery.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-16">
                {[
                  {
                    icon: "🌿",
                    title: "Sustainability",
                    desc: "We use organic fabrics, natural dyes, and eco-friendly packaging to minimize environmental impact.",
                  },
                  {
                    icon: "✋",
                    title: "Authenticity",
                    desc: "Every piece is genuinely handcrafted using traditional methods - no machine-made imitations.",
                  },
                  {
                    icon: "⚖️",
                    title: "Fair Trade",
                    desc: "Artisans receive fair wages directly, with no middlemen taking their share.",
                  },
                  {
                    icon: "❤️",
                    title: "Customer Care",
                    desc: "Personalized styling advice and after-sales support for every customer.",
                  },
                  {
                    icon: "🔄",
                    title: "Slow Fashion",
                    desc: "We create timeless pieces meant to last, countering disposable fashion trends.",
                  },
                  {
                    icon: "🌎",
                    title: "Cultural Preservation",
                    desc: "We document and promote endangered art forms through our collections.",
                  },
                ].map((value, index) => (
                  <div
                    key={value.title}
                    className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-amber-500 flex animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="text-4xl mr-4">{value.icon}</div>
                    <div>
                      <h4 className="text-xl font-semibold text-amber-900 mb-2">
                        {value.title}
                      </h4>
                      <p className="text-amber-700">{value.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative rounded-xl overflow-hidden shadow-lg h-96">
                  <img
                    src="/images/values.jpg"
                    alt="Our team working"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-amber-900 mb-4">
                    Our Promise to You
                  </h3>
                  <p className="text-amber-800 mb-4">
                    When you choose EthniCraft, you're not just buying clothing
                    - you're becoming part of a movement to sustain traditional
                    crafts and support artisan livelihoods.
                  </p>
                  <p className="text-amber-800 mb-6">
                    We meticulously verify the origin and craftsmanship of every
                    piece in our collection. Our quality assurance team
                    personally visits artisan clusters to ensure our high
                    standards are met.
                  </p>
                  <div className="bg-amber-100 rounded-lg p-6 border border-amber-200">
                    <h4 className="font-semibold text-amber-900 mb-2">
                      Quality Guarantee
                    </h4>
                    <p className="text-amber-700">
                      Every item comes with our 15-day quality guarantee. If
                      you're not completely satisfied, we'll make it right.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <section className="bg-amber-900 text-white py-16">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our Tradition
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Become part of our story by wearing heritage with pride
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-amber-900 rounded-lg font-medium hover:bg-amber-100 transition-colors duration-300">
                Shop Collections
              </button>
              <button className="px-8 py-3 border border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors duration-300">
                Meet Our Artisans
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutUs;
