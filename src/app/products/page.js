"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { useCart } from "../contexts/CartContext"
import Toast from "../components/Toast"

// Import the JSON data
import productData from "../data/products.json"
import Image from "next/image"
import Image from "next/image"

export default function HomePage() {
  // Extract products from the JSON data
  const products = productData.products;
  
  const [filteredProducts, setFilteredProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState({
    category: "",
    sort: "featured",
  })
  const [toast, setToast] = useState(null)

  const { toggleWishlist, isInWishlist } = useCart()

  useEffect(() => {
    setFilteredProducts(products)
    setLoading(false)
  }, [products])

  // Apply filters and sorting
  useEffect(() => {
    let result = [...products]

    // Category filter
    if (filters.category) {
      result = result.filter((product) => product.category === filters.category)
    }

    // Sorting
    switch (filters.sort) {
      case "price-low":
        result.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        result.sort((a, b) => b.price - a.price)
        break
      case "newest":
        result.sort((a, b) => b.isNew - a.isNew)
        break
      case "discount":
        result.sort((a, b) => b.discount - a.discount)
        break
      default: // featured
        result.sort((a, b) => b.rating - a.rating)
    }

    setFilteredProducts(result)
  }, [filters, products])

  // Rest of your component remains the same...
  const handleCategoryChange = (category) => {
    setFilters((prev) => ({ ...prev, category }))
  }

  const handleWishlistToggle = (productId, productName) => {
    toggleWishlist(productId)
    const isAdding = !isInWishlist(productId)
    setToast({
      message: isAdding ? `${productName} added to wishlist!` : `${productName} removed from wishlist!`,
      type: "success",
    })
  }

  const showToast = (message, type = "success") => {
    setToast({ message, type })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Toast Notification */}
      {toast && <Toast {...toast} onClose={() => setToast(null)} />}

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mt-20 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Punjabi Jutties Collection</h1>
            <p className="text-xl md:text-2xl mb-8 text-red-100">Discover the beauty of traditional Indian fashion</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById("products-section").scrollIntoView({ behavior: "smooth" })}
                className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Shop Now
              </button>
              <button
                onClick={() => document.getElementById("features-section").scrollIntoView({ behavior: "smooth" })}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-all duration-200"
              >
                View Catalog
              </button>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-6" id="products-section">
        {/* Category Tabs */}
        <div className="bg-white p-4 rounded-lg shadow mb-6 overflow-x-auto">
          <div className="flex space-x-4 min-w-max">
            <button
              onClick={() => handleCategoryChange("")}
              className={`px-4 py-2 rounded-md transition-colors ${!filters.category ? "bg-red-600 text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"}`}
            >
              All
            </button>
            <button
              onClick={() => handleCategoryChange("suits")}
              className={`px-4 py-2 rounded-md transition-colors ${filters.category === "suits" ? "bg-red-600 text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"}`}
            >
              Suits
            </button>
            <button
              onClick={() => handleCategoryChange("lehengas")}
              className={`px-4 py-2 rounded-md transition-colors ${filters.category === "lehengas" ? "bg-red-600 text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"}`}
            >
              Lehengas
            </button>
            <button
              onClick={() => handleCategoryChange("kurtis")}
              className={`px-4 py-2 rounded-md transition-colors ${filters.category === "kurtis" ? "bg-red-600 text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"}`}
            >
              Kurtis
            </button>
            <button
              onClick={() => handleCategoryChange("sarees")}
              className={`px-4 py-2 rounded-md transition-colors ${filters.category === "sarees" ? "bg-red-600 text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"}`}
            >
              Sarees
            </button>
          </div>
        </div>

        {/* Sort Options */}
        <div className="bg-white p-4 rounded-lg shadow mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            <span className="text-sm text-gray-600">
              Showing {filteredProducts.length} of {products.length} products
            </span>
          </div>
          <div className="flex items-center w-full sm:w-auto">
            <label htmlFor="sort" className="mr-2 text-sm text-gray-600 whitespace-nowrap">
              Sort by:
            </label>
            <select
              name="sort"
              value={filters.sort}
              onChange={(e) => setFilters((prev) => ({ ...prev, sort: e.target.value }))}
              className="p-2 border border-gray-300 rounded text-sm w-full"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="newest">Newest Arrivals</option>
              <option value="discount">Discount %</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        {!loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <div className="relative">
                  <Link href={`/products/${product.id}`}>
                    <Image
                      width={300}
                      height={300}
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </Link>
                  {product.discount > 0 && (
                    <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                      {product.discount}% OFF
                    </div>
                  )}
                  {product.isNew && (
                    <div className="absolute top-2 left-2 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
                      NEW
                    </div>
                  )}
                  <button
                    onClick={() => handleWishlistToggle(product.id, product.name)}
                    className={`absolute bottom-[-8] right-2 p-2 rounded-full transition-all ${
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
                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className={`w-4 h-4 ${star <= Math.round(product.rating) ? "text-yellow-400" : "text-gray-300"}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-red-600 font-bold">₹{product.price.toLocaleString()}</span>
                      {product.originalPrice > product.price && (
                        <span className="text-gray-500 text-sm line-through ml-2">
                          ₹{product.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                    <Link
                      href={`/products/${product.id}`}
                      className="text-sm font-medium text-red-600 hover:text-red-700 transition-colors"
                    >
                      Quick View
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Features Section */}
        <div className="bg-white rounded-lg shadow mt-12 p-8" id="features-section">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Ethnic Collection?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Premium Quality</h3>
              <p className="text-gray-600">Handpicked fabrics and intricate craftsmanship</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Best Prices</h3>
              <p className="text-gray-600">Competitive pricing with amazing discounts</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Quick and secure delivery to your doorstep</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}