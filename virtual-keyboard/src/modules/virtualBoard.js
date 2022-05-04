const virtualBoard = () => {
  const inputKeys = document.querySelectorAll('.main');
  const outputField = document.querySelector('.field-out__text');

  let str = '';
  let outText = outputField.textContent;

  const changeHandle = () => {
    outText += outputField.textContent;
  };
  const keyClickHandler = (e) => {
    // console.log(e.target.textContent);
    const ev = e.target;
    str += ev.textContent;
    outText = str;
    outputField.textContent = outText;
  };
  outputField.addEventListener('change', changeHandle);
  inputKeys.forEach((i) => i.addEventListener('click', keyClickHandler));
};

export default virtualBoard;
