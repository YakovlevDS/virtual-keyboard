export const getRandom = (max, min = 0) => ~~(Math.random() * (max - min + 1)) + min;

export const getRandomArr = (n = 3, len) => {
    let arr = []
    let val
    let l = 0
    while (l < n) {
        val = getRandom(len - 1);
        if (!arr.includes(val)) {
            arr.push(val)
            l++
        }
    }
    return arr
}

export const getNextRandomArr = (prevArr, n = 3, len) => {
    if (prevArr.length > n) { prevArr = prevArr.slice(3, 6) } else {
        console.log('norm ');
    }
    console.log('Value: ', prevArr);
    let temp = []
    let arr = []
    let val
    let l = 0
    arr = prevArr

    while (l < n) {
        val = getRandom(len - 1);
        if (!arr.includes(val)) {
            arr.push(val);
            temp.push(val);
            l++
        }
    }

    return temp
}