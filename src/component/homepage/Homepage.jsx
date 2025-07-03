"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import ContentWithFAQs from "./component/Contentandfaq";
import productData from "../../app/data/products.json";

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Auto-slide testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Categories Data
  const categories = [
    {
      id: 1,
      name: "Sarees",
      count: "120+ Styles",
      image: "/saree.webp",
    },
    {
      id: 2,
      name: "Lehengas",
      count: "80+ Designs",
      image: "/lehenga.avif",
    },
    {
      id: 3,
      name: "Kurtas",
      count: "150+ Variants",
      image: "/kurtas.webp",
    },
    {
      id: 4,
      name: "Jewelry",
      count: "50+ Pieces",
      image: "/jwellery.webp",
    },
  ];

  // Trending Collections
  // const collections = [
  //   {
  //     id: 1,
  //     name: "Banarasi Silk Saree",
  //     price: "₹3,999",
  //     oldPrice: "₹5,999",
  //     discount: "30% OFF",
  //     image:
  //       "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  //   },
  //   {
  //     id: 2,
  //     name: "Kanjivaram Silk Saree",
  //     price: "₹5,499",
  //     oldPrice: "₹7,999",
  //     discount: "25% OFF",
  //     image:
  //       "https://images.unsplash.com/photo-1539109136881-3be0616ac5d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  //   },
  //   {
  //     id: 3,
  //     name: "Bridal Lehenga Choli",
  //     price: "₹12,999",
  //     oldPrice: "₹18,999",
  //     discount: "35% OFF",
  //     image:
  //       "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  //   },
  //   {
  //     id: 4,
  //     name: "Cotton Printed Kurta",
  //     price: "₹1,299",
  //     oldPrice: "₹1,999",
  //     discount: "35% OFF",
  //     image:
  //       "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  //   },
  //   {
  //     id: 5,
  //     name: "Chanderi Silk Saree",
  //     price: "₹4,299",
  //     oldPrice: "₹6,499",
  //     discount: "30% OFF",
  //     image:
  //       "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  //   },
  //   {
  //     id: 6,
  //     name: "Designer Lehenga Set",
  //     price: "₹9,999",
  //     oldPrice: "₹14,999",
  //     discount: "33% OFF",
  //     image:
  //       "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  //   },
  //   {
  //     id: 7,
  //     name: "Silk Anarkali Suit",
  //     price: "₹3,499",
  //     oldPrice: "₹4,999",
  //     discount: "30% OFF",
  //     image:
  //       "https://images.unsplash.com/photo-1595341595379-cf0ff033ce9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  //   },
  //   {
  //     id: 8,
  //     name: "Handloom Cotton Saree",
  //     price: "₹2,199",
  //     oldPrice: "₹3,299",
  //     discount: "33% OFF",
  //     image:
  //       "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  //   },
  //   {
  //     id: 9,
  //     name: "Party Wear Gown",
  //     price: "₹4,999",
  //     oldPrice: "₹7,499",
  //     discount: "33% OFF",
  //     image:
  //       "https://images.unsplash.com/photo-1539109136881-3be0616ac5d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  //   },
  //   {
  //     id: 10,
  //     name: "Traditional Sherwani",
  //     price: "₹8,499",
  //     oldPrice: "₹12,999",
  //     discount: "35% OFF",
  //     image:
  //       "https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  //   },
  //   {
  //     id: 11,
  //     name: "Kalamkari Printed Saree",
  //     price: "₹3,299",
  //     oldPrice: "₹4,999",
  //     discount: "34% OFF",
  //     image:
  //       "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  //   },
  //   {
  //     id: 12,
  //     name: "Designer Blouse Piece",
  //     price: "₹1,199",
  //     oldPrice: "₹1,799",
  //     discount: "33% OFF",
  //     image:
  //       "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  //   },
  //   {
  //     id: 13,
  //     name: "Silk Salwar Suit",
  //     price: "₹4,799",
  //     oldPrice: "₹6,999",
  //     discount: "31% OFF",
  //     image:
  //       "https://images.unsplash.com/photo-1595341595379-cf0ff033ce9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  //   },
  //   {
  //     id: 14,
  //     name: "Cotton Palazzo Set",
  //     price: "₹1,499",
  //     oldPrice: "₹2,299",
  //     discount: "35% OFF",
  //     image:
  //       "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  //   },
  //   {
  //     id: 15,
  //     name: "Zari Work Lehenga",
  //     price: "₹11,499",
  //     oldPrice: "₹16,999",
  //     discount: "32% OFF",
  //     image:
  //       "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  //   },
  //   {
  //     id: 16,
  //     name: "Linen Kurta Set",
  //     price: "₹2,999",
  //     oldPrice: "₹4,499",
  //     discount: "33% OFF",
  //     image:
  //       "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  //   },
  //   {
  //     id: 17,
  //     name: "Bandhani Print Saree",
  //     price: "₹3,799",
  //     oldPrice: "₹5,699",
  //     discount: "33% OFF",
  //     image:
  //       "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  //   },
  //   {
  //     id: 18,
  //     name: "Designer Dupatta",
  //     price: "₹1,099",
  //     oldPrice: "₹1,699",
  //     discount: "35% OFF",
  //     image:
  //       "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  //   },
  //   {
  //     id: 19,
  //     name: "Silk Churidar Set",
  //     price: "₹4,299",
  //     oldPrice: "₹6,499",
  //     discount: "34% OFF",
  //     image:
  //       "https://images.unsplash.com/photo-1595341595379-cf0ff033ce9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  //   },
  //   {
  //     id: 20,
  //     name: "Cotton Kurti with Leggings",
  //     price: "₹1,299",
  //     oldPrice: "₹1,999",
  //     discount: "35% OFF",
  //     image:
  //       "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  //   },
  //   {
  //     id: 21,
  //     name: "Tussar Silk Saree",
  //     price: "₹4,999",
  //     oldPrice: "₹7,499",
  //     discount: "33% OFF",
  //     image:
  //       "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  //   },
  //   {
  //     id: 22,
  //     name: "Designer Shawl",
  //     price: "₹1,599",
  //     oldPrice: "₹2,399",
  //     discount: "33% OFF",
  //     image:
  //       "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  //   },
  //   {
  //     id: 23,
  //     name: "Printed Georgette Saree",
  //     price: "₹3,299",
  //     oldPrice: "₹4,999",
  //     discount: "34% OFF",
  //     image:
  //       "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  //   },
  //   {
  //     id: 24,
  //     name: "Embroidered Kurta Set",
  //     price: "₹2,799",
  //     oldPrice: "₹4,199",
  //     discount: "33% OFF",
  //     image:
  //       "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  //   },
  //   {
  //     id: 25,
  //     name: "Silk Blend Saree",
  //     price: "₹3,899",
  //     oldPrice: "₹5,899",
  //     discount: "34% OFF",
  //     image:
  //       "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  //   },
  //   {
  //     id: 26,
  //     name: "Designer Potli Bag",
  //     price: "₹899",
  //     oldPrice: "₹1,399",
  //     discount: "36% OFF",
  //     image:
  //       "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  //   },
  //   {
  //     id: 27,
  //     name: "Organza Saree",
  //     price: "₹4,199",
  //     oldPrice: "₹6,299",
  //     discount: "33% OFF",
  //     image:
  //       "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  //   },
  //   {
  //     id: 28,
  //     name: "Cotton Dhoti Set",
  //     price: "₹1,799",
  //     oldPrice: "₹2,699",
  //     discount: "33% OFF",
  //     image:
  //       "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  //   },
  //   {
  //     id: 29,
  //     name: "Zardozi Work Lehenga",
  //     price: "₹13,999",
  //     oldPrice: "₹19,999",
  //     discount: "30% OFF",
  //     image:
  //       "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  //   },
  //   {
  //     id: 30,
  //     name: "Linen Shirt Kurta",
  //     price: "₹2,499",
  //     oldPrice: "₹3,799",
  //     discount: "34% OFF",
  //     image:
  //       "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  //   },
  //   {
  //     id: 31,
  //     name: "Paithani Silk Saree",
  //     price: "₹6,999",
  //     oldPrice: "₹9,999",
  //     discount: "30% OFF",
  //     image:
  //       "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  //   },
  //   {
  //     id: 32,
  //     name: "Designer Jutti",
  //     price: "₹1,299",
  //     oldPrice: "₹1,999",
  //     discount: "35% OFF",
  //     image:
  //       "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  //   },
  //   {
  //     id: 33,
  //     name: "Net Saree with Blouse",
  //     price: "₹3,599",
  //     oldPrice: "₹5,399",
  //     discount: "33% OFF",
  //     image:
  //       "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  //   },
  //   {
  //     id: 34,
  //     name: "Cotton Angrakha Kurta",
  //     price: "₹2,199",
  //     oldPrice: "₹3,299",
  //     discount: "33% OFF",
  //     image:
  //       "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  //   },
  //   {
  //     id: 35,
  //     name: "Silk Blend Lehenga",
  //     price: "₹8,999",
  //     oldPrice: "₹12,999",
  //     discount: "31% OFF",
  //     image:
  //       "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  //   },
  //   {
  //     id: 36,
  //     name: "Printed Palazzo Suit",
  //     price: "₹1,899",
  //     oldPrice: "₹2,899",
  //     discount: "34% OFF",
  //     image:
  //       "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  //   },
  //   {
  //     id: 37,
  //     name: "Kashmiri Silk Saree",
  //     price: "₹5,499",
  //     oldPrice: "₹7,999",
  //     discount: "31% OFF",
  //     image:
  //       "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  //   },
  //   {
  //     id: 38,
  //     name: "Designer Maang Tikka",
  //     price: "₹699",
  //     oldPrice: "₹1,099",
  //     discount: "36% OFF",
  //     image:
  //       "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  //   },
  //   {
  //     id: 39,
  //     name: "Georgette Anarkali",
  //     price: "₹3,299",
  //     oldPrice: "₹4,999",
  //     discount: "34% OFF",
  //     image:
  //       "https://images.unsplash.com/photo-1595341595379-cf0ff033ce9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  //   },
  //   {
  //     id: 40,
  //     name: "Cotton Kurta Pyjama",
  //     price: "₹1,599",
  //     oldPrice: "₹2,399",
  //     discount: "33% OFF",
  //     image:
  //       "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  //   },
  // ];

  // Festival Offers
  const festivalOffers = [
    {
      id: 1,
      name: "Diwali Special",
      discount: "40% OFF",
      code: "DIWALI40",
      image: "/diwali-offer.jpg",
    },
    {
      id: 2,
      name: "Wedding Collection",
      discount: "Buy 1 Get 1",
      code: "WEDDINGBOGO",
      image: "/wedding-offer.jpg",
    },
    {
      id: 3,
      name: "Holi Sale",
      discount: "50% OFF",
      code: "HOLI50",
      image: "/holi-offer.jpg",
    },
    {
      id: 4,
      name: "Diwali Special",
      discount: "40% OFF",
      code: "DIWALI40",
      image: "/diwali-offer.jpg",
    },
    {
      id: 5,
      name: "Wedding Collection",
      discount: "Buy 1 Get 1",
      code: "WEDDINGBOGO",
      image: "/wedding-offer.jpg",
    },
    {
      id: 6,
      name: "Holi Sale",
      discount: "50% OFF",
      code: "HOLI50",
      image: "/holi-offer.jpg",
    },
  ];

  // Why Choose Us
  const features = [
    {
      id: 1,
      title: "Handcrafted",
      icon: "✋",
      desc: "Authentic handwoven fabrics",
    },
    {
      id: 2,
      title: "Free Shipping",
      icon: "🚚",
      desc: "On orders above ₹1999",
    },
    {
      id: 3,
      title: "Easy Returns",
      icon: "🔄",
      desc: "15-day hassle-free returns",
    },
    {
      id: 4,
      title: "24/7 Support",
      icon: "💬",
      desc: "Dedicated customer care",
    },
  ];

  // Testimonials
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      review:
        "The fabric and embroidery are exquisite. Got so many compliments!",
      rating: "★★★★★",
    },
    {
      id: 2,
      name: "Rahul Patel",
      review: "Perfect fit and authentic designs. Will shop again!",
      rating: "★★★★☆",
    },
    {
      id: 3,
      name: "Ananya Reddy",
      review: "Fast delivery and beautiful packaging. Loved it!",
      rating: "★★★★★",
    },
  ];

  // Blog Posts
  const blogs = [
    {
      id: 1,
      title: "How to Style a Banarasi Saree",
      date: "May 15, 2024",
      image: "/blog1.jpg",
    },
    {
      id: 2,
      title: "Top 5 Lehenga Trends for 2024",
      date: "June 2, 2024",
      image: "/blog2.jpg",
    },
    {
      id: 3,
      title: "The Art of Handloom Weaving",
      date: "April 20, 2024",
      image: "/blog3.jpg",
    },
    {
      id: 4,
      title: "How to Style a Banarasi Saree",
      date: "May 15, 2024",
      image: "/blog1.jpg",
    },
    {
      id: 5,
      title: "Top 5 Lehenga Trends for 2024",
      date: "June 2, 2024",
      image: "/blog2.jpg",
    },
    {
      id: 6,
      title: "The Art of Handloom Weaving",
      date: "April 20, 2024",
      image: "/blog3.jpg",
    },
  ];

  // Instagram Gallery
  const instaPosts = [
    { id: 1, image: "/insta1.jpg", likes: "1.2k" },
    { id: 2, image: "/insta2.jpg", likes: "2.5k" },
    { id: 3, image: "/insta3.jpg", likes: "3.1k" },
    { id: 4, image: "/insta4.jpg", likes: "1.8k" },
  ];

  return (
    <div className="min-h-screen bg-rose-50">
      <Head>
        <title>Ethnic Elegance | Traditional Indian Wear</title>
        <meta
          name="description"
          content="Shop exquisite ethnic wear - Sarees, Lehengas, Kurtas & more."
        />
      </Head>

      {/* Navbar */}
      {/* <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-2xl font-bold text-rose-700 font-serif">Ethnic Elegance</div>
          
          <button 
            className="md:hidden text-rose-800" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>

          
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-rose-800 hover:text-rose-600 transition">Home</a>
            <a href="#" className="text-rose-800 hover:text-rose-600 transition">Shop</a>
            <a href="#" className="text-rose-800 hover:text-rose-600 transition">Collections</a>
            <a href="#" className="text-rose-800 hover:text-rose-600 transition">Blog</a>
            <a href="#" className="text-rose-800 hover:text-rose-600 transition">About</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-rose-800 hover:text-rose-600 transition">🔍</button>
            <button className="text-rose-800 hover:text-rose-600 transition">🛒</button>
            <button className="bg-rose-700 text-white px-4 py-2 rounded hover:bg-rose-800 transition">Login</button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white py-4 px-4 shadow-lg">
            <a href="#" className="block py-2 text-rose-800">Home</a>
            <a href="#" className="block py-2 text-rose-800">Shop</a>
            <a href="#" className="block py-2 text-rose-800">Collections</a>
            <a href="#" className="block py-2 text-rose-800">Blog</a>
            <a href="#" className="block py-2 text-rose-800">About</a>
            <div className="mt-4 flex space-x-4">
              <button className="bg-rose-700 text-white px-4 py-2 rounded">Login</button>
            </div>
          </div>
        )}
      </nav> */}

      {/* Hero Banner */}
      <section className="relative h-[85vh] bg-gradient-to-r from-rose-100 to-amber-100 flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-rose-800 mb-4 animate-fadeIn">
            Punjabi Jutti
          </h1>
          <p className="text-xl md:text-2xl text-amber-900 mb-8 animate-fadeIn delay-200">
            Discover the finest handcrafted ethnic wear
          </p>
          <Link href="/shop" className="animate-fadeIn delay-300">
            <button className="bg-rose-700 cursor-pointer hover:bg-rose-800 text-white px-8 py-3 rounded-full text-lg font-medium transition transform hover:scale-105 animate-fadeIn delay-400">
              Shop Now
            </button>
          </Link>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 bg-white">
        <div className="container max-w-[1600px] mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-rose-800 mb-12">
            Shop By Category
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link href="/products" key={category.id}>
                <div
                  
                  className="group cursor-pointer relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition duration-300">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-48 object-cover transition duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-4">
                    <h3 className="text-white font-bold text-xl">
                      {category.name}
                    </h3>
                    <p className="text-rose-200">{category.count}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Collections */}
      <section className="py-16 bg-rose-50">
        <div className="container max-w-[1600px] mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-rose-800">
              Trending This Week
            </h2>
            <a href="/products" className="text-rose-700 hover:underline">
              View All →
            </a>
          </div>
 <Link href="/shop">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {productData.products.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition duration-300 bg-white">
                <div className="relative">
                  <img
                    src={productData.products.image}
                    alt={"product image"}
                    className="w-full h-64 object-cover transition duration-500 group-hover:scale-105"
                  />
                  {item.discount && (
                    <span className="absolute top-4 right-4 bg-rose-700 text-white px-3 py-1 rounded-full text-sm font-bold">
                      {`${item.discount}%OFF`}
                    </span>
                  )}
                </div>
                <div className="p-4">
                 
                    <h3 className="font-bold cursor-pointer text-lg text-rose-800">
                      {item.name}
                    </h3>
                  
                  <div className="flex items-center mt-2">
                    <span className="text-lg font-bold text-rose-700">
                      {item.price}
                    </span>
                    <span className="ml-2 text-sm text-gray-500 line-through">
                      {item.originalPrice}
                    </span>
                  </div>
                  <button className="mt-3 w-full bg-amber-100 hover:bg-amber-200 text-amber-900 py-2 rounded transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
          </Link>
        </div>
      </section>

      {/* Festival Offers */}
      <section className="py-16 bg-gradient-to-r from-amber-100 to-rose-100">
        <div className="container max-w-[1600px] mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-rose-800 mb-12">
            Festival Special Offers
          </h2>

          {/* Horizontal Scroll Container */}
          <div className="relative">
            {/* Scrollable Content */}
            <div className="flex overflow-x-auto pb-6 -mx-4 px-4 scrollbar-hide">
              <div className="flex space-x-8">
                {festivalOffers.map((offer) => (
                  <div
                    key={offer.id}
                    className="flex-shrink-0 w-[300px] md:w-[350px] relative rounded-xl overflow-hidden shadow-xl">
                    <img
                      src={offer.image}
                      alt={offer.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6">
                      <h3 className="text-white text-2xl font-bold mb-1">
                        {offer.name}
                      </h3>
                      <p className="text-rose-200 text-xl font-bold mb-2">
                        {offer.discount}
                      </p>
                      <p className="text-white mb-4">
                        Use code:{" "}
                        <span className="font-bold">{offer.code}</span>
                      </p>
                      <Link href="/shop">
                        <button className="bg-rose-700 cursor-pointer hover:bg-rose-800 text-white px-6 py-2 rounded-full transition">
                          Shop Now
                        </button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Gradient Fade Effect (optional) */}
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-rose-100 to-transparent pointer-events-none"></div>
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-rose-100 to-transparent pointer-events-none"></div>
          </div>

          {/* Scroll Indicators (optional) */}
          <div className="flex justify-center mt-6 space-x-2">
            {festivalOffers.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-rose-300 opacity-50"></div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container max-w-[1600px] mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-rose-800 mb-12">
            Why Choose Us?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="bg-rose-50 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-rose-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-rose-50">
        <div className="container max-w-[1600px] mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-rose-800 mb-12">
            What Our Customers Say
          </h2>

          <div className="relative max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`text-center transition-opacity duration-500 ${
                  index === currentTestimonial
                    ? "opacity-100"
                    : "opacity-0 absolute top-0 left-0 right-0"
                }`}>
                <p className="text-lg italic text-gray-700 mb-4">
                  "{testimonial.review}"
                </p>
                <p className="font-bold text-rose-800 mb-1">
                  — {testimonial.name}
                </p>
                <p className="text-amber-500">{testimonial.rating}</p>
              </div>
            ))}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentTestimonial ? "bg-rose-700" : "bg-rose-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Highlights */}
      <section className="py-16 hidden bg-white">
        <div className="container max-w-[1600px] mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-rose-800">Fashion Blog</h2>
            <a href="/products" className="text-rose-700 hover:underline">
              Read All →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{blog.date}</p>
                  <h3 className="text-xl font-bold text-rose-800 mb-2">
                    {blog.title}
                  </h3>
                  <a href="#" className="text-rose-700 hover:underline">
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Gallery */}
      <section className="py-16 hidden bg-rose-50">
        <div className="container max-w-[1600px] mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-rose-800 mb-12">
            Follow Us on Instagram
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {instaPosts.map((post) => (
              <div
                key={post.id}
                className="relative group overflow-hidden rounded-lg">
                <img
                  src={post.image}
                  alt="Instagram Post"
                  className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <span className="text-white font-bold">❤️ {post.likes}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a className="inline-block bg-rose-700 hover:bg-rose-800 text-white px-6 py-3 rounded-full transition">
              @PunjabiJuttis
            </a>
          </div>
        </div>
      </section>

      <ContentWithFAQs />

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-r from-rose-700 to-amber-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Subscribe for exclusive offers, styling tips & early access to new
            collections!
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-l-lg focus:outline-none text-gray-800"
            />
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-r-lg transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="bg-rose-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Ethnic Elegance</h3>
              <p className="text-rose-300 mb-4">Celebrating India's rich textile heritage with handcrafted elegance.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-2xl hover:text-rose-200 transition">📱</a>
                <a href="#" className="text-2xl hover:text-rose-200 transition">📸</a>
                <a href="#" className="text-2xl hover:text-rose-200 transition">💻</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Shop</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-rose-200 transition">Sarees</a></li>
                <li><a href="#" className="hover:text-rose-200 transition">Lehengas</a></li>
                <li><a href="#" className="hover:text-rose-200 transition">Kurtas</a></li>
                <li><a href="#" className="hover:text-rose-200 transition">Jewelry</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Help</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-rose-200 transition">FAQs</a></li>
                <li><a href="#" className="hover:text-rose-200 transition">Shipping</a></li>
                <li><a href="#" className="hover:text-rose-200 transition">Returns</a></li>
                <li><a href="#" className="hover:text-rose-200 transition">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li>123 Heritage Lane, Mumbai</li>
                <li>+91 9876543210</li>
                <li>info@ethnicelegance.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-rose-800 mt-8 pt-8 text-center text-rose-300">
            <p>© {new Date().getFullYear()} Ethnic Elegance. All rights reserved.</p>
          </div>
        </div>
      </footer> */}

      {/* Animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
    </div>
  );
}
