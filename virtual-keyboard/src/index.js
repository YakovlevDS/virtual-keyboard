import renderBody from './modules/renderBody';
import renderKeyboard from './modules/renderKeyboard';

let bool = false
renderBody()
renderKeyboard()
init();

const clear = () => {
    document.querySelector('.field-input').remove()
}


// переключение языка 
let flagLan = true
let flagUp = true
document.onkeydown = function(e) {
        console.log(e);

        if (e.key == 'Control') { flagLan = true }
        if (e.key == 'Shift' && flagLan) {
            flagLan = false
            bool = !bool
            clear()
            renderKeyboard(bool)
        }
        if (e.key == 'Shift') { flagUp = true }
        if (e.key == 'Shift') { flagUp = true }
    }
    // =========== отобр на клаве нажатых букв
const input = document.querySelector(".field-input");
const letters = Array.from(document.querySelectorAll("[data-letters]"));
const specs = Array.from(document.querySelectorAll("[data-spec]"));

function init() {
    input.addEventListener("keydown", keydownHandler);
    input.addEventListener("keyup", keyupHandler);

    viewUpdate();
}

function keydownHandler(event) {
    // event.preventDefault();
    const letter = letters.find((x) => x.dataset.letters.includes(event.key));
    if (letter) {
        letter.classList.add("pressed");
        press(event.key);
        return;
    }

    let key = event.key.toLowerCase();

    if (key === " ") {
        key = "space";
        press(" ");
    }

    if (key === "enter") {
        press("\n");
    }

    const ownSpecs = specs.filter((x) => x.dataset.spec === key);

    if (ownSpecs.length) {
        ownSpecs.forEach((spec) => spec.classList.add("pressed"));
        return;
    }

    console.warn("Не известный вид клавиши.", event);
}

function keyupHandler(event) {
    // event.preventDefault();

    const letter = letters.find((x) => x.dataset.letters.includes(event.key));

    if (letter) {
        letter.classList.remove("pressed");

        return;
    }

    let key = event.key.toLowerCase();

    if (key === " ") {
        key = "space";
    }

    const ownSpecs = specs.filter((x) => x.dataset.spec === key);

    if (ownSpecs.length) {
        ownSpecs.forEach((spec) => spec.classList.remove("pressed"));
        return;
    }
}