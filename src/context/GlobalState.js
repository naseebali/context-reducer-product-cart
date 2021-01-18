import React from "react"
import MyContext from "./ShopContext"
import { Reducer, initialState, Types } from "../store/reducer"

function GlobalState({ children }) {
	const [state, dispatch] = React.useReducer(Reducer, initialState)

	const { ADD_CART, REMOVE_CART_ITEM } = Types

	const addToCart = (product) => {
		dispatch({
			type: ADD_CART,
			paroduct: product,
		})
	}

	const removeItem = (productId) => {
		dispatch({
			type: REMOVE_CART_ITEM,
			paroductId: productId,
		})
	}

	return (
		<MyContext.Provider
			value={{
				products: state.products,
				cart: state.cart,
				addToCart: addToCart,
				removeCartItem: removeItem,
			}}
		>
			{children}
		</MyContext.Provider>
	)
}

export default GlobalState
