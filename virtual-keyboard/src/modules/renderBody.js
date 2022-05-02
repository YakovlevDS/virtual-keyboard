const renderBody = () => {
    const body = document.querySelector('body')
    body.innerHTML = `
    <main>
      <div class="container">
        <h1>Virtual Keyboard</h1>
        <div class="field-out">
            <textarea class="field-out__text" rows="10" cols="100" placeholder="Please start typing ...">
            </textarea>
        </div>
        <div class="field-text">
            <p>The virtual keyboard is able to switch between two language layouts (English + Russian)</p>
            <p>The keyboard was created in the operating system Windows</p>
            <p>To switch the language combination: ctrl + shift</p>
        </div>
      </div>
    </main>
    `

}
export default renderBody