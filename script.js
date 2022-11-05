const clicked = document.querySelectorAll('.card');


function doString(string) {
let selected = string.innerText;
let calc = "Calculator";
const result = calc.localeCompare(selected);
if (result === 0) {
    window.location.href = "https://usmansaeed2001.github.io/odin_calculator/";
}
let form = "Form";
const result2 = form.localeCompare(selected);
if (result2 === 0) {
    window.location.href = "https://usmansaeed2001.github.io/odin_form/";
}

let landing = "LandingPage";
const result3 = landing.localeCompare(selected);
if (result3 === 0) {
    window.location.href = "https://usmansaeed2001.github.io/landing_page/";
}

let rpc = "RockPaperScissors";
const result4 = rpc.localeCompare(selected);
if (result4 === 0) {
    window.location.href = "https://usmansaeed2001.github.io/rockpaperscissors/";
}

}




clicked.forEach(button => {
    button.addEventListener('click', ()=> {
        doString(button.firstElementChild);
    })
})



