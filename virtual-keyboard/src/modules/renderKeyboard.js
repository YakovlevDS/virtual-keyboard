import { en } from './db/en';
import { ru } from './db/ru';
import init from './init';

const renderKeyboard = (bool = true, up = false) => {

    let lang = bool ? en : ru

    let input = document.createElement("div")
    input.classList.add('field-input')
    document.querySelector('.field-out').after(input)


    class Row {
        constructor(row_id) {
            this.row_id = row_id
        }
        render() {
            let row = document.createElement("div")
            row.classList.add('row', `row-${this.row_id}`)
            document.querySelector('.field-input').append(row)
        }
    }

    class Btn {
        constructor(data_id,
            data_spec = '',
            data_letter = '',
            sup, main, parent) {
            this.data_id = data_id
            this.data_letter = data_letter
            this.data_spec = data_spec
            this.sup = sup
            this.main = main
            this.parent = document.querySelector(parent)
        }

        render(bool = false) {
            // this.main = bool ? this.main.toUpperCase() : this.main.toLowerCase()
            let btn = document.createElement("div")
            btn.classList.add('input__key')
            btn.setAttribute("data-id", this.data_id)
            btn.setAttribute("data-spec", this.data_spec)
            btn.setAttribute("data-letter", this.data_letter)

            this.data_id === 14 || this.data_id === 30 || this.data_id === 43 ? btn.classList.add('big') : null
            this.data_id === 60 ? btn.classList.add('sp') : null
            this.data_id === 57 || this.data_id === 61 ? btn.classList.add('ctrl') : null
            this.data_id === 15 || this.data_id === 29 ? btn.classList.add('sm') : null
            this.data_id === 61 ? btn.classList.add('fsz') : null
            this.data_id === 42 ? btn.classList.add('enter') : null;
            btn.innerHTML = `
                <div class="sup">${this.sup}</div>
                <div class="main">${this.main}</div>
             `
            this.parent.append(btn);
            const spec = [14, 15, 29, 30, 42, 43, 57, 56, 58, 59, 61, 62]
            if (spec.includes(this.data_id)) {
                btn.querySelector(".main").classList.add('fsz')
            }
        }
    }

    for (let i = 1; i < 6; i++) {
        new Row(i).render()
    }
    lang.map(i => {
        let parent
        if (up) i.main = i.main.toUpperCase()
        const id = i.data_id
        if (id < 15) { parent = ".row-1" }
        if (id < 30 && id > 14) { parent = ".row-2" }
        if (id < 43 && id > 29) { parent = ".row-3" }
        if (id < 57 && id > 42) { parent = ".row-4" }
        if (id > 56) { parent = ".row-5" }
        new Btn(i.data_id,
            i.data_spec,
            i.data_letter,
            i.sup, i.main,
            parent).render(bool)
    })
    init();
}
export default renderKeyboard