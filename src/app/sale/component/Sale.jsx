"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight, FiClock, FiTag, FiShoppingBag } from "react-icons/fi";
import Testimonials from "@/component/homepage/component/Testimonialsection";
import Whychose from "./Whychose";
import TrendingSec from "./TrendingSec";

const SalePage = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Sale end date (3 days from now)
  useEffect(() => {
    const saleEndDate = new Date();
    saleEndDate.setDate(saleEndDate.getDate() + 3);

    const timer = setInterval(() => {
      const now = new Date();
      const difference = saleEndDate - now;

      if (difference <= 0) {
        clearInterval(timer);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  //   const saleProducts = [
  //     {
  //       id: 1,
  //       name: "Banarasi Silk Saree",
  //       originalPrice: 5999,
  //       salePrice: 3599,
  //       discount: "40% OFF",
  //       image: "/banarasi-saree.jpg",
  //       category: "Sarees"
  //     },
  //     {
  //       id: 2,
  //       name: "Chanderi Cotton Kurta Set",
  //       originalPrice: 3999,
  //       salePrice: 2399,
  //       discount: "35% OFF",
  //       image: "/chanderi-kurta.jpg",
  //       category: "Kurtas"
  //     },
  //     {
  //       id: 3,
  //       name: "Lehenga Choli Set",
  //       originalPrice: 8999,
  //       salePrice: 5399,
  //       discount: "40% OFF",
  //       image: "/lehenga-choli.jpg",
  //       category: "Lehengas"
  //     },
  //     {
  //       id: 4,
  //       name: "Kanjivaram Silk Saree",
  //       originalPrice: 7999,
  //       salePrice: 4799,
  //       discount: "40% OFF",
  //       image: "/kanjivaram-saree.jpg",
  //       category: "Sarees"
  //     },
  //     {
  //       id: 5,
  //       name: "Cotton Salwar Suit",
  //       originalPrice: 3499,
  //       salePrice: 2099,
  //       discount: "40% OFF",
  //       image: "/salwar-suit.jpg",
  //       category: "Salwar Suits"
  //     },
  //     {
  //       id: 6,
  //       name: "Temple Jewelry Set",
  //       originalPrice: 4999,
  //       salePrice: 2999,
  //       discount: "40% OFF",
  //       image: "/temple-jewelry.jpg",
  //       category: "Jewelry"
  //     }
  //   ];

  const saleProducts = [
    // Sarees (10 items)
    {
      id: 1,
      name: "Banarasi Silk Saree",
      originalPrice: 5999,
      salePrice: 3599,
      discount: "40% OFF",
      image:
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFuYXJhc2klMjBzaWxrJTIwc2FyZWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      category: "Sarees",
    },
    {
      id: 2,
      name: "Kanjivaram Silk Saree",
      originalPrice: 7999,
      salePrice: 4799,
      discount: "40% OFF",
      image:
        "https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2Fuaml2YXJhbSUyMHNpbGslMjBzYXJlZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      category: "Sarees",
    },
    {
      id: 3,
      name: "Chanderi Cotton Saree",
      originalPrice: 4599,
      salePrice: 2759,
      discount: "40% OFF",
      image:
        "https://images.unsplash.com/photo-1630001896327-df7c525357d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhbmRlcmklMjBzYXJlZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      category: "Sarees",
    },
    {
      id: 4,
      name: "Tussar Silk Saree",
      originalPrice: 5499,
      salePrice: 3299,
      discount: "40% OFF",
      image:
        "https://images.unsplash.com/photo-1630001896327-df7c525357d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHVzc2FyJTIwc2FyZWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      category: "Sarees",
    },
    {
      id: 5,
      name: "Paithani Silk Saree",
      originalPrice: 8999,
      salePrice: 5399,
      discount: "40% OFF",
      image:
        "https://images.unsplash.com/photo-1630001896327-df7c525357d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFpdGhhbmklMjBzYXJlZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      category: "Sarees",
    },
    {
      id: 6,
      name: "Kalamkari Printed Saree",
      originalPrice: 4999,
      salePrice: 2999,
      discount: "40% OFF",
      image:
        "https://images.unsplash.com/photo-1630001896327-df7c525357d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2FsYW1rYXJpJTIwc2FyZWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      category: "Sarees",
    },
    {
      id: 7,
      name: "Bandhani Tie-Dye Saree",
      originalPrice: 4299,
      salePrice: 2579,
      discount: "40% OFF",
      image:
        "https://images.unsplash.com/photo-1630001896327-df7c525357d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFuZGhhbmklMjBzYXJlZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      category: "Sarees",
    },
    {
      id: 8,
      name: "Kota Doria Saree",
      originalPrice: 3799,
      salePrice: 2279,
      discount: "40% OFF",
      image:
        "https://images.unsplash.com/photo-1630001896327-df7c525357d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a290YSUyMGRvcmlhJTIwc2FyZWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      category: "Sarees",
    },
    {
      id: 9,
      name: "Mysore Silk Saree",
      originalPrice: 6599,
      salePrice: 3959,
      discount: "40% OFF",
      image:
        "https://images.unsplash.com/photo-1630001896327-df7c525357d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bXlzb3JlJTIwc2lsayUyMHNhcmVlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      category: "Sarees",
    },
    {
      id: 10,
      name: "Bhagalpuri Silk Saree",
      originalPrice: 5899,
      salePrice: 3539,
      discount: "40% OFF",
      image:
        "https://images.unsplash.com/photo-1630001896327-df7c525357d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmhhZ2FscHVyaSUyMHNpbGslMjBzYXJlZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      category: "Sarees",
    },

    // Kurtas (8 items)
    {
      id: 11,
      name: "Chanderi Cotton Kurta Set",
      originalPrice: 3999,
      salePrice: 2399,
      discount: "40% OFF",
      image:
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hhbmRlcmklMjBrdXJ0YXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      category: "Kurtas",
    },
    {
      id: 12,
      name: "Kalamkari Printed Kurta",
      originalPrice: 3499,
      salePrice: 2099,
      discount: "40% OFF",
      image:
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2FsYW1rYXJpJTIwa3VydGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      category: "Kurtas",
    },
    {
      id: 13,
      name: "Ajrakh Printed Kurta",
      originalPrice: 4299,
      salePrice: 2579,
      discount: "40% OFF",
      image:
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWpyYWtoJTIwa3VydGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      category: "Kurtas",
    },
    {
      id: 14,
      name: "Linen Kurta with Churidar",
      originalPrice: 4599,
      salePrice: 2759,
      discount: "40% OFF",
      image:
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGluZW4lMjBrdXJ0YXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      category: "Kurtas",
    },
    {
      id: 15,
      name: "Silk Embroidered Kurta",
      originalPrice: 4999,
      salePrice: 2999,
      discount: "40% OFF",
      image:
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2lsayUyMGt1cnRhfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      category: "Kurtas",
    },
    {
      id: 16,
      name: "Cotton Anarkali Kurta",
      originalPrice: 3799,
      salePrice: 2279,
      discount: "40% OFF",
      image:
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YW5hcmthbGklMjBrdXJ0YXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      category: "Kurtas",
    },
    {
      id: 17,
      name: "Handblock Printed Kurta",
      originalPrice: 3499,
      salePrice: 2099,
      discount: "40% OFF",
      image:
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aGFuZGJsb2NrJTIwa3VydGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      category: "Kurtas",
    },
    {
      id: 18,
      name: "Kashmiri Embroidered Kurta",
      originalPrice: 5999,
      salePrice: 3599,
      discount: "40% OFF",
      image:
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8a2FzaG1pcmklMjBrdXJ0YXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      category: "Kurtas",
    },

    // Lehengas (7 items)
    {
      id: 19,
      name: "Lehenga Choli Set",
      originalPrice: 8999,
      salePrice: 5399,
      discount: "40% OFF",
      image:
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGVoZW5nYSUyMGNob2xpfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      category: "Lehengas",
    },
    {
      id: 20,
      name: "Silk Lehenga with Dupatta",
      originalPrice: 9999,
      salePrice: 5999,
      discount: "40% OFF",
      image:
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2lsayUyMGxlaGVuZ2F8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      category: "Lehengas",
    },
    {
      id: 21,
      name: "Net Lehenga with Zari Work",
      originalPrice: 10999,
      salePrice: 6599,
      discount: "40% OFF",
      image:
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmV0JTIwbGVoZW5nYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      category: "Lehengas",
    },
    {
      id: 22,
      name: "Velvet Lehenga Set",
      originalPrice: 11999,
      salePrice: 7199,
      discount: "40% OFF",
      image:
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dmVsdmV0JTIwbGVoZW5nYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      category: "Lehengas",
    },
    {
      id: 23,
      name: "Bandhani Lehenga Choli",
      originalPrice: 7999,
      salePrice: 4799,
      discount: "40% OFF",
      image:
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmFuZGhhbmklMjBsZWhlbmdhfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      category: "Lehengas",
    },
    {
      id: 24,
      name: "Wedding Lehenga Set",
      originalPrice: 14999,
      salePrice: 8999,
      discount: "40% OFF",
      image:
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2VkZGluZyUyMGxlaGVuZ2F8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      category: "Lehengas",
    },
    {
      id: 25,
      name: "Designer Lehenga with Blouse",
      originalPrice: 12999,
      salePrice: 7799,
      discount: "40% OFF",
      image:
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGVzaWduZXIlMjBsZWhlbmdhfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      category: "Lehengas",
    },

    // Salwar Suits (5 items)
    {
      id: 26,
      name: "Cotton Salwar Suit",
      originalPrice: 3499,
      salePrice: 2099,
      discount: "40% OFF",
      image:
        "https://images.unsplash.com/photo-1595343679420-1a9d6b5f3b3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2Fsd2FyJTIwc3VpdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      category: "Salwar Suits",
    },
    {
      id: 27,
      name: "Chikankari Salwar Kameez",
      originalPrice: 4999,
      salePrice: 2999,
      discount: "40% OFF",
      image:
        "https://images.unsplash.com/photo-1595343679420-1a9d6b5f3b3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpa2Fua2FyaSUyMHNhbHdhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      category: "Salwar Suits",
    },
    {
      id: 28,
      name: "Silk Salwar Suit Set",
      originalPrice: 5999,
      salePrice: 3599,
      discount: "40% OFF",
      image:
        "https://images.unsplash.com/photo-1595343679420-1a9d6b5f3b3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2lsayUyMHNhbHdhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      category: "Salwar Suits",
    },
    {
      id: 29,
      name: "Anarkali Salwar Suit",
      originalPrice: 5499,
      salePrice: 3299,
      discount: "40% OFF",
      image:
        "https://images.unsplash.com/photo-1595343679420-1a9d6b5f3b3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW5hcmthbGklMjBzYWx3YXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      category: "Salwar Suits",
    },
    {
      id: 30,
      name: "Designer Salwar Kameez",
      originalPrice: 6999,
      salePrice: 4199,
      discount: "40% OFF",
      image:
        "https://images.unsplash.com/photo-1595343679420-1a9d6b5f3b3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGVzaWduZXIlMjBzYWx3YXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      category: "Salwar Suits",
    },

    // Jewelry (5 items)
    {
      id: 31,
      name: "Temple Jewelry Set",
      originalPrice: 4999,
      salePrice: 2999,
      discount: "40% OFF",
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGVtcGxlJTIwamV3ZWxyeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      category: "Jewelry",
    },
    {
      id: 32,
      name: "Kundan Necklace Set",
      originalPrice: 7999,
      salePrice: 4799,
      discount: "40% OFF",
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a3VuZGFuJTIwamV3ZWxyeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      category: "Jewelry",
    },
    {
      id: 33,
      name: "Polki Jewelry Set",
      originalPrice: 8999,
      salePrice: 5399,
      discount: "40% OFF",
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9sa2klMjBqZXdlbHJ5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      category: "Jewelry",
    },
    {
      id: 34,
      name: "Pearl Choker Set",
      originalPrice: 5999,
      salePrice: 3599,
      discount: "40% OFF",
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVhcmwlMjBqZXdlbHJ5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      category: "Jewelry",
    },
    {
      id: 35,
      name: "Antique Gold Jewelry",
      originalPrice: 10999,
      salePrice: 6599,
      discount: "40% OFF",
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YW50aXF1ZSUyMGpld2Vscnl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      category: "Jewelry",
    },

    // Bags (3 items)
    {
      id: 36,
      name: "Zari Work Potli Bag",
      originalPrice: 1999,
      salePrice: 1199,
      discount: "40% OFF",
      image:
        "https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG90bGklMjBiYWd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      category: "Bags",
    },
    {
      id: 37,
      name: "Embroidered Clutch",
      originalPrice: 2499,
      salePrice: 1499,
      discount: "40% OFF",
      image:
        "https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZW1icm9pZGVyZWQlMjBjbHV0Y2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      category: "Bags",
    },
    {
      id: 38,
      name: "Silk Handbag",
      originalPrice: 2999,
      salePrice: 1799,
      discount: "40% OFF",
      image:
        "https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2lsayUyMGJhZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      category: "Bags",
    },

    // Footwear (3 items)
    {
      id: 39,
      name: "Mojaari Ethnic Footwear",
      originalPrice: 2499,
      salePrice: 1499,
      discount: "40% OFF",
      image:
        "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9qYXJpJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      category: "Footwear",
    },
    {
      id: 40,
      name: "Zardozi Juttis",
      originalPrice: 2999,
      salePrice: 1799,
      discount: "40% OFF",
      image:
        "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8anV0dGlzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      category: "Footwear",
    },
    {
      id: 41,
      name: "Embroidery Kolhapuris",
      originalPrice: 3499,
      salePrice: 2099,
      discount: "40% OFF",
      image:
        "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a29saGFwdXJpJTIwc2FuZGFsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      category: "Footwear",
    },

    // Accessories (4 items)
    {
      id: 42,
      name: "Silk Scarves Set",
      originalPrice: 1499,
      salePrice: 899,
      discount: "40% OFF",
      image:
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2lsayUyMHNjYXJmfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      category: "Accessories",
    },
    {
      id: 43,
      name: "Brocade Stole",
      originalPrice: 1999,
      salePrice: 1199,
      discount: "40% OFF",
      image:
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJvY2FkZSUyMHN0b2xlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      category: "Accessories",
    },
    {
      id: 44,
      name: "Handmade Hair Accessories",
      originalPrice: 999,
      salePrice: 599,
      discount: "40% OFF",
      image:
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGFpciUyMGFjY2Vzc29yaWVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      category: "Accessories",
    },
    {
      id: 45,
      name: "Traditional Waist Belt",
      originalPrice: 1299,
      salePrice: 779,
      discount: "40% OFF",
      image:
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2Fpc3QlMjBiZWx0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      category: "Accessories",
    },
  ];

  const categories = [
    { name: "All", count: saleProducts.length },
    {
      name: "Sarees",
      count: saleProducts.filter((p) => p.category === "Sarees").length,
    },
    {
      name: "Kurtas",
      count: saleProducts.filter((p) => p.category === "Kurtas").length,
    },
    {
      name: "Lehengas",
      count: saleProducts.filter((p) => p.category === "Lehengas").length,
    },
    {
      name: "Salwar Suits",
      count: saleProducts.filter((p) => p.category === "Salwar Suits").length,
    },
    {
      name: "Jewelry",
      count: saleProducts.filter((p) => p.category === "Jewelry").length,
    },
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? saleProducts
      : saleProducts.filter((product) => product.category === activeCategory);

  return (
    <div className="min-h-screen bg-rose-50">
      {/* Sale Banner */}
      <div className="bg-gradient-to-r from-rose-700 to-rose-600 text-white py-8 md:py-12">
        <div className="max-w-[1600px] mx-auto px-4 mt-20 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 font-serif">
              End of Season Sale
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Up to 50% off on premium ethnic wear
            </p>

            <div className="flex justify-center items-center space-x-4 mb-8">
              <FiTag className="text-2xl animate-pulse" />
              <span className="text-xl font-medium">
                Use code: <span className="font-bold">SALE30</span> for extra
                10% off
              </span>
            </div>
          </motion.div>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/20 backdrop-blur-sm rounded-lg p-4 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <FiClock className="text-xl" />
              <span className="font-medium">Sale ends in:</span>
            </div>
            <div className="flex justify-center space-x-3 md:space-x-6">
              <div className="text-center">
                <div className="text-2xl md:text-4xl font-bold">
                  {timeLeft.days}
                </div>
                <div className="text-xs md:text-sm">Days</div>
              </div>
              <div className="text-2xl md:text-4xl font-bold">:</div>
              <div className="text-center">
                <div className="text-2xl md:text-4xl font-bold">
                  {timeLeft.hours}
                </div>
                <div className="text-xs md:text-sm">Hours</div>
              </div>
              <div className="text-2xl md:text-4xl font-bold">:</div>
              <div className="text-center">
                <div className="text-2xl md:text-4xl font-bold">
                  {timeLeft.minutes}
                </div>
                <div className="text-xs md:text-sm">Minutes</div>
              </div>
              <div className="text-2xl md:text-4xl font-bold">:</div>
              <div className="text-center">
                <div className="text-2xl md:text-4xl font-bold">
                  {timeLeft.seconds}
                </div>
                <div className="text-xs md:text-sm">Seconds</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Categories Filter */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex overflow-x-auto pb-4 scrollbar-hide">
          <div className="flex space-x-2 md:space-x-4">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                  activeCategory === category.name
                    ? "bg-rose-600 text-white"
                    : "bg-white text-gray-800 hover:bg-gray-100"
                }`}>
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </motion.div>
      </div>
      <TrendingSec />

      {/* Sale Products */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 md:h-52 object-cover"
                />
                <div className="absolute top-4 right-4 bg-rose-600 text-white text-xs font-bold px-2 py-1 rounded">
                  {product.discount}
                </div>
              </div>
              <div className="p-4 md:p-6">
                <span className="text-xs text-rose-600 font-medium">
                  {product.category}
                </span>
                <h3 className="text-lg md:text-xl font-semibold mt-1 mb-2">
                  {product.name}
                </h3>
                <div className="flex items-center space-x-4">
                  <span className="text-lg md:text-xl font-bold text-rose-600">
                    ₹{product.salePrice.toLocaleString()}
                  </span>
                  <span className="text-sm text-gray-500 line-through">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <Link
                    href={`/products/${product.id}`}
                    className="text-rose-600 hover:text-rose-700 text-sm font-medium flex items-center">
                    View Details <FiArrowRight className="ml-1" />
                  </Link>
                  <button className="bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded-full text-sm flex items-center transition-colors">
                    <FiShoppingBag className="mr-2" /> Add to Bag
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <Whychose />
      {/* <Testimonials /> */}
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-rose-700 to-rose-600 text-white py-12 md:py-16">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Don't Miss This Opportunity!
            </h2>
            <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto">
              Limited time offer on our premium ethnic wear collection. Shop now
              before the sale ends!
            </p>
            <Link
              href="/shop"
              className="inline-block bg-white text-rose-600 hover:bg-gray-100 px-8 py-3 rounded-full font-medium text-lg shadow-lg transition-all hover:scale-105">
              Shop All Sale Items
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SalePage;
