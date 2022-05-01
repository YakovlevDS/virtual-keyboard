import renderBody from './modules/renderBody';
import renderKeyboard from './modules/renderKeyboard';
import { en } from './modules/db/en';
import { ru } from './modules/db/ru';
let lang = en
renderBody()
renderKeyboard(lang)
const clear = () => {
    document.querySelector('.field-input').remove()
}
const handleTouch = (e) => {
    lang = (e.ctrlKey && e.shiftKey) ? en : ru
    console.log(e.type);

    clear()
    renderKeyboard(lang)

    if (e.type.match(/keydown|mousedown/)) {
        console.log(e.shiftKey);

        if (e.shiftKey) {
            clear()
            renderKeyboard(lang, false)
        }

    } else if (e.type.match(/keyup|mouseup/)) {
        console.log(e.shiftKey);
        if (e.shiftKey) {
            clear()
            renderKeyboard(lang, true)
        }
    }
}


document.addEventListener('keydown', handleTouch);