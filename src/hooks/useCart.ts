import { useState, useEffect, useMemo } from "react"
import { db } from '../data/db'
import type { CartItem, Guitar } from "../types"

// Custom Hook
// .js file because jsx contains also templates or visuals, a hook should not.
const useCart = () => {
    // Limits of items
    const MAX_ITEMS = 5
    const MIN_ITEMS = 1

    // Initial Cart state in case it has elements already
    const initialCart = () : CartItem[] => {
        const localStorageCart = localStorage.getItem('cart')
        return localStorageCart ? JSON.parse(localStorageCart) : []
    }

    // From local file
    const [data] = useState(db)

    // State for shopping Cart
    const [cart, setCart] = useState(initialCart)

    //Using useEffect instead of LocalStorage to keep cart data
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])


    // Adding guitars to cart
    function addToCart(item : Guitar) {
        //Review if the added item alread exists in the cart
        const itemExists = cart.findIndex(guitar => guitar.id === item.id)
        if (itemExists >= 0) {
            console.log('Item already exist')
            if (cart[itemExists].quantity >= MAX_ITEMS) return

            const updatedCart = [...cart] //Create a copy of the state to not modify it directly (that is a bad practice)
            updatedCart[itemExists].quantity++ //Incremets by one the quantity of items
            setCart(updatedCart) // Using the Hook to update the cart, using immutable function (not modifying th eoriginal state)
        } else {
            console.log('Item doesnt exist... adding it')
            const newItem : CartItem = {...item, quantity : 1}
            setCart(() => [...cart, newItem])
        }

    }

    // Remove from cart
    function removeFromCart(id) {
        console.log("Removing item...")
        setCart(prevCart => prevCart.filter(guitar => guitar.id !== id))
    }

    // Increment Quantity
    function increaseQuantity(id) {
        console.log("Incrementing...")
        const updatedCart = cart.map(item => {
            if (item.id === id && item.quantity < MAX_ITEMS) {
                return {
                    ...item, // To not loose the reference to the  rest of the item
                    quantity: item.quantity + 1
                }
            }
            return item
        })
        setCart(updatedCart)
    }

    // Decrement Quantity
    function decreaseQuantity(id) {
        console.log("Decrementing...")
        const updatedCart = cart.map(item => {
            if (item.id === id && item.quantity > MIN_ITEMS) {
                return {
                    ...item, // To not loose the reference to the  rest of the item
                    quantity: item.quantity - 1
                }
            }
            return item
        })
        setCart(updatedCart)
    }

    // Clear shopping cart
    function clearCart() {
        console.log("Clearing cart...")
        setCart([])
    }

    // Derivated state to review if the cart is empty
    const isEmpty = useMemo(() => cart.length === 0, [cart])

    // Use Reduce to calculate Total
    const cartTotal = useMemo(() => cart.reduce((total, item) => total + (item.quantity * item.price), 0), [cart])

    return {
        data,
        cart,
        addToCart,
        removeFromCart,
        decreaseQuantity,
        increaseQuantity,
        clearCart,
        isEmpty,
        cartTotal
    }

}

export default useCart;