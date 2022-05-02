import renderKeyboard from './renderKeyboard';
import clear from './clear';
import { bool } from './db/const';

// console.log(bool);

const switchLan = (bool) => {
    let flagLan = true
    document.onkeydown = function(e) {
        if (e.key == 'Control') { flagLan = true }
        if (e.key == 'Shift' && flagLan) {
            flagLan = false
            bool = !bool
            clear()
            renderKeyboard(bool)
        }
    }
}
export default switchLan