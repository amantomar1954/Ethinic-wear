"use client";

// import Image from "next/image"
// import {
//   ChevronLeft,
//   ChevronRight,
//   Search,
//   ShoppingCart,
//   User,
//   Menu,
//   X,
//   Facebook,
//   Instagram,
//   Twitter,
//   Youtube,
//   Mail,
//   Phone,
//   MapPin,
// } from "lucide-react"
// import { useState } from "react"

// export default function HomePage() {
//   return (
//     <div className="min-h-screen bg-white">
//       {/* Top Banner */}
//       <div className="bg-black text-white text-center py-2 px-4">
//         <p className="text-xs sm:text-sm font-medium tracking-wide">
//           THURSDAY TO SUNSLAY - LAST 4 DAYS | UP TO 75% OFF
//         </p>
//       </div>

//       {/* Header */}
//       <Header />

//       {/* Secondary Navigation */}
//       <SecondaryNav />

//       {/* Promotional Banners */}
//       <PromoBanners />

//       {/* Hero Section */}
//       <HeroSection />

//       {/* Press Logos */}
//       <PressSection />

//       {/* Footer */}
//       <Footer />
//     </div>
//   )
// }

// function Header() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

//   return (
//     <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Mobile menu button */}
//           <button
//             className="md:hidden p-2 hover:bg-gray-100 rounded-md transition-colors"
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           >
//             {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>

//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <div className="text-xl sm:text-2xl font-bold text-black border-2 border-black px-2 sm:px-3 py-1">
//               indya
//             </div>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex space-x-4 lg:space-x-6 xl:space-x-8">
//             <a
//               href="#"
//               className="text-gray-700 hover:text-black text-xs lg:text-sm font-medium transition-colors whitespace-nowrap"
//             >
//               Categories
//             </a>
//             <a
//               href="#"
//               className="text-gray-700 hover:text-black text-xs lg:text-sm font-medium transition-colors whitespace-nowrap"
//             >
//               Women Clothing
//             </a>
//             <a
//               href="#"
//               className="text-gray-700 hover:text-black text-xs lg:text-sm font-medium transition-colors whitespace-nowrap"
//             >
//               Kurta Set
//             </a>
//             <a
//               href="#"
//               className="text-gray-700 hover:text-black text-xs lg:text-sm font-medium transition-colors whitespace-nowrap"
//             >
//               Salwar Kameez
//             </a>
//             <a
//               href="#"
//               className="text-gray-700 hover:text-black text-xs lg:text-sm font-medium transition-colors whitespace-nowrap"
//             >
//               Lehengas
//             </a>
//             <a
//               href="#"
//               className="text-gray-700 hover:text-black text-xs lg:text-sm font-medium transition-colors whitespace-nowrap"
//             >
//               Sarees
//             </a>
//             <a
//               href="#"
//               className="text-gray-700 hover:text-black text-xs lg:text-sm font-medium transition-colors whitespace-nowrap"
//             >
//               Mens
//             </a>
//             <a
//               href="#"
//               className="text-gray-700 hover:text-black text-xs lg:text-sm font-medium transition-colors whitespace-nowrap"
//             >
//               Kids
//             </a>
//             <a
//               href="#"
//               className="text-gray-700 hover:text-black text-xs lg:text-sm font-medium transition-colors whitespace-nowrap"
//             >
//               Jewellery
//             </a>
//             <a
//               href="#"
//               className="text-gray-700 hover:text-black text-xs lg:text-sm font-medium transition-colors whitespace-nowrap"
//             >
//               Blouses
//             </a>
//             <a
//               href="#"
//               className="text-gray-700 hover:text-black text-xs lg:text-sm font-medium transition-colors whitespace-nowrap"
//             >
//               Dupattas
//             </a>
//             <a
//               href="#"
//               className="text-gray-700 hover:text-black text-xs lg:text-sm font-medium transition-colors whitespace-nowrap"
//             >
//               Festivals
//             </a>
//             <a
//               href="#"
//               className="text-gray-700 hover:text-black text-xs lg:text-sm font-medium transition-colors whitespace-nowrap"
//             >
//               Home & Living
//             </a>
//             <a
//               href="#"
//               className="text-gray-700 hover:text-black text-xs lg:text-sm font-medium transition-colors whitespace-nowrap"
//             >
//               Paintings
//             </a>
//             <a
//               href="#"
//               className="text-gray-700 hover:text-black text-xs lg:text-sm font-medium transition-colors whitespace-nowrap"
//             >
//               Statues
//             </a>
//             <a
//               href="#"
//               className="text-gray-700 hover:text-black text-xs lg:text-sm font-medium transition-colors whitespace-nowrap"
//             >
//               Luxe Designers
//             </a>
//             <a
//               href="#"
//               className="text-gray-700 hover:text-black text-xs lg:text-sm font-medium transition-colors whitespace-nowrap"
//             >
//               Made To Order
//             </a>
//           </nav>

