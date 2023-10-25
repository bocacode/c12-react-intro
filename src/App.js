import './App.css'
import DateComponent from './components/DateComponent'
import ChildComponent from './components/ChildComponent'
import CoffeesComponent from './components/CoffeesComponent'

function App() {
	// all javascript world

	// in return only jsx lives
	return (
		<div className='App'>
			<header className='App-header'>
				<CoffeesComponent />
				<ChildComponent />
				<DateComponent />
			</header>
		</div>
	)
}

export default App
