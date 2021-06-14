import * as React from "react";
import * as ReactDOM from "react-dom";

const appDiv = document.getElementById("app");

if (!(appDiv instanceof HTMLDivElement)) {
	throw new Error("No div with id 'app' found");
}

const toInt = (
	value: string
): number => {
	const result = parseInt(value);
	return isNaN(result) ? 0 : result;
};

function App(){

	const [CelsiusGrad, setCelsius] = React.useState("")
	const [fahrenheitGrad, setFahrenheit] = React.useState("")
	
	const change = (e: React.ChangeEvent<HTMLInputElement>)=>{
		setCelsius((e.target.value));
		setFahrenheit(((toInt(e.target.value) * 9 / 5) + 32).toString());
	}
	const change1 = (e: React.ChangeEvent<HTMLInputElement>)=>{
		setFahrenheit((e.target.value));
		setCelsius(((toInt(e.target.value) - 32) * 5 / 9).toString());
	}

	return (
		<main>
			<input
				type="number"
				value={CelsiusGrad}
				onChange={change}
			/>
			{" = "}
			<input 	
				type="number"
				value={fahrenheitGrad}
				onChange={change1}
			/>	
		</main>
	);
};

ReactDOM.render(<App />, appDiv);
