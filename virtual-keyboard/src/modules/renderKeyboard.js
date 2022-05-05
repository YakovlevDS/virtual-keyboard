import en from './db/en';
import ru from './db/ru';
import init from './init';
import Row from './renderRow';
import Btn from './renderBtn';

const renderKeyboard = (bool) => {
  let isShift = false;
  let isAlt = false;
  let isCtrl = false;
  let isCaps = false;
  const btnPress = {};
  let arrButtons = [];
  const lang = bool ? en : ru;

  const input = document.createElement('div');
  input.classList.add('field-input');
  document.querySelector('.field-out').after(input);

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

  const allBtns = document.querySelectorAll('.input__key')

  allBtns.forEach(b => arrButtons.push({
    divUp: b.children[0],
    divMain: b.children[1],
    id: b.dataset.id,
    code: b.dataset.code,
    isFn: b.dataset.isfn,
    dataSpec: b.dataset.spec,
    big: b.dataset.letter[0],
    small: b.dataset.letter[1],
  }));

  // console.dir(document.querySelectorAll('.input__key')[0].children[0].innerHTML);
  // console.dir(document.querySelectorAll('.input__key')[0].dataset);

  // arrButtons = arrButtons.push(Array.from(document.querySelectorAll('.input__key')));
  // console.log(arrButtons);

  // const upCase = (isUp) => {
  //   if (isUp) {
  //     arrButtons.forEach((i) => {
  //       console.log(i.down.innerHTML.toUpperCase());

  //       i.down.innerHTML.toUpperCase();
  //       i.upper.classList.add('hide');
  //     });
  //   } else {
  //     arrButtons.forEach((i) => {
  //       i.down.TextContent.toLowerCase();
  //       i.upper.classList.remove('hide');
  //       if (i.sup) {
  //         i.down.classList.add('hide');
  //         i.upper.classList.add('up-active');
  //       }
  //     });
  //   }
  // };

  if (isUp) {
    arrButtons.forEach((i) => {
      if (i.sup) {
        if (isShift) {
          i.upper.classList.add('up-active');
          i.down.classList.add('up-inactive');
        }
      }
      if (!i.isFn && isCaps && !isShift && !i.upper.innerHTML) {
        i.down.TextContent = i.main;
      } else if (!i.isFn && isCaps && isShift) {
        i.down.TextContent = i.sup;
      } else if (!i.isFn && !i.sup.innerHTML) {
        i.down.TextContent = i.main;
      }
    });
  } else {
    arrButtons.forEach((u) => {
      if (u.upper.TextContent && !u.isFn) {
        u.upper.classList.remove('up-active');
        u.down.classList.remove('up-inactive');
        if (!isCaps) {
          u.down.TextContent = u.sup;
        } else if (isCaps) {
          u.down.TextContent = u.main;
        }
      } else if (!u.isFn) {
        if (isCaps) {
          u.down.TextContent = u.main;
        } else {
          u.down.TextContent = u.sup;
        }
      }
    });
  }

  function clearPress(x) {
    if (!btnPress[x]) return;
    if (!isCaps) { btnPress[x].div.classList.remove('pressed'); }

    delete btnPress[x];
  }
  const clearState = (ev) => {
    const { code } = ev.target.dataset;
    if (code === 'Shift') {
      isShift = false;
      upCase(false);
      btnPress[code].div.classList.remove('pressed');
    }
    if (code === 'Control') { isCtrl = false; }
    if (code === 'Alt') {
      isAlt = false;
      clearPress(code);
      document.querySelector('.field-out').focus();
      btnPress[code].div.removeEventListener('mouseleave', clearState);
    }
  };

  const outPrint = (btn, sml) => {
    const out = document.querySelector('.field-out');
    let pos = out.selectionStart;
    const left = out.value.slice(0, pos);
    const right = out.value.slice(pos);

    const navigationHandle = {
      Tab: () => {
        out.value = `${left}\t${right}`;
        pos += 1;
      },
      ArrowLeft: () => {
        pos = pos - 1 >= 0 ? pos - 1 : 0;
      },
      ArrowRight: () => {
        pos += 1;
      },
      ArrowUp: () => {
        const posLeft = out.value.slice(0, pos).match(/(\n).*$(?!\1)/g) || [
          [1],
        ];
        pos -= posLeft[0].length;
      },
      ArrowDown: () => {
        const posLeft = out.value.slice(pos).match(/^.*(\n).*(?!\1)/) || [
          [1],
        ];
        pos += posLeft[0].length;
      },
      Enter: () => {
        out.value = `${left}\n${right}`;
        pos += 1;
      },
      Delete: () => {
        out.value = `${left}${right.slice(1)}`;
      },
      Backspace: () => {
        out.value = `${left.slice(0, -1)}${right}`;
        pos -= 1;
      },
      Space: () => {
        out.value = `${left} ${right}`;
        pos += 1;
      },
    };
    if (navigationHandle[btn.code]) navigationHandle[btn.code]();
    else if (!btn.isFn) {
      pos += 1;
      out.value = `${left}${sml || ''}${right}`;
    }
    out.setSelectionRange(pos, pos);
  };

  const handleKeyboardEvent = (e) => {
    if (e.stopPropagation) e.stopPropagation();
    const btn = arrButtons.find((i) => i.code === e.code);
    if (!btn) return;
    document.querySelector('.field-out').focus();

    if (e.type === 'keydown' || e.type === 'mousedown') {
      if (!e.type === 'mousedown' && e.type === 'mouseup') { e.preventDefault(); }
      if (e.code === 'Shift') { isShift = true; }
      if (isShift) { upCase(true); }
      if ((e.code === 'Control' || e.code === 'Alt' || e.code === 'Caps') && (e.repeat)) { return; }
      if (e.code === 'Control') { isCtrl = true; }
      if (e.code === 'Alt') { isAlt = true; }
      if (e.code === 'Control' && isAlt) {
        // switchLan();
      }
      if (e.code === 'Alt' && isCtrl) {
        //  switchLan();
      }
      btn.div.classList.add('pressed');
      if (e.code === 'Caps' && !isCaps) {
        isCaps = true;
        upCase(true);
      } else if (e.code === 'Caps' && isCaps) {
        isCaps = false;
        upCase(false);
        btn.div.classList.remove('pressed');
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
      btnPress[btn.e.code] = btn;
    } else if (e.type === 'keyup' || e.type === 'mouseup') {
      clearPress(e.code);
      btnPress[e.code].div.removeEventListener('mouseleave', clearState);

      if (e.code === 'Shift') {
        isShift = false;
        upCase(false);
      }
      if (e.code === 'Control') { isCtrl = false; }
      if (e.code === 'Alt') { isAlt = false; }

      if (!e.code === 'Caps') btn.div.classList.remove('pressed');
    }
  };

  const handleMouseEvent = (e) => {
    // console.log(e);
    e.stopPropagation();
    const targetBtn = e.target.closest('.input__key');
    if (!targetBtn) return;
    // const { dataset: { code } } = targetBtn;
    // console.log(targetBtn);

    targetBtn.addEventListener('mouseleave', clearState);
    handleKeyboardEvent({ code: e.code, type: e.type });
  };

  document.addEventListener('keydown', handleKeyboardEvent);
  document.addEventListener('keyup', handleKeyboardEvent);
  document.querySelector('.field-out').addEventListener('onmousedown', handleMouseEvent);
  document.querySelector('.field-out').addEventListener('onmouseup', handleMouseEvent);
  // document.querySelector('.field-out').onmousedown = handleMouseEvent;
  // document.querySelector('.field-out').onmouseup = handleMouseEvent;
};
export default renderKeyboard;
