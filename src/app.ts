let url: string = "https://v2.jokeapi.dev/joke/Any"
const checkboxes = document.querySelectorAll('.blacklist') as NodeListOf<HTMLInputElement>;
const categories = document.querySelector('#categories') as HTMLDivElement
const theJoke = document.querySelector('#the-joke') as HTMLParagraphElement
const explainJoke = document.querySelector('#explain-joke') as HTMLParagraphElement


const valueStrings: string[] = ["", "nsfw", "religious", "political", "racist", "sexist", "explicit"]
const radioStrings: string[] = ["Any", "Misc", "Programming", "Dark", "Spooky"]
let checkedBlacklist: string[] = []

function filterBlacklist() {
    checkboxes.forEach((checkbox, index) => {
        checkbox.addEventListener("change", e => {
            if (checkbox.checked) {
                if (!checkedBlacklist.includes(valueStrings[index])) {
                    checkedBlacklist.unshift(valueStrings[index]);
                }
            } else {
                checkedBlacklist = checkedBlacklist.filter(blacklisted => blacklisted !== valueStrings[index])
                url = "https://v2.jokeapi.dev/joke/Any"
            }
            let addBlacklistString = checkedBlacklist.join(",")
            url += "?blacklistFlags=" + addBlacklistString
    
            getJoke(url)
        })
    })
}

function radioSelect() {
    categories.innerHTML = radioStrings.map((radio) => 
    `<div>
        <input type="radio" name="radio-value" value="${radio}" id="${radio}">
        <label for="${radio}">${radio}</label>
    </div>`
    ).join(' ')
    
    const radioButtons = document.querySelectorAll('input[name="radio-value"]') as NodeListOf<HTMLInputElement>
    for (const radioButton of radioButtons) {
        radioButton.addEventListener("change", showSelected)
    }
    
    function showSelected(e: Event) {
        const target = e.target as HTMLInputElement;
        if (target.checked) {
            url = `https://v2.jokeapi.dev/joke/${target.value}`     
            getJoke(url)     
        }    
    }
}

async function getJoke(joke: string) {
    const response = await fetch(joke)
    const data = await response.json()
  
    if (data.type === "twopart") {
        theJoke.innerHTML = ""
        explainJoke.innerHTML = ""
        theJoke.append(data.setup)
        explainJoke.append(data.delivery)

        console.log(checkedBlacklist)
        console.log(url);
        console.log(data);
    } 
}

filterBlacklist()
radioSelect()
//Phil
