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
let url = "https://v2.jokeapi.dev/joke/";
let checkboxes = [...document.querySelectorAll('input[type="checkbox"]')];
const valueStrings = ["nsfw", "religious", "political", "racist", "sexist", "explicit"];
checkboxes.forEach(checkbox => {
    checkbox.addEventListener("click", function () {
        let checkboxValues = checkboxes.map(checkbox => checkbox.checked);
        console.log(checkboxValues);
        testCheckboxValues(checkboxValues);
    });
    function testCheckboxValues(val) {
        if (val[0] === true) {
            console.log("sant");
        }
        else if (val[0] === false) {
            console.log("falskt");
        }
        if (val[1] === true) {
            console.log("sant");
        }
        else if (val[1] === false) {
            console.log("falskt");
        }
    }
});
function getJoke(joke) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(joke);
        const data = yield response.json();
        let valueOfCheckbox = url += "";
    });
}
