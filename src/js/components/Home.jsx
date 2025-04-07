import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const Home = () => {
	const [userInput, setUserInput] = useState("")
	const [Todo, setTodo] = useState([])

	useEffect(() => {

		getUser()
	
	}, [])

    const addTodoList = async (e) => {
		e.preventDefault();
		let Todo = {label: userInput, is_done: false}
		let response = await fetch('https://playground.4geeks.com/todo/todos/moyunlimited', {
			method: "POST",
			headers: { "Content-type": "application/json" },
			body: JSON.stringify(Todo)
		})
        let data = await response.json()
		getUser()
		setUserInput("")

	};

	const removeTodo = async (X) => {
		let deleteResponse = await fetch("https://playground.4geeks.com/todo/todos/moyunlimited${X}", {
			method: "DELETE",
			headers: { "Content-type": "application/json" },
			// body: JSON.stringify()
		})

	}

	const getUser = async () => {
		let response = await fetch('https://playground.4geeks.com/todo/users/moyunlimited')
		let data = await response.json()
		console.log(data)
		if (typeof data.name != 'undefined') {
			setTodo(data.todos)
			console.log(data.name)
		}
		else {
			let response = await fetch('https://playground.4geeks.com/todo/users/moyunlimited',{
				method: "POST",
                headers: { "Content-type": "application/json" },
    
			})
			let data = await response.json()
			setTodo(data.todos) 
			
		}

	}

    

	return (
		<div className="container mt-5">
			<h1>ToDos</h1>
			<ul>
				<li><input type="text"
					onChange={(e) => setUserInput(e.target.value)}
					value={userInput}
					onKeyDown={(e) => {
						if (e.key == "Enter") {
							addTodoList(e)
						}
					}}
					placeholder="What needs to be done?"></input></li>
				{Todo.map((item, index) => (
					<li>{item.label}
						<span className="" onClick={() => removeTodo(item.id)}>X</span></li>
				))}

			</ul>
			<div className="item">{Todo.length} item left</div>
		</div>
	);
};

export default Home;