import React from 'react'
import logo from '../images/logo.svg'
import Card from './Card'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
	<div className="App">
		<div className="App-header">
			<img src={logo} className="App-logo" alt="logo"/>
			<h2>Create React Redux App</h2>
			<h6>- Yingray Lu -</h6>
		</div>

		<br/>

		<Card title="Todo">
			<AddTodo />
			<VisibleTodoList />
			<Footer />
		</Card>

		<br/>

		<Card title="Weather"/>

		<br/>

	</div>
)

export default App
