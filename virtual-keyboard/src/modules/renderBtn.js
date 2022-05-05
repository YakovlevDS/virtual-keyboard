export default class Btn {
  constructor(
    dataId,
    sup,
    main,
    parent,
    сode,
    isFn,
    dataSpec,
    dataLetter,
  ) {
    this.dataId = dataId;
    this.dataLetter = dataLetter;
    this.dataSpec = dataSpec;
    this.sup = sup;
    this.main = main;
    this.сode = сode;
    this.isFn = isFn;
    this.parent = document.querySelector(parent);
  }

  render() {
    // this.main = bool ? this.main.toUpperCase() : this.main.toLowerCase()
    const btn = document.createElement('div');
    btn.classList.add('input__key');
    btn.setAttribute('data-id', this.dataId);
    btn.setAttribute('data-letter', this.dataLetter);
    btn.setAttribute('data-spec', this.dataSpec);
    btn.setAttribute('data-code', this.сode);
    btn.setAttribute('data-isFn', this.isFn);

    if (this.dataId === 14 || this.dataId === 30 || this.dataId === 43) { btn.classList.add('big'); }
    if (this.dataId === 60) { btn.classList.add('sp'); }
    if (this.dataId === 57 || this.dataId === 62) { btn.classList.add('ctrl'); }
    if (this.dataId === 15 || this.dataId === 29) { btn.classList.add('sm'); }
    if (this.dataId === 42) { btn.classList.add('enter'); }
    btn.innerHTML = `
                <div class="upper">${this.sup}</div>
                <div class="down">${this.main}</div>
             `;

    this.parent.append(btn);
    const spec = [14, 15, 29, 30, 42, 43, 57, 56, 58, 59, 61, 62];
    if (spec.includes(this.dataId)) {
      btn.querySelector('.down').classList.add('fsz');
    }
  }
}
