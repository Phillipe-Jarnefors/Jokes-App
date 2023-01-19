let url: string = "https://v2.jokeapi.dev/joke/"
let checkboxes = [...document.querySelectorAll('input[type="checkbox"]')] as HTMLInputElement[]


function isChecked(checkbox: HTMLInputElement): boolean {
	return checkbox.checked
}

checkboxes.forEach(checkbox => {
	checkbox.addEventListener("click", function() {
		console.log(isChecked(checkbox))
		let checkboxValues = checkboxes.map(checkbox => checkbox.checked)
		console.log(checkboxValues)
	})
})




console.log(checkboxValues)





async function getJoke(joke: string) {
	const response = await fetch(joke)
	const data = await response.json()
	let valueOfCheckbox = 
	url += ""
}

