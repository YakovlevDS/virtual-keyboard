// const init = () => {
// const output = document.querySelector('.field-out');
// const letters = Array.from(document.querySelectorAll(".input__key:not([data-letter=''])"));
// const specs = Array.from(document.querySelectorAll(".input__key:not([data-spec=''])"));
// console.log(output);
// console.log(letters);
// console.log(specs);

// const keydownHandler = (e) => {
//   // console.log(e);
//   const letter = letters.find((i) => i.dataset.letter.includes(e.key));

//   if (letter) {
//     letter.classList.add('pressed');

//     return;
//   }
//   let key = e.key.toLowerCase();
//   if (key === ' ') key = 'space';

//   const ownSpecs = specs.filter((i) => i.dataset.spec === key);

//   if (ownSpecs.length) {
//     ownSpecs.forEach((spec) => {
//       if (spec.dataset.spec === 'shift') {
//         // console.log(spec.dataset.id);

//         if (spec.dataset.id === 43) { spec.classList.add('pressed'); }
//         if (spec.dataset.id === 56) { spec.classList.add('pressed'); }
//       } else if (spec.dataset.spec !== 'capslock') { spec.classList.add('pressed'); } else {
//         spec.classList.toggle('pressed');
//         document.querySelectorAll('.input__key').textContent.toUpperCase();
//       }
//     });
//   }
//   // console.warn("Неизвестный вид клавиши.", e);
// };

// const keyupHandler = (e) => {
//   const letter = letters.find((i) => i.dataset.letter.includes(e.key));
//   if (letter) {
//     letter.classList.remove('pressed');
//     return;
//   }
//   let key = e.key.toLowerCase();
//   if (key === ' ') key = 'space';

//   const ownSpecs = specs.filter((i) => i.dataset.spec === key);
//   if (ownSpecs.length) {
//     ownSpecs.forEach((spec) => {
//       if (spec.dataset.spec !== 'capslock') spec.classList.remove('pressed');
//     });
//   }
// };

// output.addEventListener('keydown', keydownHandler);
//   // output.addEventListener('keyup', keyupHandler);
// };

// export default init;
