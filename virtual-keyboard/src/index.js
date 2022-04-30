import part1 from './modules/part1';
import part2 from './modules/part2';
import { en } from './modules/db/en';
part1()
part2()
console.log(' index.js works');
console.log(' index.js works');

let input = document.createElement("div")
input.classList.add('field-input')
document.querySelector('.field-out').after(input)

let row1 = document.createElement("div")
row1.classList.add('row', 'row-1')
document.querySelector('.field-input').append(row1)


class Btn {
    constructor(data_id, sup, main, parent) {
        this.data_id = data_id
        this.sup = sup
        this.main = main
        this.parent = document.querySelector(parent)
    }

    render() {
        let btn = document.createElement("div")
        btn.classList.add('input__key')
        btn.setAttribute("data_id", this.data_id)
        btn.innerHTML = `
            <div class="sup">${this.sup}</div>
            <div class="main">${this.main}</div>
         `
        this.parent.append(btn)
    }


}
console.log(en);

// new Btn("symbol-1", "~", "d", ".row-1").render()
en.map(i => new Btn(i.data_id, i.sup, i.main, ".row-1").render())