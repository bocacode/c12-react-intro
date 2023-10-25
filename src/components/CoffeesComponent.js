/***
 * this is Getting props from parent
 */
// function SingleCoffee(props) {
//   return (
//     // <p>{props.title} --+__ {props.description}</p>
//     <p>{props.entireObject.title} --+__ {props.entireObject.description}</p>
//   )
// }

// destructuring the props.entireObject
function SingleCoffee({ entireObject }) {
	return (
		<p>
			{entireObject.title} -whatever in__ {entireObject.description}
		</p>
	)
}

function CoffeesComponent() {
	const coffeesArray = [
		{ id:1, title: 'Americano', description: 'Dark tasty yummy coffee' },
		{ id:2, title: 'Cafecito', description: 'Dark tasty yummy coffee' },
		{ id:3, title: 'Cortadito', description: 'Dark tasty yummy coffee' },
		{ id:4, title: 'Cubano', description: 'Dark tasty yummy coffee' },
		{ id:5, title: 'Capuccino', description: 'Dark tasty yummy coffee' },
		{ id:6, title: 'Latte', description: 'Dark tasty yummy coffee' },
		{ id:7, title: 'Mocha', description: 'Dark tasty yummy coffee' },
		{ id:8, title: 'Expresso', description: 'Dark tasty yummy coffee' },
	]

	return (
		<div>
			<h2>Coffees component here</h2>
			{/* {coffeesArray.map(oneCoffee => {
				return (
					// <SingleCoffee title={oneCoffee.title} description={oneCoffee.description} />
					<SingleCoffee entireObject={oneCoffee} />
				)
			})} */}
			{coffeesArray.map(oneCoffee => <SingleCoffee key={oneCoffee.id} entireObject={oneCoffee} />)}
			<button onClick={() => console.log('hey class we loving REact?')}>get some data </button>
		</div>
	)
}

export default CoffeesComponent
