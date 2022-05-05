import en from './db/en';
import ru from './db/ru';
import init from './init';
import Row from './renderRow';
import Btn from './renderBtn';

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

  // arrButtons = arrButtons.push(Array.from(document.querySelectorAll('.input__key')));
  // console.log(arrButtons);

  const upCase = (isUp = false) => {
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

  const clearState = (ev) => {
    const button = arrButtons.find((i) => i.code === ev.code);
    const { code } = ev.target.dataset;
    if (code === 'Shift') {
      isShift = false;
      upCase(false);
      button[code].divBtn.classList.remove('pressed');
    }
    if (code === 'Control') { isCtrl = false; }
    if (code === 'Alt') {
      isAlt = false;
      if (button[code] && !isCaps) { button[code].divBtn.classList.remove('pressed'); }

      outputArea.focus();
      button[code].divBtn.removeEventListener('mouseleave', clearState);
    }
  };

  const outPrint = (btn, sml) => {
    // console.log(outputArea);
    let pos = outputArea.selectionStart;
    // console.log(pos);

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
    if (navigationHandle[btn.code]) navigationHandle[btn.code]();
    else if (!btn.isFn) {
      pos += 1;
      outputArea.value = `${left}${sml || ''}${right}`;
    }
    outputArea.setSelectionRange(pos, pos);
  };

  const handleKeyboardEvent = (e) => {
    if (e.stopPropagation) e.stopPropagation();
    const btn = arrButtons.find((i) => i.code === e.code);
    // console.log(arrButtons);

    if (!btn) return;
    outputArea.focus();

    if (e.type === 'keydown' || e.type === 'mousedown') {
      if (!e.type === 'mousedown' && e.type === 'mouseup') { e.preventDefault(); }
      if (e.code === 'Shift') { isShift = true; }
      if (isShift) { upCase(true); }
      if ((e.code === 'Control' || e.code === 'Alt' || e.code === 'Caps') && (e.repeat)) { return; }
      if (e.code === 'Control') { isCtrl = true; }
      if (e.code === 'Alt') { isAlt = true; }
      // if (e.code === 'Control' && isShift) {
      //   switchLan();
      // }
      // if (e.code === 'Shift' && isCtrl) {
      //   switchLan();
      // }
      btn.divBtn.classList.add('pressed');
      if (e.code === 'Caps' && !isCaps) {
        isCaps = true;
        upCase(true);
      } else if (e.code === 'Caps' && isCaps) {
        isCaps = false;
        upCase(false);
        btn.divBtn.classList.remove('pressed');
      }
      if (!isCaps) {
        const symbolIsCaps = isShift ? btn.main : btn.sup;
        outPrint(btn, symbolIsCaps);
      } else if (isCaps) {
        if (isShift) {
          const symbolIsShiht = btn.upper.innerHTML ? btn.main : btn.sup;
          outPrint(btn, symbolIsShiht);
        } else {
          const symbol = !btn.upper.innerHTML ? btn.main : btn.sup;
          outPrint(btn, symbol);
        }
      }
    } else if (e.type === 'keyup' || e.type === 'mouseup') {
      if (btn[e.code] && !isCaps) { btn[e.code].divBtn.classList.remove('pressed'); }
    }

    if (e.code === 'Shift') {
      isShift = false;
      upCase(false);
    }
    if (e.code === 'Control') { isCtrl = false; }
    if (e.code === 'Alt') { isAlt = false; }

    if (!e.code === 'Caps') btn.divBtn.classList.remove('pressed');
  };

  const handleMouseEvent = (e) => {
    e.stopPropagation();
    const targetBtn = e.target.closest('.input__key');
    if (!targetBtn) return;

    targetBtn.addEventListener('mouseleave', clearState);
    handleKeyboardEvent({ code: e.code, type: e.type });
  };

  document.addEventListener('keydown', handleKeyboardEvent);
  document.addEventListener('keyup', handleKeyboardEvent);
  outputArea.addEventListener('onmousedown', handleMouseEvent);
  outputArea.addEventListener('onmouseup', handleMouseEvent);
  outputArea.onmousedown = handleMouseEvent;
  outputArea.onmouseup = handleMouseEvent;
};
export default renderKeyboard;