//           {/* Right side icons */}
//           <div className="flex items-center space-x-2 sm:space-x-4">
//             <Search className="h-4 w-4 sm:h-5 sm:w-5 text-gray-700 cursor-pointer hover:text-black transition-colors" />
//             <span className="hidden sm:block text-xs lg:text-sm font-medium text-gray-700">$ USD</span>
//             <User className="h-4 w-4 sm:h-5 sm:w-5 text-gray-700 cursor-pointer hover:text-black transition-colors" />
//             <div className="relative">
//               <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5 text-gray-700 cursor-pointer hover:text-black transition-colors" />
//               <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-3 h-3 sm:w-4 sm:h-4 flex items-center justify-center text-xs">
//                 0
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {isMobileMenuOpen && (
//           <div className="md:hidden py-4 border-t border-gray-200 bg-white">
//             <div className="flex flex-col space-y-3 max-h-96 overflow-y-auto">
//               <a
//                 href="#"
//                 className="text-gray-700 hover:text-black text-sm font-medium py-2 px-2 hover:bg-gray-50 rounded transition-colors"
//               >
//                 Categories
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-700 hover:text-black text-sm font-medium py-2 px-2 hover:bg-gray-50 rounded transition-colors"
//               >
//                 Women Clothing
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-700 hover:text-black text-sm font-medium py-2 px-2 hover:bg-gray-50 rounded transition-colors"
//               >
//                 Kurta Set
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-700 hover:text-black text-sm font-medium py-2 px-2 hover:bg-gray-50 rounded transition-colors"
//               >
//                 Salwar Kameez
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-700 hover:text-black text-sm font-medium py-2 px-2 hover:bg-gray-50 rounded transition-colors"
//               >
//                 Lehengas
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-700 hover:text-black text-sm font-medium py-2 px-2 hover:bg-gray-50 rounded transition-colors"
//               >
//                 Sarees
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-700 hover:text-black text-sm font-medium py-2 px-2 hover:bg-gray-50 rounded transition-colors"
//               >
//                 Mens
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-700 hover:text-black text-sm font-medium py-2 px-2 hover:bg-gray-50 rounded transition-colors"
//               >
//                 Kids
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-700 hover:text-black text-sm font-medium py-2 px-2 hover:bg-gray-50 rounded transition-colors"
//               >
//                 Jewellery
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-700 hover:text-black text-sm font-medium py-2 px-2 hover:bg-gray-50 rounded transition-colors"
//               >
//                 Blouses
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-700 hover:text-black text-sm font-medium py-2 px-2 hover:bg-gray-50 rounded transition-colors"
//               >
//                 Dupattas
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-700 hover:text-black text-sm font-medium py-2 px-2 hover:bg-gray-50 rounded transition-colors"
//               >
//                 Festivals
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-700 hover:text-black text-sm font-medium py-2 px-2 hover:bg-gray-50 rounded transition-colors"
//               >
//                 Home & Living
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-700 hover:text-black text-sm font-medium py-2 px-2 hover:bg-gray-50 rounded transition-colors"
//               >
//                 Paintings
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-700 hover:text-black text-sm font-medium py-2 px-2 hover:bg-gray-50 rounded transition-colors"
//               >
//                 Statues
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-700 hover:text-black text-sm font-medium py-2 px-2 hover:bg-gray-50 rounded transition-colors"
//               >
//                 Luxe Designers
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-700 hover:text-black text-sm font-medium py-2 px-2 hover:bg-gray-50 rounded transition-colors"
//               >
//                 Made To Order
//               </a>
//             </div>
//           </div>
//         )}
//       </div>
//     </header>
//   )
// }

// function SecondaryNav() {
//   return (
//     <div className="bg-white py-2 border-b border-gray-100">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between text-xs">
//           <div className="hidden md:flex items-center space-x-2 lg:space-x-4 overflow-x-auto">
//             <a href="#" className="text-red-600 hover:text-red-800 font-medium whitespace-nowrap">
//               Wedding Guide 2025
//             </a>
//             <span className="text-gray-400">|</span>
//             <a href="#" className="text-gray-600 hover:text-gray-800 whitespace-nowrap">
//               Track Order
//             </a>
//             <span className="text-gray-400">|</span>
//             <a href="#" className="text-gray-600 hover:text-gray-800 whitespace-nowrap">
//               Wholesale
//             </a>
//             <span className="text-gray-400">|</span>
//             <a href="#" className="text-red-600 hover:text-red-800 font-medium whitespace-nowrap">
//               Affiliate
//             </a>
//             <span className="text-gray-400">|</span>
//             <a href="#" className="text-gray-600 hover:text-gray-800 whitespace-nowrap">
//               Login
//             </a>
//             <span className="text-gray-400">|</span>
//             <a href="#" className="text-gray-600 hover:text-gray-800 whitespace-nowrap">
//               Sign up
//             </a>
//           </div>
//           <div className="flex items-center space-x-2 ml-auto">
//             <div className="relative">
//               <ShoppingCart className="h-4 w-4 text-gray-600" />
//               <span className="absolute -top-1 -right-1 bg-red-600 text-white rounded-full w-3 h-3 flex items-center justify-center text-xs">
//                 0
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// function PromoBanners() {
//   return (
//     <div className="bg-gray-50 py-3">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 text-center text-xs text-gray-700">
//           <div className="font-medium py-1">ThursYAY to SunSLAY Live | Up to 75% OFF Ends in 4 Days</div>
//           <div className="font-medium py-1">Loved in the US - Indian Fits You'll Crave</div>
//           <div className="font-medium py-1">Selling Fast: Grab the Most Wanted Looks at 70% Off</div>
//         </div>
//       </div>
//     </div>
//   )
// }

// function HeroSection() {
//   return (
//     <div className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 min-h-screen flex items-center overflow-hidden">
//       {/* Decorative background elements */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute top-10 left-10 w-16 h-16 sm:w-32 sm:h-32 border border-gray-300 rounded-full"></div>
//         <div className="absolute top-32 right-20 w-12 h-12 sm:w-24 sm:h-24 border border-gray-300 rounded-full"></div>
//         <div className="absolute bottom-20 left-32 w-8 h-8 sm:w-16 sm:h-16 border border-gray-300 rounded-full"></div>
//         <div className="absolute bottom-32 right-10 w-10 h-10 sm:w-20 sm:h-20 border border-gray-300 rounded-full"></div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[600px] py-8 lg:py-12">
//           {/* Left side - Model Image */}
//           <div className="relative order-2 lg:order-1 flex justify-center">
//             <div className="relative w-full max-w-sm sm:max-w-md h-80 sm:h-96 lg:h-[600px]">
//               <Image
//                 src="/placeholder.svg?height=600&width=400"
//                 alt="Model wearing traditional Indian outfit"
//                 fill
//                 className="object-cover object-center rounded-lg"
//                 priority
//               />
//             </div>
//             {/* Navigation arrows */}
//             <button className="absolute left-2 lg:left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all">
//               <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-gray-700" />
//             </button>
//             <button className="absolute right-2 lg:right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all">
//               <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-gray-700" />
//             </button>
//           </div>

//           {/* Right side - Content */}
//           <div className="text-center lg:text-left order-1 lg:order-2 relative px-4 sm:px-0">
//             {/* Sale badge - positioned absolutely on larger screens */}
//             <div className="absolute -top-4 sm:-top-8 right-4 sm:right-0 lg:right-8 hidden lg:block">
//               <div className="bg-red-600 text-white rounded-full w-16 h-16 sm:w-20 sm:h-20 flex flex-col items-center justify-center text-xs font-bold leading-tight">
//                 <span>28th TO</span>
//                 <span>28th JUNE</span>
//               </div>
//             </div>

//             {/* Mobile sale badge */}
//             <div className="flex justify-center lg:hidden mb-4 sm:mb-6">
//               <div className="bg-red-600 text-white rounded-full w-14 h-14 sm:w-16 sm:h-16 flex flex-col items-center justify-center text-xs font-bold leading-tight">
//                 <span>28th TO</span>
//                 <span>28th JUNE</span>
//               </div>
//             </div>

//             {/* US Flag */}
//             <div className="mb-4 sm:mb-6 flex justify-center lg:justify-start">
//               <div className="w-10 h-6 sm:w-12 sm:h-8 bg-gradient-to-r from-red-500 via-white to-blue-500 border border-gray-300 flex items-center justify-center rounded">
//                 <div className="w-full h-full bg-red-500 relative overflow-hidden rounded">
//                   <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-white to-red-500 opacity-80"></div>
//                   <div className="absolute top-0 left-0 w-4 h-3 sm:w-5 sm:h-4 bg-blue-600"></div>
//                 </div>
//               </div>
//             </div>

//             {/* Main heading */}
//             <div className="mb-6 sm:mb-8">
//               <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2 leading-tight">
//                 <span className="text-red-600">ThursYAY</span>
//                 <span className="text-black italic font-light"> to</span>
//               </h1>
//               <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 leading-tight">
//                 <span className="text-black">Sun</span>
//                 <span className="text-red-600">SLAY</span>
//               </h1>
//               <p className="text-sm sm:text-base lg:text-lg font-bold text-black mb-2 tracking-wide">
//                 BIGGEST DROPS. BEST PRICES. JUST 4 DAYS
//               </p>
//             </div>

//             {/* Discount */}
//             <div className="mb-6 sm:mb-8">
//               <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6">
//                 Up to 75% Off
//               </h2>
//               <div className="space-y-2 text-xs sm:text-sm lg:text-base">
//                 <p className="font-medium">
//                   <span className="text-red-600 font-bold">EXTRA 5%</span>
//                   <span className="text-black"> ON $250 | USE CODE: </span>
//                   <span className="text-red-600 font-bold">WED5</span>
//                 </p>
//                 <p className="font-medium">
//                   <span className="text-red-600 font-bold">EXTRA 10%</span>
//                   <span className="text-black"> ON $400 | USE CODE: </span>
//                   <span className="text-red-600 font-bold">WED10</span>
//                 </p>
//               </div>
//             </div>

//             {/* CTA Button */}
//             <div className="mb-4 sm:mb-6">
//               <button className="bg-black text-white px-6 sm:px-8 lg:px-12 py-3 lg:py-4 text-sm sm:text-base lg:text-lg font-bold hover:bg-gray-800 transition-colors tracking-wide rounded">
//                 SHOP NOW
//               </button>
//             </div>

//             {/* Terms */}
//             <p className="text-xs text-gray-500">*T&C Apply</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// function PressSection() {
//   const logos = ["ELLE", "Forbes", "GRAZIA", "COSMO", "Hindustan Times", "ETIMES"]

//   return (
//     <div className="bg-gray-800 py-6 sm:py-8 lg:py-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-12">
//           {logos.map((logo, index) => (
//             <div key={index} className="flex items-center opacity-60 hover:opacity-80 transition-opacity">
//               <span className="text-white font-bold text-sm sm:text-lg lg:text-xl tracking-wider">{logo}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// function Footer() {
//   return (
//     <footer className="bg-gray-900 text-white">
//       {/* Main Footer Content */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* Company Info */}
//           <div className="space-y-4">
//             <div className="text-xl sm:text-2xl font-bold border-2 border-white px-3 py-1 inline-block">indya</div>
//             <p className="text-gray-300 text-sm leading-relaxed">
//               Discover the latest in Indian fashion, ethnic wear, and traditional clothing. Shop authentic designs
//               crafted with love.
//             </p>
//             <div className="flex space-x-4">
//               <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
//               <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
//               <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
//               <Youtube className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div className="space-y-4">
//             <h3 className="text-lg font-semibold">Quick Links</h3>
//             <ul className="space-y-2 text-sm">
//               <li>
//                 <a href="#" className="text-gray-300 hover:text-white transition-colors">
//                   About Us
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-300 hover:text-white transition-colors">
//                   Contact Us
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-300 hover:text-white transition-colors">
//                   Size Guide
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-300 hover:text-white transition-colors">
//                   Shipping Info
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-300 hover:text-white transition-colors">
//                   Return Policy
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-300 hover:text-white transition-colors">
//                   Track Order
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Categories */}
//           <div className="space-y-4">
//             <h3 className="text-lg font-semibold">Categories</h3>
//             <ul className="space-y-2 text-sm">
//               <li>
//                 <a href="#" className="text-gray-300 hover:text-white transition-colors">
//                   Kurta Sets
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-300 hover:text-white transition-colors">
//                   Lehengas
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-300 hover:text-white transition-colors">
//                   Sarees
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-300 hover:text-white transition-colors">
//                   Salwar Kameez
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-300 hover:text-white transition-colors">
//                   Jewellery
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-300 hover:text-white transition-colors">
//                   Accessories
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div className="space-y-4">
//             <h3 className="text-lg font-semibold">Contact Info</h3>
//             <div className="space-y-3 text-sm">
//               <div className="flex items-start space-x-3">
//                 <MapPin className="h-4 w-4 text-gray-400 mt-1 flex-shrink-0" />
//                 <p className="text-gray-300">
//                   123 Fashion Street,
//                   <br />
//                   New York, NY 10001
//                 </p>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <Phone className="h-4 w-4 text-gray-400 flex-shrink-0" />
//                 <p className="text-gray-300">+1 (555) 123-4567</p>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <Mail className="h-4 w-4 text-gray-400 flex-shrink-0" />
//                 <p className="text-gray-300">support@houseofindya.com</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Newsletter Signup */}
//         <div className="mt-8 sm:mt-12 pt-8 border-t border-gray-700">
//           <div className="max-w-md mx-auto text-center">
//             <h3 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h3>
//             <p className="text-gray-300 text-sm mb-4">Get the latest updates on new arrivals and exclusive offers</p>
//             <div className="flex flex-col sm:flex-row gap-3">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="flex-1 px-4 py-2 bg-gray-800 border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
//               />
//               <button className="bg-red-600 text-white px-6 py-2 rounded font-medium hover:bg-red-700 transition-colors">
//                 Subscribe
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Footer */}
//       <div className="border-t border-gray-700">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
//           <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
//             <div className="text-sm text-gray-400 text-center sm:text-left">
//               © 2024 House of Indya. All rights reserved.
//             </div>
//             <div className="flex flex-wrap justify-center sm:justify-end space-x-6 text-sm">
//               <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                 Privacy Policy
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                 Terms of Service
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                 Cookie Policy
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }

