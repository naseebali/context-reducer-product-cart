import React from "react"
import MyContext from '../context/ShopContext'
function Cart( props ) {
	const context = React.useContext( MyContext )
	const { cart, removeCartItem } = context

	React.useEffect( () => {
		// console.log( "product", context.cart )
	}, [context] )

	return <React.Fragment>
		{
			cart.map( ( item, index ) => (
				<div key={index} style={{ display: "flex", justifyContent: "space-around" }}>
					<h3>{item.title}</h3>
					<p>{item.price}</p>
					<button
						type="submit"
						onClick={() => removeCartItem( item.id )}
					>Remove From Cart</button>
				</div>
			) )
		}
	</React.Fragment>
}

export default Cart
