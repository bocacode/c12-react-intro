function DateComponent() {
	const myDate = new Date()
	const today = myDate.getDate() // calendar day
	const weekday = myDate.getDay() // Week day
	const year = myDate.getFullYear() // full year
	const month = myDate.getMonth() // month
  
	return (
		<div>
			Today is day: {today}
			<br />
			WeekDay: {weekday}
			<br />
			Year: {year}
			<br />
			{`${month}/${today}/${year}`}
		</div>
	)
}

export default DateComponent