// import React from 'react'
// import HeroSection from './component/Herosection'
// import CategorySection from './component/CategorySection'
// import ProductGrid from './component/Productgrid'
// import Newsletter from './component/Newsletter'
// import DealsSection from './component/Dealssection'
// import HorizontalScrollCards from './component/Horizontalcards'
// const Homepage = () => {

//      const trendingProducts = [
//     {
//       name: 'Printed A-Line Dress',
//       price: '₹1,299',
//       originalPrice: '₹1,999',
//       discount: '35% OFF',
//       image: 'https://www.houseofindya.com/img/product/1.jpg',
//       link: '/product/printed-a-line-dress'
//     },
//     {
//       name: 'Floral Wrap Top',
//       price: '₹899',
//       originalPrice: '₹1,499',
//       discount: '40% OFF',
//       image: 'https://www.houseofindya.com/img/product/2.jpg',
//       link: '/product/floral-wrap-top'
//     },
//     {
//       name: 'Embroidered Palazzo',
//       price: '₹1,099',
//       originalPrice: '₹1,799',
//       discount: '39% OFF',
//       image: 'https://www.houseofindya.com/img/product/3.jpg',
//       link: '/product/embroidered-palazzo'
//     },
//     {
//       name: 'Sequinned Jumpsuit',
//       price: '₹1,599',
//       originalPrice: '₹2,499',
//       discount: '36% OFF',
//       image: 'https://www.houseofindya.com/img/product/4.jpg',
//       link: '/product/sequinned-jumpsuit'
//     },
//     {
//       name: 'Georgette Anarkali',
//       price: '₹1,499',
//       originalPrice: '₹2,199',
//       discount: '32% OFF',
//       image: 'https://www.houseofindya.com/img/product/5.jpg',
//       link: '/product/georgette-anarkali'
//     },
//   ];

