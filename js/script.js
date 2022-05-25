const button = document.querySelector("div#button");
const background = document.querySelector("body");
let toggleOn = true;

button.addEventListener("click", function() {
    background.classList.toggle('theme');

    if (toggleOn) {
        toggleOn = false;
        button.classList.remove('animar2');
        return button.classList.add('animar1');
    }

    toggleOn = true;
    button.classList.remove('animar1');
    return button.classList.add('animar2');

})