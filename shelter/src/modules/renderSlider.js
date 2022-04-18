import renderCard from "./renderCard"
import { getRandomArr, getNextRandomArr } from "./random"
import dataPets from "./db"

const renderSlider = () => {
    const sliderWrap = document.querySelector('.slider-wrap')
    const arrowRight = document.querySelector('.arrow-right')
    const arrowLeft = document.querySelector('.arrow-left')


    const startSlides = getRandomArr(3)
    sliderWrap.innerHTML = "";
    startSlides.forEach(ind => renderCard(dataPets[ind]))

    arrowRight.addEventListener("click", () => getNextRandomArr(startSlides, 3));

    arrowLeft.addEventListener("click", () => getNextRandomArr(startSlides, 3));

}
export default renderSlider