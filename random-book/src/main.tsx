import * as React from "react";
import * as ReactDOM from "react-dom";

const appDiv = document.getElementById("app");

if (!(appDiv instanceof HTMLDivElement)) {
	throw new Error("No div with id 'app' found");
}

interface RandomTitleProps {
	titles: string[];
}

function RandomTitle(props: RandomTitleProps) {
    const [title, newTitle] = React.useState("Click For New Title");

    return (
        <main>
            <p>{title}</p>
            <button onClick={() => newTitle(props.titles[Math.floor(Math.random()*props.titles.length)])}>
                New Title
            </button>
        </main>
    );
}

ReactDOM.render(
    <RandomTitle titles={[
		"Anna Karenina",
		"To Kill a Mockingbird",
		"The Great Gatsby",
		"One Hundred Years of Solitude",
		"A Passage to India",
		"Invisible Man",
		"Don Quixote",
		"Beloved",
		"Mrs. Dalloway",
		"Things Fall Apart",
		"Jane Eyre",
		"The Color Purple",
	]} />,
    document.getElementById('app')
);
