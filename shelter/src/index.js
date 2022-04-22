import { getRandom, getRandomArr, getNextRandomArr } from "./modules/random";
import popup from "./modules/popup";
import dataPets from "./modules/db";
import renderSlider from "./modules/renderSlider"
console.log('Value: ', dataPets);

const len = dataPets.length
console.log('Value: ', len);



popup()
    // const t = getRandom(7)
    // const l = getRandomArr(3, len);
    // const s = getNextRandomArr([2, 3, 4], 3, len);
    // console.log('Value: ', s, l, t);
renderSlider()