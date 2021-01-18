import * as Types from "./types"
import * as Action from "./action"

const { addToCartAction, removeToCartAction } = Action

const { ADD_CART, REMOVE_CART_ITEM } = Types

const products = [
	{ id: "p1", title: "Gaming Mouse", price: 29.99 },
	{ id: "p2", title: "Harry Potter 3", price: 9.99 },
	{ id: "p3", title: "Used plastic bottle", price: 0.99 },
	{ id: "p4", title: "Half-dried plant", price: 2.99 },
]

const initialState = {
	products: products,
	cart: [],
	addToCart: () => {},
	removeCartItem: () => {},
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_CART:
			return addToCartAction(action.paroduct, state)
		case REMOVE_CART_ITEM:
			return removeToCartAction(action.paroductId, state)
		default:
			return state
	}
}
export { reducer as Reducer, initialState, Action, Types }
