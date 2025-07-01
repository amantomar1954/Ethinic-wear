// "use client";
// import { useState, useEffect } from 'react';
// import Head from 'next/head';

// const CartPage = () => {
//   const [cartItems, setCartItems] = useState([
//     {
//       id: 1,
//       name: 'Silk Banarasi Saree',
//       image: '/images/saree1.jpg',
//       price: 2499,
//       size: 'Free Size',
//       color: 'Red',
//       quantity: 1,
//       inStock: true,
//     },
//     {
//       id: 2,
//       name: 'Embroidered Lehenga',
//       image: '/images/lehenga1.jpg',
//       price: 5499,
//       size: 'M',
//       color: 'Blue',
//       quantity: 1,
//       inStock: true,
//     },
//     {
//       id: 3,
//       name: 'Cotton Kurta Set',
//       image: '/images/kurta1.jpg',
//       price: 1799,
//       size: 'L',
//       color: 'White',
//       quantity: 1,
//       inStock: false,
//     },
//   ]);

//   const [isLoading, setIsLoading] = useState(true);
//   const [couponCode, setCouponCode] = useState('');
//   const [couponApplied, setCouponApplied] = useState(false);
//   const [showSuccess, setShowSuccess] = useState(false);

//   const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
//   const discount = couponApplied ? subtotal * 0.1 : 0; // 10% discount
//   const total = subtotal - discount + 99; // +99 for delivery

//   useEffect(() => {
//     const timer = setTimeout(() => setIsLoading(false), 800);
//     return () => clearTimeout(timer);
//   }, []);

//   const updateQuantity = (id, newQuantity) => {
//     if (newQuantity < 1) return;
//     setCartItems(cartItems.map(item => 
//       item.id === id ? { ...item, quantity: newQuantity } : item
//     ));
//   };

//   const removeItem = (id) => {
//     setCartItems(cartItems.filter(item => item.id !== id));
//   };

//   const applyCoupon = () => {
//     if (couponCode.trim() === '') return;
//     setCouponApplied(true);
//     setShowSuccess(true);
//     setTimeout(() => setShowSuccess(false), 3000);
//   };

//   if (isLoading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-amber-50">
//         <div className="animate-pulse flex space-x-4">
//           <div className="w-12 h-12 bg-amber-200 rounded-full"></div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <>
//       <Head>
//         <title>Your Shopping Cart | EthnicWear</title>
//         <meta name="description" content="Review your ethnic wear selections and proceed to checkout" />
//       </Head>

//       <main className="min-h-screen bg-amber-50 py-8 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-6xl mx-auto">
//           <h1 className="text-3xl font-bold text-amber-800 mb-6 text-center animate-fade-in">
//             Your Shopping Cart
//           </h1>

//           {cartItems.length === 0 ? (
//             <div className="text-center py-12">
//               <div className="text-5xl mb-4">🛒</div>
//               <h2 className="text-2xl font-semibold text-amber-700 mb-2">Your cart is empty</h2>
//               <p className="text-amber-600 mb-6">Discover our beautiful ethnic wear collections</p>
//               <button className="px-6 py-3 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-all duration-300">
//                 Continue Shopping
//               </button>
//             </div>
//           ) : (
//             <div className="flex flex-col lg:flex-row gap-8">
//               {/* Cart Items */}
//               <div className="lg:w-2/3">
//                 <div className="bg-white rounded-lg shadow-md overflow-hidden">
//                   {cartItems.map((item) => (
//                     <div 
//                       key={item.id} 
//                       className={`p-4 border-b border-amber-100 last:border-b-0 flex flex-col sm:flex-row gap-4 transition-all duration-300 ${!item.inStock ? 'opacity-70' : ''}`}
//                     >
//                       <div className="w-full sm:w-32 h-32 bg-amber-50 rounded-md overflow-hidden">
//                         <img 
//                           src={item.image} 
//                           alt={item.name} 
//                           className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//                         />
//                       </div>
//                       <div className="flex-1">
//                         <div className="flex justify-between">
//                           <h3 className="font-medium text-amber-900">{item.name}</h3>
//                           <button 
//                             onClick={() => removeItem(item.id)}
//                             className="text-amber-600 hover:text-amber-800 transition-colors"
//                           >
//                             ✕
//                           </button>
//                         </div>
//                         <p className="text-sm text-amber-600 mt-1">
//                           {item.color} | {item.size}
//                         </p>
//                         {!item.inStock && (
//                           <p className="text-red-500 text-sm mt-1">Out of Stock</p>
//                         )}
//                         <div className="flex items-center justify-between mt-4">
//                           <div className="flex items-center border border-amber-200 rounded-md">
//                             <button 
//                               onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                               className="px-3 py-1 text-amber-600 hover:bg-amber-100 transition-colors"
//                             >
//                               -
//                             </button>
//                             <span className="px-3 py-1">{item.quantity}</span>
//                             <button 
//                               onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                               className="px-3 py-1 text-amber-600 hover:bg-amber-100 transition-colors"
//                             >
//                               +
//                             </button>
//                           </div>
//                           <p className="font-medium text-amber-800">₹{item.price * item.quantity}</p>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Order Summary */}
//               <div className="lg:w-1/3">
//                 <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
//                   <h2 className="text-xl font-semibold text-amber-800 mb-4">Order Summary</h2>
                  
