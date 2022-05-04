import renderKeyboard from './renderKeyboard';
import clear from './clear';
import { set } from './db/store';

const switchLan = (bool) => {
  let flagLan = true;
  document.onkeydown = (e) => {
    if (e.key === 'Control') { flagLan = true; }
    if (e.key === 'Shift' && flagLan) {
      flagLan = false;
      set('langEn', bool);
      clear();
      renderKeyboard(!bool);
    }
  };
};
export default switchLan;
