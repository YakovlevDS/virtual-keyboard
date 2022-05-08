const renderBody = () => {
  const body = document.querySelector('body');
  body.innerHTML = `
    <main >
      <div class="container">
      <div class="text-effect">
          <h1 class="neon" data-text="Virtual-Keyboard" contenteditable>Virtual - Keyboard</h1>
          <div class="gradient"></div>
          <div class="spotlight"></div>
    </div>
        <div class="field-out">
            <textarea class="field-out__text typing3" rows="10" cols="100" ">Please start typing ...
            </textarea>
        </div>
        <div class="field-text">

            <p class="typing">The virtual keyboard is able to switch between two language layouts (English + Russian)</p>
            <p class="typing1">The keyboard was created in the operating system Windows</p>
            <p class="typing2">To switch the language combination: Ctrl + Alt</p>
        </div>
      </div>
    </main>
    `;
};
export default renderBody;