//                   <div className="space-y-3 mb-6">
//                     <div className="flex justify-between">
//                       <span>Subtotal</span>
//                       <span>₹{subtotal}</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span>Delivery</span>
//                       <span>₹99</span>
//                     </div>
//                     {couponApplied && (
//                       <div className="flex justify-between text-green-600">
//                         <span>Discount (10%)</span>
//                         <span>-₹{discount}</span>
//                       </div>
//                     )}
//                     <div className="border-t border-amber-100 pt-3 mt-2 flex justify-between font-medium text-lg">
//                       <span>Total</span>
//                       <span>₹{total}</span>
//                     </div>
//                   </div>

//                   <div className="mb-6">
//                     <label htmlFor="coupon" className="block text-sm font-medium text-amber-700 mb-1">
//                       Coupon Code
//                     </label>
//                     <div className="flex gap-2">
//                       <input
//                         type="text"
//                         id="coupon"
//                         value={couponCode}
//                         onChange={(e) => setCouponCode(e.target.value)}
//                         placeholder="Enter coupon"
//                         className="flex-1 px-3 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
//                       />
//                       <button
//                         onClick={applyCoupon}
//                         disabled={couponApplied}
//                         className={`px-4 py-2 rounded-md transition-colors ${couponApplied ? 'bg-amber-200 text-amber-700' : 'bg-amber-600 text-white hover:bg-amber-700'}`}
//                       >
//                         {couponApplied ? 'Applied' : 'Apply'}
//                       </button>
//                     </div>
//                     {showSuccess && (
//                       <p className="mt-2 text-sm text-green-600 animate-fade-in">
//                         Coupon applied successfully!
//                       </p>
//                     )}
//                   </div>

//                   <button className="w-full py-3 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors duration-300 shadow-md hover:shadow-lg mb-4">
//                     Proceed to Checkout
//                   </button>

//                   <p className="text-xs text-center text-amber-500">
//                     Free returns within 15 days
//                   </p>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </main>
//     </>
//   );
// };

// export default CartPage;



"use client"
import { useState } from "react"
// import { useCart } from "../contexts/CartContext"
import { useCart } from "../../contexts/CartContext"

export default function CartSidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const { items, removeFromCart, updateQuantity, getTotalItems, getTotalPrice, clearCart } = useCart()

  return (
    <>
      {/* Cart Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-8 right-4 bg-red-600 text-white p-1 rounded-full shadow-lg hover:bg-red-700 transition-colors z-100"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5 6m0 0h9m-9 0V19a2 2 0 002 2h7a2 2 0 002-2v-4"
          />
        </svg>
        {getTotalItems() > 0 && (
          <span className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold">
            {getTotalItems()}
          </span>
        )}
      </button>

      {/* Cart Sidebar */}
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b">
                <h2 className="text-lg font-semibold">Shopping Cart ({getTotalItems()})</h2>
                <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700 p-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-4">
                {items.length === 0 ? (
                  <div className="text-center py-8">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5 6m0 0h9m-9 0V19a2 2 0 002 2h7a2 2 0 002-2v-4"
                      />
                    </svg>
                    <p className="text-gray-500 mt-2">Your cart is empty</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {items.map((item, index) => (
                      <div
                        key={`${item.id}-${item.selectedSize}-${item.selectedColor}-${index}`}
                        className="flex items-center space-x-4 bg-gray-50 p-3 rounded-lg"
                      >
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-medium text-gray-900 truncate">{item.name}</h3>
                          <p className="text-xs text-gray-500">
                            Size: {item.selectedSize} | Color: {item.selectedColor}
                          </p>
                          <p className="text-sm font-semibold text-red-600">₹{item.price.toLocaleString()}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.selectedSize, item.selectedColor, item.quantity - 1)
                            }
                            className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
                          >
                            -
                          </button>
                          <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.selectedSize, item.selectedColor, item.quantity + 1)
                            }
                            className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id, item.selectedSize, item.selectedColor)}
                          className="text-red-500 hover:text-red-700 p-1"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              {items.length > 0 && (
                <div className="border-t p-4 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">Total: ₹{getTotalPrice().toLocaleString()}</span>
                    <button onClick={clearCart} className="text-sm text-red-600 hover:text-red-700">
                      Clear Cart
                    </button>
                  </div>
                  <div className="space-y-2">
                    <button className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                      Checkout
                    </button>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="w-full bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                    >
                      Continue Shopping
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
