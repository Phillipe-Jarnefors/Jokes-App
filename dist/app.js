"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let url = "https://v2.jokeapi.dev/joke/Any";
const checkboxes = document.querySelectorAll('.blacklist');
const categories = document.querySelector('#categories');
const theJoke = document.querySelector('#the-joke');
const explainJoke = document.querySelector('#explain-joke');
const valueStrings = ["", "nsfw", "religious", "political", "racist", "sexist", "explicit"];
const radioStrings = ["Any", "Misc", "Programming", "Dark", "Spooky"];
let checkedBlacklist = [];
function filterBlacklist() {
    checkboxes.forEach((checkbox, index) => {
        checkbox.addEventListener("change", e => {
            if (checkbox.checked) {
                if (!checkedBlacklist.includes(valueStrings[index])) {
                    checkedBlacklist.unshift(valueStrings[index]);
                }
            }
            else {
                checkedBlacklist = checkedBlacklist.filter(blacklisted => blacklisted !== valueStrings[index]);
                url = "https://v2.jokeapi.dev/joke/Any";
            }
            let addBlacklistString = checkedBlacklist.join(",");
            url += "?blacklistFlags=" + addBlacklistString;
            getJoke(url);
        });
    });
}
function radioSelect() {
    categories.innerHTML = radioStrings.map((radio) => `<div>
        <input type="radio" name="radio-value" value="${radio}" id="${radio}">
        <label for="${radio}">${radio}</label>
    </div>`).join(' ');
    const radioButtons = document.querySelectorAll('input[name="radio-value"]');
    for (const radioButton of radioButtons) {
        radioButton.addEventListener("change", showSelected);
    }
    function showSelected(e) {
        const target = e.target;
        if (target.checked) {
            url = `https://v2.jokeapi.dev/joke/${target.value}`;
            getJoke(url);
        }
    }
}
function getJoke(joke) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(joke);
        const data = yield response.json();
        if (data.type === "twopart") {
            theJoke.innerHTML = "";
            explainJoke.innerHTML = "";
            theJoke.append(data.setup);
            explainJoke.append(data.delivery);
        }
    });
}
filterBlacklist();
radioSelect();
