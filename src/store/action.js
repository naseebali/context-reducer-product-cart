const addToCartAction = (paroduct, state) => {
	const updatedcart = [...state.cart]
	updatedcart.push(paroduct)
	// console.log("action addtocart", updatedcart)
	return { ...state, cart: updatedcart }
}

const removeToCartAction = (paroductId, state) => {
	const updatedCart = [...state.cart]

	const updatedItemIndex = updatedCart.findIndex(
		(item) => item.id === paroductId
	)

	updatedCart.splice(updatedItemIndex, 1)

	// console.log("action updatedCart", updatedCart)

	return { ...state, cart: updatedCart }
}

export { addToCartAction, removeToCartAction }
