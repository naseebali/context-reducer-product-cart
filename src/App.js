// import Navbar from "./components/Navbar"
import GlobalState from "./context/GlobalState"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Prouduct from "./pages/Prouduct"
import Cart from "./pages/Cart"
import Layout from "./components/Layout"
function App() {
	return (
		<GlobalState>
			<Router>
				<Switch>
					<Layout>
						<Route path="/products" component={Prouduct} />
						<Route path="/cart" component={Cart} />
					</Layout>
				</Switch>
			</Router>
		</GlobalState>
	)
}

export default App
