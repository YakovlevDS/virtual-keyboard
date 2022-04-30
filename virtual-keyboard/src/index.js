import renderBody from './modules/renderBody';
import renderKeyboard from './modules/renderKeyboard';
import { en } from './modules/db/en';
import { ru } from './modules/db/ru';
let lang = en
renderBody()
renderKeyboard(lang)

const handleTouch = (e) => {
    lang = (e.ctrlKey && e.shiftKey) ? en : ru
    document.querySelector('.field-input').remove()
    renderKeyboard(lang)
}
document.addEventListener('keydown', handleTouch);