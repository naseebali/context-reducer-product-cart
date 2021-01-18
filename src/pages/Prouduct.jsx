import React, { useContext } from "react"
import MyContext from '../context/ShopContext'

const Prouduct = ( props ) => {
	const context = useContext( MyContext )
	const { products, addToCart } = context

	React.useEffect( () => {
		// console.log( "product", context )
	}, [context] )

	return (
		<React.Fragment>
			{products.map( ( product, index ) => (
				<div key={index} style={{ display: "flex", justifyContent: "space-around" }}>
					<h3>{product.title}</h3>
					<p>{product.price}</p>
					<button
						type="submit"
						onClick={() => addToCart( product )}
					>Add to Cart</button>
				</div> )
			)}
		</React.Fragment>
	)
}

export default Prouduct