//   const newArrivals = [
//     {
//       name: 'Floral Print Maxi Dress',
//       price: '₹1,799',
//       image: 'https://www.houseofindya.com/img/new/1.jpg',
//       link: '/product/floral-print-maxi-dress'
//     },
//     {
//       name: 'Embroidered Crop Top',
//       price: '₹999',
//       image: 'https://www.houseofindya.com/img/new/2.jpg',
//       link: '/product/embroidered-crop-top'
//     },
//     {
//       name: 'Printed Palazzo Set',
//       price: '₹1,899',
//       image: 'https://www.houseofindya.com/img/new/3.jpg',
//       link: '/product/printed-palazzo-set'
//     },
//     {
//       name: 'Sequinned Party Dress',
//       price: '₹2,199',
//       image: 'https://www.houseofindya.com/img/new/4.jpg',
//       link: '/product/sequinned-party-dress'
//     },
//     {
//       name: 'Cotton Printed Kurti',
//       price: '₹899',
//       image: 'https://www.houseofindya.com/img/new/5.jpg',
//       link: '/product/cotton-printed-kurti'
//     },
//   ];

//   return (
//         <>
//         <HeroSection />
//         <HorizontalScrollCards title="NEW ARRIVALS" items={newArrivals} />

//         <CategorySection/>
//         {/* <DealsSection/> */}
//         <ProductGrid title="TRENDING NOW" products={trendingProducts}/>
//         <DealsSection/>
//         <ProductGrid title="NEW ARRIVALS" products={newArrivals}/>
//         <Newsletter/>
//         </>
//   )
// }

