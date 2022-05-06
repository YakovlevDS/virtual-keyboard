import en from './db/en';
import ru from './db/ru';
import init from './init';
import Row from './renderRow';
import Btn from './renderBtn';
import { set } from './db/store';


const renderKeyboard = (bool) => {
  const outputArea = document.querySelector('.field-out__text');
  let isShift = false;
  let isAlt = false;
  let isCtrl = false;
  let isCaps = false;
  const btnPress = {};
  const arrButtons = [];
  const lang = bool ? en : ru;

  const input = document.createElement('div');
  input.classList.add('field-input');
  outputArea.after(input);

  for (let i = 1; i < 6; i += 1) {
    new Row(i).render();
  }
  lang.forEach((i) => {
    let parent;
    const id = i.dataId;
    if (id < 15) { parent = '.row-1'; }
    if (id > 14 && id < 30) { parent = '.row-2'; }
    if (id > 29 && id < 43) { parent = '.row-3'; }
    if (id > 42 && id < 57) { parent = '.row-4'; }
    if (id > 56) { parent = '.row-5'; }

    new Btn(
      id,
      i.sup,
      i.main,
      parent,
      i.code,
      i.isFn,
      i.dataSpec,
      i.dataLetter,
    ).render(bool);
  });

  init();

  const allBtns = document.querySelectorAll('.input__key');

  allBtns.forEach((b) => arrButtons.push({
    divUp: b.children[0],
    divMain: b.children[1],
    divBtn: b,
    id: b.dataset.id,
    code: b.dataset.code,
    isFn: b.dataset.isfn,
    dataSpec: b.dataset.spec,
    big: b.dataset.letter[0],
    small: b.dataset.letter[1],
  }));

  // console.dir(document.querySelectorAll('.input__key')[0].children[0].innerHTML);
  // console.dir(document.querySelectorAll('.input__key')[0].dataset);
  // console.dir(document.querySelector('.input__key'));
  // console.log(arrButtons);

  const upCase = (isUp) => {
    if (isUp) {
      arrButtons.forEach((i) => {
        if (i.divUp) {
          if (isShift) {
            i.divUp.classList.add('up-active');
            i.divMain.classList.add('up-inactive');
          }
        }
        if (!i.isFn && isCaps && !isShift && !i.divUp.innerHTML) {
          i.divMain.innerHTML = i.big;
        } else if (!i.isFn && isCaps && isShift) {
          i.divMain.innerHTML = i.small;
        } else if (!i.isFn && !i.divUp.innerHTML) {
          i.divMain.innerHTML = i.big;
        }
      });
    } else {
      arrButtons.forEach((u) => {
        if (u.divUp.innerHTML && !u.isFn) {
          u.divUp.classList.remove('up-active');
          u.divMain.classList.remove('up-inactive');
          if (!isCaps) {
            u.divMain.innerHTML = u.small;
          } else if (isCaps) {
            u.divMain.innerHTML = u.big;
          }
        } else if (!u.isFn) {
          if (isCaps) {
            u.divMain.innerHTML = u.big;
          } else {
            u.divMain.innerHTML = u.small;
          }
        }
      });
    }
  };
  function switchLang() {
    bool = !bool
    set('langEn', bool);
    console.log(arrButtons);

    arrButtons.forEach((b) => {
      const btn = lang.find((i) => i.code === b.code);
      console.log(btn);

      if (!btn) return;
      b.big = btn.big;
      b.small = btn.small;
      if (btn.big && btn.big.match(/[^a-zA-Zа-яА-ЯёЁ0-9]/g)) {
        b.divUp.innerHTML = btn.big;
      } else {
        b.divUp.innerHTML = '';
      }
      b.divMain.innerHTML = btn.small;
    });
    if (isCaps) upCase(true);
  }
  function clearBtns(target) {
    // console.log(btnPress[target]);
    if (!btnPress[target]) return;
    if (!isCaps) btnPress[target].divBtn.classList.remove('pressed');
    btnPress[target].divBtn.removeEventListener('mouseleave', clearState);
    delete btnPress[target];
  }
  function clearState(ev) {
    // console.log('ok');

    const button = arrButtons.find((i) => i.code === ev.code);
    const { code } = ev.target.dataset;
    if (code === 'ShiftLeft' || code === 'ShiftRight') {
      isShift = false;
      upCase(false);
      button[code].divBtn.classList.remove('pressed');
    }
    if (code === 'ControlLeft' || code === 'ControlRight') { isCtrl = false; }
    if (code === 'AltLeft' || code === 'AltRight') {
      isAlt = false;
    }
    clearBtns(code);
    // if (button[code] && !isCaps) { button[code].divBtn.classList.remove('pressed'); }
    // button[code].divBtn.removeEventListener('mouseleave', clearState);
    outputArea.focus();
  };

  const outPrint = (btn, sml) => {

    let pos = outputArea.selectionStart;
    const x = btn.code
    console.log(x);

    const left = outputArea.value.slice(0, pos);
    const right = outputArea.value.slice(pos);
    // console.log(left);
    // console.log(right);
    const navigationHandle = {
      Tab: () => {
        outputArea.value = `${left}\t${right}`;
        pos += 1;
      },
      ArrowLeft: () => {
        pos = pos - 1 >= 0 ? pos - 1 : 0;
      },
      ArrowRight: () => {
        pos += 1;
      },
      ArrowUp: () => {
        const posLeft = outputArea.value.slice(0, pos).match(/(\n).*$(?!\1)/g) || [
          [1],
        ];
        pos -= posLeft[0].length;
      },
      ArrowDown: () => {
        const posLeft = outputArea.value.slice(pos).match(/^.*(\n).*(?!\1)/) || [
          [1],
        ];
        pos += posLeft[0].length;
      },
      Enter: () => {
        outputArea.value = `${left}\n${right}`;
        pos += 1;
      },
      Delete: () => {
        outputArea.value = `${left}${right.slice(1)}`;
      },
      Backspace: () => {
        outputArea.value = `${left.slice(0, -1)}${right}`;
        pos -= 1;
      },
      Space: () => {
        outputArea.value = `${left} ${right}`;
        pos += 1;
      },
    };
    // console.log(btn.isFn = false);

    if (navigationHandle[x]) {
      // console.log('okk');
      navigationHandle[x]();
    }
    else if (btn.isFn) {
      // console.log('ok');
      pos += 1;
      outputArea.value = `${left}${sml || ''}${right}`;
    }
    outputArea.setSelectionRange(pos, pos);
  };

  const handleKeyboardEvent = (e) => {
    if (e.stopPropagation) e.stopPropagation();
    const btn = arrButtons.find((i) => i.code === e.code);
    if (!btn) return;
    outputArea.focus();
    if (e.type === 'keydown' || e.type === 'mousedown') {
      // console.log(e.code);

      if (!e.type === 'mousedown' && e.type === 'mouseup') { e.preventDefault(); }
      if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
        isShift = true;
      }
      if (isShift) { upCase(true); }
      if (e.code.match(/Control|Alt|Caps/) && (e.repeat)) { return; }
      if (e.code === 'ControlLeft' || e.code === 'ControlRight') { isCtrl = true; }
      if (e.code === 'AltLeft' || e.code === 'AltRight') { isAlt = true; }
      if ((e.code === 'ControlLeft' || e.code === 'ControlRight') && isShift) { switchLang() }
      if ((e.code === 'ShiftLeft' || e.code === 'ShiftRight') && isCtrl) { switchLang() }
      btn.divBtn.classList.add('pressed');

      if (e.code === 'CapsLock' && !isCaps) {
        isCaps = true;
        upCase(true);
      } else if (e.code === 'CapsLock' && isCaps) {
        isCaps = false;
        upCase(false);
        btn.divBtn.classList.remove('pressed');
      }
      if (!isCaps) {
        outPrint(btn, isShift ? btn.big : btn.small);
      } else if (isCaps) {
        if (isShift) {
          outPrint(btn, btn.divUp.innerHTML ? btn.big : btn.small);
        } else {
          outPrint(btn, !btn.divUp.innerHTML ? btn.big : btn.small);
        }
      }
      btnPress[btn.code] = btn;
    } else if (e.type === 'keyup' || e.type === 'mouseup') {
      // console.log('yes', btnPress);
      // console.log(btnPress[btn.code]);
      // ..проверить позже
      clearBtns(btn.code);

      // if (btn.code && !isCaps) { btnPress[btn.code].divBtn.classList.remove('pressed'); }
      // btnPress[btn.code].divBtn.removeEventListener('mouseleave', clearState);

      delete btnPress[btn.code];
      // console.log(btnPress);
    }
    if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
      isShift = false;
      upCase(false);
    }
    if (e.code === 'ControlLeft' || e.code === 'ControlRight') { isCtrl = false; }
    if (e.code === 'AltLeft' || e.code === 'AltRight') { isAlt = false; }
    if (!e.code === 'CapsLock') btn.divBtn.classList.remove('pressed');
  };

  const handleMouseEvent = (e) => {
    e.stopPropagation();
    const targetBtn = e.target.closest('.input__key');
    // console.log({ code: targetBtn.dataset.code, type: e.type });
    if (!targetBtn) return;
    targetBtn.addEventListener('mouseleave', clearState);
    handleKeyboardEvent({ code: targetBtn.dataset.code, type: e.type });
  };

  document.addEventListener('keydown', handleKeyboardEvent);
  document.addEventListener('keyup', handleKeyboardEvent);
  input.onmousedown = handleMouseEvent;
  input.onmouseup = handleMouseEvent;
};
export default renderKeyboard;
