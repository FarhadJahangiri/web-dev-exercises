import * as React from "react";
import { HashRouter, Switch, Route, Link } from "react-router-dom";
import * as ReactDOM from "react-dom";
import {ProductsList} from './components/ProductsList'
import {Product} from './components/Product'

const appDiv = document.getElementById("app");

if (!(appDiv instanceof HTMLDivElement)) {
	throw new Error("No div with id 'app' found");
}

// TODO: Write your React app ;)
const App = () => <HashRouter>
	<Switch>
		<Route path="/product/:id"><Product/></Route>
		<Route path="/"><ProductsList/></Route>	
	</Switch>
</HashRouter>;

ReactDOM.render(<App />, appDiv);
