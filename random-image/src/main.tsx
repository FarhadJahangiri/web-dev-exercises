import * as React from "react";
import { useState } from "react";
import * as ReactDOM from "react-dom";


const appDiv = document.getElementById("app");

if (!(appDiv instanceof HTMLDivElement)) {
	throw new Error("No div with id 'app' found");
}
function App(){
	const [photo, setPhoto] = useState("");
	const [apiId, setApiId] = useState("22072031-b43ed275c2fcd12c6331efa40");

	const [result, setResult] = useState([]);

	function forChange(event){
		setPhoto(event.target.value);
	}
	
	function forSubmit(event){
		console.log(photo);
		const url = "https://pixabay.com/"
		axios.get(url).then(response => {
			console.log(response);
			setResult(response.data.reslults);
		}
		);
	}
	return(
		<div className="App">
			<h1>Photo Search</h1>
			<input onChange={forChange} type="text" name="photo" placeholder="Search For Photo" />
			<button onClick={forSubmit} type="submit">Search</button>
		</div>
	)
}

ReactDOM.render(<App />, appDiv);
