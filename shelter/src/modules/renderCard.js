const renderCard = ({ id, name, type, img }) => {
    const sliderWrap = document.querySelector('.slider-wrap')

    const cardBlock = `
<div class="slider-card" data-card=${id}>
   <div class="slider-card__img">
       <img src=${img} alt=${type}>
   </div>
   <div class="slider-card__text">${name}</div>
   <button type="button" class="slider-card__btn">Learn more</button>
</div> `

    sliderWrap.insertAdjacentHTML(
        "beforeend", cardBlock)
}
export default renderCard