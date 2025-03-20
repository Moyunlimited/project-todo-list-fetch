import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [userInput, setUserInput] = useState("")
	const [Todo, setTodo] = useState([])
	return (
		<div className="container mt-5">
			<h1>ToDos</h1>
			<ul>
				<li><input type="text"
					onChange={(e) => setUserInput(e.target.value)}
					value={userInput}
					onKeyDown={(e) => {
						if (e.key == "Enter") {setTodo(Todo.concat(userInput));
						setUserInput ("")
						}
					}}
					placeholder="What needs to be done?"></input></li>
				{Todo.map((item, index) => (
					<li>{item}
					<span className="" onClick={() => setTodo(Todo.filter((t, currentIndex) => index != currentIndex))}>X</span></li>
				))}

			</ul>
			<div className="item">{Todo.length} item left</div>
		</div>
	);
};

export default Home;