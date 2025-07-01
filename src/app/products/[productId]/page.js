"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useCart } from "../../contexts/CartContext";
import Toast from "../../components/Toast";
import productData from "../../data/products.json";

export default function ProductPage({ params }) {
  const [product, setProduct] = useState(null);
  const [allProducts, setAllProducts] = useState([]);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [toast, setToast] = useState(null);
  const { addToCart, toggleWishlist, isInWishlist } = useCart();

  useEffect(() => {
    // Get the current product from JSON data
    const loadedProduct = productData.products.find(
      (p) => p.id === Number(params.productId)
    );
    setProduct(loadedProduct);
    if (loadedProduct) {
      setSelectedSize(loadedProduct.sizes?.[0] ?? "");
      setSelectedColor(loadedProduct.colors?.[0] ?? "");
    }

    // Set all products
    setAllProducts(productData.products || []);
  }, [params.productId]);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Loading...</h1>
        </div>
      </div>
    );
  }

  // Filter out current product from recommendations
  const recommendedProducts = allProducts.filter(p => p.id !== product.id);

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      setToast({
        message: "Please select size and color before adding to cart",
        type: "error",
      });
      return;
    }

    addToCart(product, selectedSize, selectedColor);
    setToast({
      message: `${product.name} added to cart!`,
      type: "success",
    });
  };

  const handleBuyNow = () => {
    if (!selectedSize || !selectedColor) {
      setToast({
        message: "Please select size and color before proceeding",
        type: "error",
      });
      return;
    }

    addToCart(product, selectedSize, selectedColor);
    setToast({
      message: "Redirecting to checkout...",
      type: "success",
    });
    setTimeout(() => {
      // Redirect logic would go here
      console.log("Redirecting to checkout...");
    }, 1500);
  };

  const handleWishlistToggle = () => {
    toggleWishlist(product.id);
    const isAdding = !isInWishlist(product.id);
    setToast({
      message: isAdding ? `${product.name} added to wishlist!` : `${product.name} removed from wishlist!`,
      type: "success",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Toast Notification */}
      {toast && <Toast {...toast} onClose={() => setToast(null)} />}

      {/* Breadcrumb */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex mt-24 items-center space-x-4">
              <li>
                <Link href="/" className="text-gray-500 hover:text-gray-700 text-sm font-medium transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                  </svg>
                  <Link
                    href="/products"
                    className="ml-4 text-gray-500 hover:text-gray-700 text-sm font-medium transition-colors"
                  >
                    Products
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                  </svg>
                  <span className="ml-4 text-sm font-medium text-red-600">{product.name}</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </header>

      <main className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Main Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-lg overflow-hidden bg-white shadow-lg">
              <img
                src={product.images[selectedImageIndex] || product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`aspect-square rounded-lg overflow-hidden bg-white shadow cursor-pointer transition-all ${
                    selectedImageIndex === index ? "ring-2 ring-red-500 shadow-lg" : "hover:shadow-lg"
                  }`}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="bg-white rounded-lg shadow p-6 space-y-6">
            {/* Header */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                {product.discount > 0 && (
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {product.discount}% OFF
                  </span>
                )}
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium capitalize">
                  {product.category}
                </span>
                {product.isNew && (
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">NEW</span>
                )}
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>

              {/* Rating */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className={`w-5 h-5 ${star <= Math.round(product.rating) ? "text-yellow-400" : "text-gray-300"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-gray-600">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold text-red-600">₹{product.price.toLocaleString()}</span>
                {product.originalPrice > product.price && (
                  <span className="text-xl text-gray-500 line-through">₹{product.originalPrice.toLocaleString()}</span>
                )}
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Size <span className="text-red-500">*</span>
              </h3>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border-2 rounded-lg font-medium transition-all duration-200 ${
                      selectedSize === size
                        ? "border-red-500 bg-red-50 text-red-700"
                        : "border-gray-200 hover:border-red-400 hover:bg-red-50"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Color <span className="text-red-500">*</span>
              </h3>
              <div className="flex flex-wrap gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 border-2 rounded-lg font-medium capitalize transition-all duration-200 ${
                      selectedColor === color
                        ? "border-red-500 bg-red-50 text-red-700"
                        : "border-gray-200 hover:border-red-400 hover:bg-red-50"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Options Display */}
            {selectedSize && selectedColor && (
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-2">Selected Options:</h4>
                <p className="text-sm text-gray-600">
                  Size: <span className="font-medium">{selectedSize}</span> | Color:{" "}
                  <span className="font-medium capitalize">{selectedColor}</span>
                </p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="space-y-4">
              <div className="flex space-x-4">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-red-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-red-700 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!selectedSize || !selectedColor}
                >
                  Add to Cart
                </button>
                <button
                  onClick={handleWishlistToggle}
                  className={`px-6 py-4 border-2 rounded-lg transition-all duration-200 ${
                    isInWishlist(product.id)
                      ? "border-red-500 bg-red-50 text-red-600"
                      : "border-gray-200 hover:border-red-300 hover:bg-red-50 text-gray-600"
                  }`}
                >
                  <svg
                    className="w-6 h-6"
                    fill={isInWishlist(product.id) ? "currentColor" : "none"}
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
              </div>
              <Link href="/checkout">
              <button
                onClick={handleBuyNow}
                className="w-full cursor-pointer bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 px-6 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!selectedSize || !selectedColor}
              >
                Buy Now
              </button>
              </Link>
            </div>

            {/* Product Info */}
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Care Instructions</h4>
                  <p className="text-gray-600 text-sm">{product.care}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Delivery Time</h4>
                  <p className="text-gray-600 text-sm">{product.delivery}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recommended Products Section */}
        {recommendedProducts.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {recommendedProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow group"
                >
                  <div className="relative">
                    <Link href={`/products/${product.id}`}>
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </Link>
                    {product.discount > 0 && (
                      <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                        {product.discount}% OFF
                      </div>
                    )}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        toggleWishlist(product.id);
                        setToast({
                          message: isInWishlist(product.id)
                            ? `${product.name} removed from wishlist!`
                            : `${product.name} added to wishlist!`,
                          type: "success",
                        });
                      }}
                      className={`absolute top-2 right-2 p-2 rounded-full transition-all ${
                        isInWishlist(product.id)
                          ? "text-red-600 bg-white shadow-md"
                          : "text-gray-400 hover:text-red-600 bg-white shadow-md hover:shadow-lg"
                      }`}
                    >
                      <svg
                        className="w-5 h-5"
                        fill={isInWishlist(product.id) ? "currentColor" : "none"}
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="p-4">
                    <Link href={`/products/${product.id}`}>
                      <h3 className="font-medium text-gray-900 mb-1 hover:text-red-600 transition-colors">
                        {product.name}
                      </h3>
                    </Link>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-red-600 font-bold">₹{product.price.toLocaleString()}</span>
                        {product.originalPrice > product.price && (
                          <span className="text-gray-500 text-sm line-through ml-2">
                            ₹{product.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Back to Home Button */}
        <div className="mt-8 text-center">
          <Link
            href="/products"
            className="inline-flex items-center space-x-2 bg-white text-gray-700 px-6 py-3 rounded-lg border-2 border-gray-200 hover:border-red-300 hover:bg-red-50 transition-all duration-200 shadow hover:shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="font-medium">Back to Products</span>
          </Link>
        </div>
      </main>
    </div>
  );
}