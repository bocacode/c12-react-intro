const GrandChild = props => {
	// console.log('props ->', props)

	const birthYear = 2023 - props.age

	return (
		<div>
			I'm GranKid {props.firstName} and I'm from {birthYear} {props.pet}
		</div>
	)
}

function ChildComponent() {
	return (
		<div>
			<h2>Hi I'm child</h2>
			<GrandChild firstName={'Joe'} age={102} pet={'🐢'} />
			<GrandChild firstName={'John'} age={24} pet={'🐶'} />
			<GrandChild firstName={'Rosie'} age={50} pet={'🐞'} />
			<GrandChild firstName={'Little T'} age={4} pet={'🐠'} />
		</div>
	)
}

export default ChildComponent