// export default Homepage

import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

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
  const collections = [
    {
      id: 1,
      name: "Banarasi Silk Saree",
      price: "₹3,999",
      oldPrice: "₹5,999",
      discount: "30% OFF",
      image:
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 2,
      name: "Kanjivaram Silk Saree",
      price: "₹5,499",
      oldPrice: "₹7,999",
      discount: "25% OFF",
      image:
        "https://images.unsplash.com/photo-1539109136881-3be0616ac5d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 3,
      name: "Bridal Lehenga Choli",
      price: "₹12,999",
      oldPrice: "₹18,999",
      discount: "35% OFF",
      image:
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 4,
      name: "Cotton Printed Kurta",
      price: "₹1,299",
      oldPrice: "₹1,999",
      discount: "35% OFF",
      image:
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 5,
      name: "Chanderi Silk Saree",
      price: "₹4,299",
      oldPrice: "₹6,499",
      discount: "30% OFF",
      image:
        "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 6,
      name: "Designer Lehenga Set",
      price: "₹9,999",
      oldPrice: "₹14,999",
      discount: "33% OFF",
      image:
        "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 7,
      name: "Silk Anarkali Suit",
      price: "₹3,499",
      oldPrice: "₹4,999",
      discount: "30% OFF",
      image:
        "https://images.unsplash.com/photo-1595341595379-cf0ff033ce9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 8,
      name: "Handloom Cotton Saree",
      price: "₹2,199",
      oldPrice: "₹3,299",
      discount: "33% OFF",
      image:
        "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 9,
      name: "Party Wear Gown",
      price: "₹4,999",
      oldPrice: "₹7,499",
      discount: "33% OFF",
      image:
        "https://images.unsplash.com/photo-1539109136881-3be0616ac5d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 10,
      name: "Traditional Sherwani",
      price: "₹8,499",
      oldPrice: "₹12,999",
      discount: "35% OFF",
      image:
        "https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 11,
      name: "Kalamkari Printed Saree",
      price: "₹3,299",
      oldPrice: "₹4,999",
      discount: "34% OFF",
      image:
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 12,
      name: "Designer Blouse Piece",
      price: "₹1,199",
      oldPrice: "₹1,799",
      discount: "33% OFF",
      image:
        "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 13,
      name: "Silk Salwar Suit",
      price: "₹4,799",
      oldPrice: "₹6,999",
      discount: "31% OFF",
      image:
        "https://images.unsplash.com/photo-1595341595379-cf0ff033ce9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 14,
      name: "Cotton Palazzo Set",
      price: "₹1,499",
      oldPrice: "₹2,299",
      discount: "35% OFF",
      image:
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 15,
      name: "Zari Work Lehenga",
      price: "₹11,499",
      oldPrice: "₹16,999",
      discount: "32% OFF",
      image:
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 16,
      name: "Linen Kurta Set",
      price: "₹2,999",
      oldPrice: "₹4,499",
      discount: "33% OFF",
      image:
        "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 17,
      name: "Bandhani Print Saree",
      price: "₹3,799",
      oldPrice: "₹5,699",
      discount: "33% OFF",
      image:
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 18,
      name: "Designer Dupatta",
      price: "₹1,099",
      oldPrice: "₹1,699",
      discount: "35% OFF",
      image:
        "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 19,
      name: "Silk Churidar Set",
      price: "₹4,299",
      oldPrice: "₹6,499",
      discount: "34% OFF",
      image:
        "https://images.unsplash.com/photo-1595341595379-cf0ff033ce9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 20,
      name: "Cotton Kurti with Leggings",
      price: "₹1,299",
      oldPrice: "₹1,999",
      discount: "35% OFF",
      image:
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 21,
      name: "Tussar Silk Saree",
      price: "₹4,999",
      oldPrice: "₹7,499",
      discount: "33% OFF",
      image:
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 22,
      name: "Designer Shawl",
      price: "₹1,599",
      oldPrice: "₹2,399",
      discount: "33% OFF",
      image:
        "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 23,
      name: "Printed Georgette Saree",
      price: "₹3,299",
      oldPrice: "₹4,999",
      discount: "34% OFF",
      image:
        "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 24,
      name: "Embroidered Kurta Set",
      price: "₹2,799",
      oldPrice: "₹4,199",
      discount: "33% OFF",
      image:
        "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 25,
      name: "Silk Blend Saree",
      price: "₹3,899",
      oldPrice: "₹5,899",
      discount: "34% OFF",
      image:
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 26,
      name: "Designer Potli Bag",
      price: "₹899",
      oldPrice: "₹1,399",
      discount: "36% OFF",
      image:
        "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 27,
      name: "Organza Saree",
      price: "₹4,199",
      oldPrice: "₹6,299",
      discount: "33% OFF",
      image:
        "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 28,
      name: "Cotton Dhoti Set",
      price: "₹1,799",
      oldPrice: "₹2,699",
      discount: "33% OFF",
      image:
        "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 29,
      name: "Zardozi Work Lehenga",
      price: "₹13,999",
      oldPrice: "₹19,999",
      discount: "30% OFF",
      image:
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 30,
      name: "Linen Shirt Kurta",
      price: "₹2,499",
      oldPrice: "₹3,799",
      discount: "34% OFF",
      image:
        "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 31,
      name: "Paithani Silk Saree",
      price: "₹6,999",
      oldPrice: "₹9,999",
      discount: "30% OFF",
      image:
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 32,
      name: "Designer Jutti",
      price: "₹1,299",
      oldPrice: "₹1,999",
      discount: "35% OFF",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 33,
      name: "Net Saree with Blouse",
      price: "₹3,599",
      oldPrice: "₹5,399",
      discount: "33% OFF",
      image:
        "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 34,
      name: "Cotton Angrakha Kurta",
      price: "₹2,199",
      oldPrice: "₹3,299",
      discount: "33% OFF",
      image:
        "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 35,
      name: "Silk Blend Lehenga",
      price: "₹8,999",
      oldPrice: "₹12,999",
      discount: "31% OFF",
      image:
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 36,
      name: "Printed Palazzo Suit",
      price: "₹1,899",
      oldPrice: "₹2,899",
      discount: "34% OFF",
      image:
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 37,
      name: "Kashmiri Silk Saree",
      price: "₹5,499",
      oldPrice: "₹7,999",
      discount: "31% OFF",
      image:
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 38,
      name: "Designer Maang Tikka",
      price: "₹699",
      oldPrice: "₹1,099",
      discount: "36% OFF",
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 39,
      name: "Georgette Anarkali",
      price: "₹3,299",
      oldPrice: "₹4,999",
      discount: "34% OFF",
      image:
        "https://images.unsplash.com/photo-1595341595379-cf0ff033ce9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 40,
      name: "Cotton Kurta Pyjama",
      price: "₹1,599",
      oldPrice: "₹2,399",
      discount: "33% OFF",
      image:
        "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
  ];

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
      <section className="relative h-[90vh] bg-gradient-to-r from-rose-100 to-amber-100 flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-rose-800 mb-4 animate-fadeIn">
            Embrace Tradition
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
              <Link href="/products">
                <div
                  key={category.id}
                  className="group cursor-pointer relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition duration-300"
                >
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {collections.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition duration-300 bg-white"
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-64 object-cover transition duration-500 group-hover:scale-105"
                  />
                  {item.discount && (
                    <span className="absolute top-4 right-4 bg-rose-700 text-white px-3 py-1 rounded-full text-sm font-bold">
                      {item.discount}
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <Link href="/shop">
                    <h3 className="font-bold cursor-pointer text-lg text-rose-800">
                      {item.name}
                    </h3>
                  </Link>
                  <div className="flex items-center mt-2">
                    <span className="text-lg font-bold text-rose-700">
                      {item.price}
                    </span>
                    <span className="ml-2 text-sm text-gray-500 line-through">
                      {item.oldPrice}
                    </span>
                  </div>
                  <button className="mt-3 w-full bg-amber-100 hover:bg-amber-200 text-amber-900 py-2 rounded transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
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
                    className="flex-shrink-0 w-[300px] md:w-[350px] relative rounded-xl overflow-hidden shadow-xl"
                  >
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
                className="w-2 h-2 rounded-full bg-rose-300 opacity-50"
              ></div>
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
                className="bg-rose-50 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition"
              >
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
                }`}
              >
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
      <section className="py-16 bg-white">
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
                className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
              >
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
      <section className="py-16 bg-rose-50">
        <div className="container max-w-[1600px] mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-rose-800 mb-12">
            Follow Us on Instagram
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {instaPosts.map((post) => (
              <div
                key={post.id}
                className="relative group overflow-hidden rounded-lg"
              >
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
            <a
              
              className="inline-block bg-rose-700 hover:bg-rose-800 text-white px-6 py-3 rounded-full transition"
            >
              @EthnicWear
            </a>
          </div>
        </div>
      </section>

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
