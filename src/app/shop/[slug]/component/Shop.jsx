"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
  FiHeart,
  FiShoppingBag,
  FiStar,
  FiChevronRight,
  FiTruck,
  FiRefreshCw,
  FiCheck,
  FiPlus,
  FiMinus,
} from "react-icons/fi";
import products from "../../../data/shop.json";

const ProductDetailPage = () => {
  const { slug } = useParams();
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [pincode, setPincode] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [isBuyingNow, setIsBuyingNow] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // Find product by ID
  const product = products.products.find(
    (item) => String(item.id) === String(slug)
  );

  // Set initial color and size
  useEffect(() => {
    if (product) {
      setSelectedColor(product.colors[0]);
      setSelectedSize(product.sizes[0]);
      setAllProducts(products.products);
    }
  }, [product]);

  // Mock delivery date calculation
  useEffect(() => {
    const date = new Date();
    date.setDate(date.getDate() + 3);
    setDeliveryDate(
      date.toLocaleDateString("en-IN", {
        weekday: "long",
        day: "numeric",
        month: "long",
      })
    );
  }, []);

  const handleAddToCart = () => {
    setIsAddingToCart(true);
    setTimeout(() => {
      setIsAddingToCart(false);
      alert(
        `${product.name} (Size: ${selectedSize}, Color: ${selectedColor}, Qty: ${quantity}) added to cart!`
      );
    }, 1000);
  };

  const handleBuyNow = () => {
    setIsBuyingNow(true);
    setTimeout(() => {
      setIsBuyingNow(false);
      alert(`Proceeding to checkout with ${product.name}`);
    }, 1000);
  };

  const handleCheckPincode = () => {
    if (/^\d{6}$/.test(pincode)) {
      alert(
        `Delivery available to pincode ${pincode}. Expected delivery by ${deliveryDate}`
      );
    } else {
      alert("Please enter a valid 6-digit pincode");
    }
  };

  const toggleWishlist = (productId = null) => {
    if (productId) {
      setWishlist((prev) =>
        prev.includes(productId)
          ? prev.filter((id) => id !== productId)
          : [...prev, productId]
      );
    } else {
      setIsWishlisted(!isWishlisted);
      if (product) {
        setWishlist((prev) =>
          prev.includes(product.id)
            ? prev.filter((id) => id !== product.id)
            : [...prev, product.id]
        );
      }
    }
  };

  const increaseQuantity = () => setQuantity((prev) => Math.min(prev + 1, 10));
  const decreaseQuantity = () => setQuantity((prev) => Math.max(prev - 1, 1));

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Product not found
          </h1>
          <Link href="/" className="text-amber-600 hover:underline font-medium">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  // Filter out current product from recommendations
  const recommendedProducts = allProducts.filter((p) => p.id !== product.id);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-white py-8 px-4">
        <div className="max-w-[1600px] mx-auto">
          <nav className="flex items-center mt-24 sm:mt-20 text-sm mb-4">
            <Link href="/" className="hover:underline flex items-center">
              Home
            </Link>
            <FiChevronRight className="mx-2 w-3 h-3" />
            <Link href="/ethnic-wear" className="hover:underline">
              Ethnic Wear
            </Link>
            <FiChevronRight className="mx-2 w-3 h-3" />
            <span className="text-amber-200">{product.name}</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            {product.name}
          </h1>
          <p className="text-amber-100 max-w-2xl">
            Premium quality ethnic wear with authentic craftsmanship. Perfect
            for weddings, festivals and special occasions.
          </p>
        </div>
      </div>

      {/* Product Detail Section */}
      <div className="max-w-[1600px] mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8 bg-white rounded-lg shadow-md p-6">
          {/* Image Section */}
          <div className="lg:w-2/3">
            <div className="sticky top-4 space-y-4">
              {/* Main Image */}
              <div className="border rounded-lg overflow-hidden mb-4 aspect-square flex items-center justify-center bg-gray-50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full scale-x-150 h-full object-contain"
                />
              </div>

              {/* Thumbnail Images */}
              <div className="grid grid-cols-4 gap-2">
                {[product.image, ...(product.images || [])]
                  .slice(0, 4)
                  .map((img, index) => (
                    <button
                      key={index}
                      className="border rounded overflow-hidden aspect-square bg-gray-100 flex items-center justify-center">
                      <img
                        src={img}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
              </div>

              {/* Share & Wishlist */}
              <div className="flex items-center justify-between border-t pt-4">
                <button
                  onClick={() => toggleWishlist()}
                  className={`flex items-center text-sm ${
                    wishlist.includes(product.id)
                      ? "text-amber-600"
                      : "text-gray-600 hover:text-amber-600"
                  }`}>
                  <FiHeart
                    className={`mr-2 ${
                      wishlist.includes(product.id) ? "fill-current" : ""
                    }`}
                  />
                  {wishlist.includes(product.id)
                    ? "Added to Wishlist"
                    : "Add to Wishlist"}
                </button>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="lg:w-3/5">
            {/* Rating & Reviews */}
            <div className="flex flex-wrap items-center mb-4 gap-2">
              <div className="flex items-center bg-amber-100 text-amber-800 px-2 py-1 rounded mr-3">
                <span className="font-bold mr-1">{product.rating}</span>
                <FiStar className="fill-current" />
              </div>
              <span className="text-gray-600 text-sm">
                {product.reviews} Ratings & {Math.floor(product.reviews / 5)}{" "}
                Reviews
              </span>
              <span className="ml-4 text-green-600 text-sm font-medium flex items-center">
                <FiCheck className="mr-1" />
                In Stock
                {product.isNew && (
                  <span className="ml-3 bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">
                    New Arrival
                  </span>
                )}
              </span>
            </div>

            {/* Price Section */}
            <div className="mb-6">
              <div className="flex items-baseline flex-wrap gap-2">
                <span className="text-3xl font-bold text-gray-900">
                  ₹{product.price.toLocaleString()}
                </span>
                <span className="text-lg text-gray-500 line-through">
                  ₹{product.originalPrice.toLocaleString()}
                </span>
                <span className="text-lg font-medium text-green-600">
                  {product.discount}% OFF
                </span>
              </div>
              <p className="text-sm text-gray-500 mt-1">
                inclusive of all taxes
              </p>
            </div>

            {/* Color Selection */}
            <div className="mb-6">
              <h3 className="font-medium text-lg mb-2">Select Color</h3>
              <div className="flex flex-wrap gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all ${
                      selectedColor === color
                        ? "border-amber-600 ring-2 ring-amber-200"
                        : "border-gray-300 hover:border-amber-300"
                    }`}
                    style={{ backgroundColor: color }}
                    title={color}>
                    {selectedColor === color && (
                      <FiCheck className="text-white text-lg" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium text-lg">Select Size</h3>
                <button className="text-amber-600 text-sm hover:underline">
                  Size Guide
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-32 h-12 flex items-center justify-center border rounded-md text-sm font-medium transition-all ${
                      selectedSize === size
                        ? "border-amber-600 bg-amber-50 text-amber-700"
                        : "border-gray-300 hover:border-amber-300"
                    }`}>
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="mb-6">
              <h3 className="font-medium text-lg mb-2">Quantity</h3>
              <div className="flex items-center border border-gray-300 rounded-md w-fit">
                <button
                  onClick={decreaseQuantity}
                  disabled={quantity <= 1}
                  className={`px-3 py-2 text-lg ${
                    quantity <= 1
                      ? "text-gray-400"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}>
                  <FiMinus />
                </button>
                <span className="px-4 py-2 border-x border-gray-300">
                  {quantity}
                </span>
                <button
                  onClick={increaseQuantity}
                  disabled={quantity >= 10}
                  className={`px-3 py-2 text-lg ${
                    quantity >= 10
                      ? "text-gray-400"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}>
                  <FiPlus />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <button
                onClick={handleAddToCart}
                disabled={isAddingToCart}
                className={`bg-amber-600 hover:bg-amber-700 text-white py-3 px-6 rounded-md font-medium text-lg flex items-center justify-center transition-colors ${
                  isAddingToCart ? "opacity-75" : ""
                }`}>
                {isAddingToCart ? (
                  <>
                    <FiRefreshCw className="animate-spin mr-2" />
                    Adding...
                  </>
                ) : (
                  <>
                    <FiShoppingBag className="mr-2" />
                    Add to Cart
                  </>
                )}
              </button>
              <button
                onClick={handleBuyNow}
                disabled={isBuyingNow}
                className={`bg-amber-500 hover:bg-amber-600 text-white py-3 px-6 rounded-md font-medium text-lg transition-colors ${
                  isBuyingNow ? "opacity-75" : ""
                }`}>
                {isBuyingNow ? "Processing..." : "Buy Now"}
              </button>
            </div>

            {/* Delivery Options */}
            <div className="border border-gray-200 rounded-lg p-4 mb-6">
              <div className="flex items-start mb-3">
                <FiTruck className="text-gray-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-700">Delivery Options</p>
                  <div className="flex items-center mt-1">
                    <input
                      type="text"
                      placeholder="Enter Delivery Pincode"
                      className="border text-black border-gray-300 rounded-l-md px-3 py-2 text-sm w-48 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value)}
                      maxLength="6"
                    />
                    <button
                      onClick={handleCheckPincode}
                      className="bg-yellow-500  text-black hover:bg-gray-200 border border-l-0 border-gray-300 rounded-r-md px-4 py-2 text-sm font-medium transition-colors">
                      Check
                    </button>
                  </div>
                  {deliveryDate && (
                    <p className="text-sm text-gray-600 mt-1">
                      Delivery by {deliveryDate} |{" "}
                      <span className="text-green-600">Free</span>
                    </p>
                  )}
                </div>
              </div>
              <div className="flex items-start">
                <FiRefreshCw className="text-gray-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-700">
                    7 Days Easy Returns
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Change of mind is not applicable
                  </p>
                </div>
              </div>
            </div>

            {/* Product Description */}
            <div className="bg-white rounded-lg p-4">
              <h2 className="text-xl text-[black] font-bold mb-4">
                Product Description
              </h2>
              <p className="mb-4 text-gray-700">
                {product.description ||
                  `This exquisite ${product.name.toLowerCase()} is crafted from premium quality fabric that ensures comfort and durability. The intricate detailing and authentic craftsmanship make it perfect for weddings, festivals, and special occasions.`}
              </p>
              <h3 className="font-medium text-blue-500 mb-2">Key Features:</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-4">
                {product.features && product.features.length > 0 ? (
                  product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))
                ) : (
                  <>
                    <li>Premium quality fabric for maximum comfort</li>
                    <li>Authentic traditional craftsmanship</li>
                    <li>Perfect fit with adjustable features</li>
                    <li>Easy to maintain and wash</li>
                    <li>Elegant packaging included</li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>

        {/* All Products Section */}
        <div className="mt-10">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl text-[black] font-bold">All Products</h2>
            <Link
              href="/ethnic-wear"
              className="text-amber-600 hover:underline">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {allProducts.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <Link href={`/shop/${item.id}`}>
                  <div className="p-4 aspect-square flex items-center justify-center bg-gray-50 relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain"
                    />
                    {item.discount > 0 && (
                      <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                        {item.discount}% OFF
                      </div>
                    )}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        toggleWishlist(item.id);
                      }}
                      className={`absolute top-2 left-2 p-2 rounded-full ${
                        wishlist.includes(item.id)
                          ? "text-red-600"
                          : "text-gray-400 hover:text-red-600"
                      } bg-white shadow-md hover:shadow-lg transition-all`}>
                      <FiHeart
                        className={`${
                          wishlist.includes(item.id) ? "fill-current" : ""
                        }`}
                      />
                    </button>
                    {item.isNew && (
                      <div className="absolute bottom-2 right-2 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
                        NEW
                      </div>
                    )}
                  </div>
                </Link>
                <div className="p-4 border-t">
                  <Link href={`/shop/${item.id}`}>
                    <h3 className="font-medium text-sm mb-1 line-clamp-2 hover:text-amber-600">
                      {item.name}
                    </h3>
                  </Link>
                  <div className="flex items-baseline">
                    <span className="text-sm font-bold text-gray-900 mr-2">
                      ₹{item.price.toLocaleString()}
                    </span>
                    <span className="text-xs text-gray-500 line-through">
                      ₹{item.originalPrice.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-center mt-1">
                    <div className="flex items-center bg-amber-100 text-amber-800 px-1 rounded text-xs mr-2">
                      <span className="font-bold mr-0.5">{item.rating}</span>
                      <FiStar className="fill-current w-3 h-3" />
                    </div>
                    <span className="text-xs text-gray-500">
                      ({Math.floor(item.reviews / 5)})
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
