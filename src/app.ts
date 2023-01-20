let url: string = "https://v2.jokeapi.dev/joke/"
let checkboxes = [...document.querySelectorAll('input[type="checkbox"]')] as HTMLInputElement[];
const valueStrings: string[] = ["nsfw", "religious", "political", "racist", "sexist", "explicit"]

checkboxes.forEach(checkbox => {
    checkbox.addEventListener("click", function() {
        let checkboxValues = checkboxes.map(checkbox => checkbox.checked);
        console.log(checkboxValues);
        
        testCheckboxValues(checkboxValues)
    });

    function testCheckboxValues(val: boolean[]) {
        if (val[0] === true) {
            console.log("hej");
        } else if (val[0] === false) {
            console.log("då");
        } 

        if (val[1] === true) {
            console.log("fizz");
        } else if (val[1] === false) {
            console.log("buzz");
        } 

        if (val[2] === true) {
            console.log("kent");
        } else if (val[2] === false) {
            console.log("lars");
        } 
    }
    
});


async function getJoke(joke: string) {
	const response = await fetch(joke)
	const data = await response.json()
	let valueOfCheckbox = 
	url += ""
}

