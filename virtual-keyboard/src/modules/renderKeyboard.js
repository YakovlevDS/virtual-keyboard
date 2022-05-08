/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
/* eslint-disable no-console */

import en from './db/en';
import ru from './db/ru';
import Row from './renderRow';
import Btn from './renderBtn';
import { set } from './db/store';

const renderKeyboard = (bool) => {
  const outputArea = document.querySelector('.field-out__text');
  let isShift = false;
  let isCtrl = false;
  let isCaps = false;
  const btnPress = {};
  const arrButtons = [];
  let lang = bool ? en : ru;

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

  const allButtons = document.querySelectorAll('.input__key');

  allButtons.forEach((b) => arrButtons.push({
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
  const upCase = (isUp) => {
    if (isUp) {
      arrButtons.forEach((i) => {
        if (i.divUp.innerHTML) {
          if (!isShift) {
            i.divUp.classList.add('up-active');
            i.divMain.classList.add('up-inactive');
          }
          if (isShift) {
            i.divUp.classList.add('up-active');
            i.divMain.classList.add('up-inactive');
          }
        }
        if (!i.isFn && isCaps && !isShift && !i.divUp.innerHTML) {
          i.divMain.innerHTML = i.big;
          i.divUp.innerHTML = i.small;
        } else if (!i.isFn && isCaps && isShift) {
          i.divMain.innerHTML = i.small;
          i.divUp.innerHTML = i.big;
        } else if (!i.isFn && !i.divUp.innerHTML) {
          i.divMain.innerHTML = i.big;
          i.divUp.innerHTML = i.small;
        }
      });
    } else {
      arrButtons.forEach((u) => {
        u.divUp.classList.remove('up-active');
        u.divMain.classList.remove('up-inactive');
        if (u.divUp.innerHTML && !u.isFn) {
          u.divUp.classList.remove('up-active');
          u.divMain.classList.remove('up-inactive');
          if (!isCaps) {
            u.divMain.innerHTML = u.small;
            u.divUp.innerHTML = u.big;
          } else if (isCaps) {
            u.divMain.innerHTML = u.big;
            u.divUp.innerHTML = u.small;
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
    set('langEn', !bool);
    lang = lang === en ? ru : en;
    arrButtons.forEach((b) => {
      const btn = lang.find((i) => b.code === i.code);
      if (!btn) return;
      b.big = btn.main;
      b.small = btn.sup;
      if (btn.main && btn.sup.match(/[^a-zA-Zа-яА-ЯёЁ0-9]/g)) {
        b.divUp.innerHTML = btn.sup;
      } else {
        b.divUp.innerHTML = '';
      }
      b.divMain.innerHTML = btn.main;
    });
    if (isCaps) upCase(true);
  }
  function clearPressed(item) {
    if (!btnPress[item]) return;
    if (!isCaps) btnPress[item].divBtn.classList.remove('pressed');
    btnPress[item].divBtn.removeEventListener('mouseleave', clearButton);
    delete btnPress[item];
  }
  function clearButton(code) {
    if (code === 'ShiftLeft' || code === 'ShiftRight') {
      isShift = false;
      upCase(false);
      btnPress[code].divBtn.classList.remove('pressed');
    }

    if (code.match(/Control/)) isCtrl = false;
    clearPressed(code);
    outputArea.focus();
  }
  const outPrint = (btn, sml) => {
    let pos = outputArea.selectionStart;
    const x = btn.code;
    const left = outputArea.value.slice(0, pos);
    const right = outputArea.value.slice(pos);
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
        const posLeft = outputArea.value.slice(pos).match(/(\n).*$(?!\1)/g) || [
          [1],
        ];
        pos -= posLeft[0].length - 1;
      },
      ArrowDown: () => {
        const posLeft = outputArea.value.slice(pos).match(/^.*(\n).*(?!\1)/) || [
          [1],
        ];
        pos += posLeft[0].length - 1;
      },
      Enter: () => {
        outputArea.value = `${left}\n${right}`;
        pos += 1;
      },
      Delete: () => {
        document.getSelection().deleteFromDocument();
      },
      Backspace: () => {
        outputArea.value = `${left.slice(0, -1)}${right}`;
        pos -= 1;
      },
      Space: () => {
        outputArea.value = `${left} ${right}`;
        pos += 1;
      },
      CapsLock: () => {
        // outputArea.value = `${left} ${right}`;
      },
    };
    if (navigationHandle[x]) {
      navigationHandle[x]();
    } else if (btn.isFn) {
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
      if (!e.type === 'mousedown' && e.type === 'mouseup') {
        e.preventDefault();
      }
      if ((e.code === 'ShiftLeft' || e.code === 'ShiftRight') && e.type === 'mousedown') isShift = true;

      if (isShift) { upCase(true); }
      if (e.code.match(/Control|Alt|Caps/) && (e.repeat)) { return; }

      if (e.code === 'ControlLeft' || e.code === 'ControlRight') {
        isCtrl = true;
      }
      if ((e.code === 'AltLeft' || e.code === 'AltRight') && isCtrl) {
        switchLang();
      }
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
      clearPressed(btn.code);
    }

    if ((e.code === 'ShiftLeft' || e.code === 'ShiftRight') && e.type === 'keyup') {
      upCase(false);
      isShift = false;
    }
    if (!e.code === 'CapsLock') btn.divBtn.classList.remove('pressed');
  };

  const handleMouseEvent = (e) => {
    e.stopPropagation();
    const targetBtn = e.target.closest('.input__key');
    if (!targetBtn) return;
    if (targetBtn.dataset.code === 'ShiftLeft' || targetBtn.dataset.code === 'ShiftRight') return;
    if (targetBtn.dataset.code === 'AltLeft' || targetBtn.dataset.code === 'AltRight') return;
    if (targetBtn.dataset.code === 'ControlLeft' || targetBtn.dataset.code === 'ControlRight') return;
    if (targetBtn.dataset.code === 'ControlLeft' || targetBtn.dataset.code === 'ControlRight') return;
    if (targetBtn.dataset.code === 'MetaLeft') return;
    console.log('targetBtn:E ', targetBtn.dataset);

    targetBtn.addEventListener('mouseleave', clearButton);
    handleKeyboardEvent({ code: targetBtn.dataset.code, type: e.type });
  };

  document.addEventListener('keydown', handleKeyboardEvent);
  document.addEventListener('keyup', handleKeyboardEvent);
  input.onmousedown = handleMouseEvent;
  input.onmouseup = handleMouseEvent;
};
export default renderKeyboard;
