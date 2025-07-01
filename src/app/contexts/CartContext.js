"use client"
import { createContext, useContext, useReducer, useEffect } from "react"

const CartContext = createContext()

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItem = state.items.find(
        (item) =>
          item.id === action.payload.id &&
          item.selectedSize === action.payload.selectedSize &&
          item.selectedColor === action.payload.selectedColor,
      )

      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id &&
            item.selectedSize === action.payload.selectedSize &&
            item.selectedColor === action.payload.selectedColor
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        }
      }

      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
      }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter(
          (item) =>
            !(
              item.id === action.payload.id &&
              item.selectedSize === action.payload.selectedSize &&
              item.selectedColor === action.payload.selectedColor
            ),
        ),
      }

    case "UPDATE_QUANTITY":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id &&
          item.selectedSize === action.payload.selectedSize &&
          item.selectedColor === action.payload.selectedColor
            ? { ...item, quantity: action.payload.quantity }
            : item,
        ),
      }

    case "CLEAR_CART":
      return {
        ...state,
        items: [],
      }

    case "TOGGLE_WISHLIST":
      const isInWishlist = state.wishlist.includes(action.payload)
      return {
        ...state,
        wishlist: isInWishlist
          ? state.wishlist.filter((id) => id !== action.payload)
          : [...state.wishlist, action.payload],
      }

    case "LOAD_CART":
      return action.payload

    default:
      return state
  }
}

const initialState = {
  items: [],
  wishlist: [],
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cart")
    if (savedCart) {
      dispatch({ type: "LOAD_CART", payload: JSON.parse(savedCart) })
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state))
  }, [state])

  const addToCart = (product, selectedSize, selectedColor) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...product,
        selectedSize,
        selectedColor,
      },
    })
  }

  const removeFromCart = (id, selectedSize, selectedColor) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: { id, selectedSize, selectedColor },
    })
  }

  const updateQuantity = (id, selectedSize, selectedColor, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id, selectedSize, selectedColor)
    } else {
      dispatch({
        type: "UPDATE_QUANTITY",
        payload: { id, selectedSize, selectedColor, quantity },
      })
    }
  }

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" })
  }

  const toggleWishlist = (productId) => {
    dispatch({ type: "TOGGLE_WISHLIST", payload: productId })
  }

  const getTotalItems = () => {
    return state.items.reduce((total, item) => total + item.quantity, 0)
  }

  const getTotalPrice = () => {
    return state.items.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const isInWishlist = (productId) => {
    return state.wishlist.includes(productId)
  }

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        toggleWishlist,
        getTotalItems,
        getTotalPrice,
        isInWishlist,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
