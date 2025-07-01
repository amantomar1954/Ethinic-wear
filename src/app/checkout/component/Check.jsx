"use client";
import { useState, useEffect } from 'react';
import Head from 'next/head';

const CheckoutPage = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [isLoading, setIsLoading] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    saveInfo: false,
  });

  const cartItems = [
    {
      id: 1,
      name: 'Silk Banarasi Saree',
      image: '/images/saree1.jpg',
      price: 2499,
      color: 'Red',
      size: 'Free Size',
      quantity: 1,
    },
    {
      id: 2,
      name: 'Embroidered Kurta',
      image: '/images/kurta1.jpg',
      price: 1799,
      color: 'White',
      size: 'L',
      quantity: 1,
    },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 99;
  const total = subtotal + shipping;

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activeStep === 3) {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        setIsLoading(false);
        setOrderPlaced(true);
      }, 1500);
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeStep]);

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-amber-50 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full text-center animate-fade-in">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-amber-800 mb-2">Order Placed Successfully!</h1>
          <p className="text-amber-600 mb-6">Your traditional ethnic wear will arrive in 3-5 business days</p>
          <p className="text-sm text-gray-500 mb-6">Order #ETHNIC{Math.floor(Math.random() * 10000)}</p>
          <button 
            className="w-full py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors duration-300"
            onClick={() => window.location.href = '/'}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Checkout | Traditional Ethnic Wear</title>
        <meta name="description" content="Complete your ethnic wear purchase" />
      </Head>

      <main className="min-h-screen bg-amber-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Checkout Header */}
          <div className="text-center mt-24 mb-8">
            <h1 className="text-3xl font-bold text-amber-800 mb-2">Checkout</h1>
            <p className="text-amber-600">Complete your traditional look with us</p>
          </div>

          {/* Progress Steps */}
          <div className="flex justify-between mb-12 relative">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex flex-col items-center z-10">
                <div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${activeStep >= step ? 'bg-amber-600 text-white' : 'bg-white text-amber-600 border-2 border-amber-600'} transition-colors duration-300`}
                >
                  {step}
                </div>
                <span className={`text-sm mt-2 ${activeStep >= step ? 'text-amber-800 font-medium' : 'text-amber-600'}`}>
                  {step === 1 ? 'Shipping' : step === 2 ? 'Payment' : 'Review'}
                </span>
              </div>
            ))}
            <div className="absolute top-5 left-0 right-0 h-1 bg-amber-200 -z-1">
              <div 
                className="h-full bg-amber-600 transition-all duration-500" 
                style={{ width: `${(activeStep - 1) * 50}%` }}
              ></div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-8">
            {/* Left Column - Form */}
            <div className="lg:w-2/3">
              {activeStep === 1 && (
                <div className="bg-white rounded-xl shadow-md p-6 animate-fade-in">
                  <h2 className="text-xl font-semibold text-amber-800 mb-6">Shipping Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-amber-700 mb-1">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-amber-700 mb-1">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-amber-700 mb-1">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-amber-700 mb-1">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-amber-700 mb-1">Address</label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-amber-700 mb-1">City</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-amber-700 mb-1">State</label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-amber-700 mb-1">ZIP Code</label>
                      <input
                        type="text"
                        name="zip"
                        value={formData.zip}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          name="saveInfo"
                          checked={formData.saveInfo}
                          onChange={handleInputChange}
                          className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-amber-300 rounded"
                        />
                        <span className="ml-2 text-sm text-amber-700">Save this information for next time</span>
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {activeStep === 2 && (
                <div className="bg-white rounded-xl shadow-md p-6 animate-fade-in">
                  <h2 className="text-xl font-semibold text-amber-800 mb-6">Payment Method</h2>
                  <div className="space-y-4">
                    <div 
                      className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 ${paymentMethod === 'credit-card' ? 'border-amber-600 bg-amber-50' : 'border-amber-200 hover:border-amber-400'}`}
                      onClick={() => setPaymentMethod('credit-card')}
                    >
                      <div className="flex items-center">
                        <div className={`w-5 h-5 rounded-full border-2 ${paymentMethod === 'credit-card' ? 'border-amber-600 bg-amber-600' : 'border-amber-300'} mr-3 flex-shrink-0`}></div>
                        <span className="font-medium">Credit/Debit Card</span>
                        <div className="ml-auto flex space-x-2">
                          <div className="w-8 h-5 bg-gray-200 rounded-sm"></div>
                          <div className="w-8 h-5 bg-gray-200 rounded-sm"></div>
                          <div className="w-8 h-5 bg-gray-200 rounded-sm"></div>
                        </div>
                      </div>
                      {paymentMethod === 'credit-card' && (
                        <div className="mt-4 pl-8">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-amber-700 mb-1">Card Number</label>
                              <input
                                type="text"
                                placeholder="1234 5678 9012 3456"
                                className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-amber-700 mb-1">Name on Card</label>
                              <input
                                type="text"
                                placeholder="John Doe"
                                className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-amber-700 mb-1">Expiry Date</label>
                              <input
                                type="text"
                                placeholder="MM/YY"
                                className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-amber-700 mb-1">CVV</label>
                              <input
                                type="text"
                                placeholder="123"
                                className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                              />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    <div 
                      className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 ${paymentMethod === 'upi' ? 'border-amber-600 bg-amber-50' : 'border-amber-200 hover:border-amber-400'}`}
                      onClick={() => setPaymentMethod('upi')}
                    >
                      <div className="flex items-center">
                        <div className={`w-5 h-5 rounded-full border-2 ${paymentMethod === 'upi' ? 'border-amber-600 bg-amber-600' : 'border-amber-300'} mr-3 flex-shrink-0`}></div>
                        <span className="font-medium">UPI Payment</span>
                        <div className="ml-auto w-8 h-5 bg-blue-200 rounded-sm"></div>
                      </div>
                    </div>

                    <div 
                      className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 ${paymentMethod === 'cod' ? 'border-amber-600 bg-amber-50' : 'border-amber-200 hover:border-amber-400'}`}
                      onClick={() => setPaymentMethod('cod')}
                    >
                      <div className="flex items-center">
                        <div className={`w-5 h-5 rounded-full border-2 ${paymentMethod === 'cod' ? 'border-amber-600 bg-amber-600' : 'border-amber-300'} mr-3 flex-shrink-0`}></div>
                        <span className="font-medium">Cash on Delivery</span>
                        <div className="ml-auto w-8 h-5 bg-green-200 rounded-sm"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeStep === 3 && (
                <div className="bg-white rounded-xl shadow-md p-6 animate-fade-in">
                  <h2 className="text-xl font-semibold text-amber-800 mb-6">Review Your Order</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium text-amber-700 mb-2">Shipping Information</h3>
                      <div className="bg-amber-50 p-4 rounded-lg">
                        <p>{formData.firstName} {formData.lastName}</p>
                        <p>{formData.address}</p>
                        <p>{formData.city}, {formData.state} {formData.zip}</p>
                        <p>{formData.email}</p>
                        <p>{formData.phone}</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium text-amber-700 mb-2">Payment Method</h3>
                      <div className="bg-amber-50 p-4 rounded-lg capitalize">
                        {paymentMethod.replace('-', ' ')}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium text-amber-700 mb-2">Order Items</h3>
                      <div className="space-y-4">
                        {cartItems.map((item) => (
                          <div key={item.id} className="flex items-center border-b border-amber-100 pb-4">
                            <div className="w-16 h-16 bg-amber-100 rounded-md overflow-hidden mr-4">
                              <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1">
                              <p className="font-medium">{item.name}</p>
                              <p className="text-sm text-amber-600">{item.color} | {item.size}</p>
                            </div>
                            <div className="text-right">
                              <p className="font-medium">₹{item.price * item.quantity}</p>
                              <p className="text-sm text-amber-600">Qty: {item.quantity}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column - Order Summary */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-xl shadow-md p-6 sticky top-4">
                <h2 className="text-xl font-semibold text-amber-800 mb-6">Order Summary</h2>
                <div className="space-y-4 mb-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between">
                      <span className="text-amber-700">{item.name} × {item.quantity}</span>
                      <span>₹{item.price * item.quantity}</span>
                    </div>
                  ))}
                  <div className="border-t border-amber-100 pt-2"></div>
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>₹{shipping}</span>
                  </div>
                  <div className="border-t border-amber-100 pt-2"></div>
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>₹{total}</span>
                  </div>
                </div>

                <button
                  type="submit"
                  className={`w-full py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center ${isLoading ? 'bg-amber-400' : 'bg-amber-600 hover:bg-amber-700'} text-white shadow-md hover:shadow-lg`}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : activeStep === 3 ? (
                    'Place Order'
                  ) : (
                    'Continue to ' + (activeStep === 1 ? 'Payment' : 'Review')
                  )}
                </button>

                {activeStep > 1 && (
                  <button
                    type="button"
                    onClick={() => setActiveStep(activeStep - 1)}
                    className="w-full mt-3 py-2 text-amber-600 hover:text-amber-800 transition-colors"
                  >
                    ← Back
                  </button>
                )}

                <p className="text-xs text-center text-amber-500 mt-4">
                  <svg className="w-4 h-4 inline-block mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                  Secure Checkout
                </p>
              </div>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default CheckoutPage;