export default class Row {
  constructor(rowId) {
    this.rowId = rowId;
  }

  render() {
    const row = document.createElement('div');
    row.classList.add('row', `row-${this.rowId}`);
    document.querySelector('.field-input').append(row);
  }
}
