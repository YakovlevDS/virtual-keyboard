const dataPets = [{
        'id': 0,
        "name": "Jennifer",
        "img": "../../assets/images/pets-jennifer.png",
        "type": "Dog",
        "breed": "Labrador",
        "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        "age": "2 months",
        "inoculations": ["none"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        'id': 1,
        "name": "Sophia",
        "img": "../../assets/images/pets-sophia.png",
        "type": "Dog",
        "breed": "Shih tzu",
        "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
        "age": "1 month",
        "inoculations": ["parvovirus"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        'id': 2,
        "name": "Woody",
        "img": "../../assets/images/pets-woody.png",
        "type": "Dog",
        "breed": "Golden Retriever",
        "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
        "age": "3 years 6 months",
        "inoculations": ["adenovirus", " distemper"],
        "diseases": ["right back leg mobility reduced"],
        "parasites": ["none"]
    },
    {
        'id': 3,
        "name": "Scarlett",
        "img": "../../assets/images/pets-scarlett.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
        "age": "3 months",
        "inoculations": ["parainflu -enza"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        'id': 4,
        "name": "Katrine",
        "img": "../../assets/images/pets-katrine.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        "age": "6 months",
        "inoculations": ["panleuko- penia"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        'id': 5,
        "name": "Timmy",
        "img": "../../assets/images/pets-timmy.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
        "age": "2 years 3 months",
        "inoculations": ["calicivirus", " viral rhinotracheitis"],
        "diseases": ["kidney stones"],
        "parasites": ["none"]
    },
    {
        'id': 6,
        "name": "Freddie",
        "img": "../../assets/images/pets-freddie.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
        "age": "2 months",
        "inoculations": ["rabies"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        'id': 7,
        "name": "Charly",
        "img": "../../assets/images/pets-charly.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        "age": "8 years",
        "inoculations": ["bordetella bronchiseptica", "  leptospirosis"],
        "diseases": ["deafness", " blindness"],
        "parasites": ["lice", "fleas"]
    }
]
let petCards
const closePop = document.querySelectorAll('.close')
const overlayPopup = document.querySelector('.popup-overlay')
const petPopup = document.querySelector('.popup-card')
const wrapPopup = document.querySelector('.wrap-popup')
const body = document.body;


// ---------------
const sliderWrap = document.querySelector('.slider-wrap')
const arrows = document.querySelectorAll('.arrow')

// const addIdDataPets = () => dataPets.forEach((pet, ind) => pet.id = ind)
// addIdDataPets()
const len = dataPets.length;

const getRandom = (max, min = 0) => ~~(Math.random() * (max - min + 1)) + min;

const getRandomArr = (n = 3) => {
    let arr = []
    let val
    let l = 0
    while (l < n) {
        val = getRandom(len - 1)
        if (!arr.includes(val)) {
            arr.push(val)
            l++
        }
    }
    return arr
}

const getNextRandomArr = (prevArr, n = 3) => {
    let nextArr = []
    let l = 0
    while (l < n) {
        let val = getRandom(len - 1)
        if (!prevArr.includes(val) && !nextArr.includes(val)) {
            nextArr.push(val)
            l++
        }
    }
    return nextArr
}
const renderCard = ({ id, name, type, img }) => {
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
    // ====================popup================

const renderPopup = ({ name, type, img, breed, age, description, inoculations, diseases, parasites }) => {
    const popupBlock = `
<div class="popup-card__img">
    <img src=${img} alt=${type}>
</div>
<div class="popup-card__describe">
    <h2 class="describe__heading">${name}</h2>
    <p class="describe__subheading">${type} - ${breed}</p>
    <p class="describe__text">${description}</p>
    <ul class="describe__list">
       <li class="describe__item"><span>Age:</span>&nbsp;${age}</li>
       <li class="describe__item"><span>Inoculations:</span>&nbsp;${inoculations}</li>
       <li class="describe__item"><span>Diseases:</span>&nbsp;${diseases}</li>
       <li class="describe__item"><span>Parasites:</span>&nbsp;${parasites}</li>
    </ul>
</div>
`

    petPopup.insertAdjacentHTML("beforeend", popupBlock)
}
const showPetCard = (e) => {
    const card = e.target.closest(".slider-card")
    const key = +card.dataset.card
    body.style.overflow = 'hidden';
    petPopup.innerHTML = "";
    renderPopup(dataPets[key])
    wrapPopup.classList.add('show')
    overlayPopup.classList.add('show')
}

const closePopup = () => {
    wrapPopup.classList.remove('show')
    overlayPopup.classList.remove('show')
    body.style.overflow = '';
}


closePop.forEach(i => i.addEventListener("click", closePopup))

//  ================end=popup============================
//===================================================

// ================
let startSlides = getRandomArr(3);

const renderSlider = () => {
    sliderWrap.innerHTML = "";
    // startSlides.forEach(ind => renderCard(dataPets.filter(i => i.id === ind)[0]))
    startSlides.forEach(ind => renderCard(dataPets[ind]))


    petCards = document.querySelectorAll('.slider-card')
    petCards.forEach(i => i.addEventListener("click", e => showPetCard(e)))
}

arrows.forEach(i => i.addEventListener("click", () => {
    startSlides = getNextRandomArr(startSlides)
    renderSlider()

}))


renderSlider()



// ===============burger=======
const burgerMenu = document.querySelector('.header__burger')
const overlayMenu = document.querySelector('.menu-overlay')
const menu = document.querySelector('.header__menu')


const toggleMenu = () => {
    burgerMenu.classList.toggle('burger-active')
    overlayMenu.classList.toggle('overlay-active')
    menu.classList.toggle('menu-active')
    body.style.overflow = body.style.overflow === '' ? 'hidden' : ''



}
burgerMenu.addEventListener('click', toggleMenu);
overlayMenu.addEventListener('click', toggleMenu);
menu.addEventListener('click', toggleMenu);