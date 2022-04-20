const dPets = [{
            "id": 0,
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
            "id": 1,
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
            "id": 2,

            "name": "Woody",
            "img": "../../assets/images/pets-woody.png",
            "type": "Dog",
            "breed": "Golden Retriever",
            "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
            "age": "3 years 6 months",
            "inoculations": ["adenovirus", "distemper"],
            "diseases": ["right back leg mobility reduced"],
            "parasites": ["none"]
        },
        {
            "id": 3,
            "name": "Scarlett",
            "img": "../../assets/images/pets-scarlett.png",
            "type": "Dog",
            "breed": "Jack Russell Terrier",
            "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
            "age": "3 months",
            "inoculations": ["parainfluenza"],
            "diseases": ["none"],
            "parasites": ["none"]
        },
        {
            "id": 4,
            "name": "Katrine",
            "img": "../../assets/images/pets-katrine.png",
            "type": "Cat",
            "breed": "British Shorthair",
            "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
            "age": "6 months",
            "inoculations": ["panleukopenia"],
            "diseases": ["none"],
            "parasites": ["none"]
        },
        {
            "id": 5,
            "name": "Timmy",
            "img": "../../assets/images/pets-timmy.png",
            "type": "Cat",
            "breed": "British Shorthair",
            "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
            "age": "2 years 3 months",
            "inoculations": ["calicivirus", "viral rhinotracheitis"],
            "diseases": ["kidney stones"],
            "parasites": ["none"]
        },
        {
            "id": 6,
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
            "id": 7,
            "name": "Charly",
            "img": "../../assets/images/pets-charly.png",
            "type": "Dog",
            "breed": "Jack Russell Terrier",
            "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
            "age": "8 years",
            "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
            "diseases": ["deafness", "blindness"],
            "parasites": ["lice", "fleas"]
        }
    ]
    // ===========================
const closePop = document.querySelectorAll('.close')
const overlayPopup = document.querySelector('.popup-overlay')
const petPopup = document.querySelector('.popup-card')
const wrapPopup = document.querySelector('.wrap-popup')
const body = document.body
let petCards
    // ===========================

const slideWrap = document.querySelector('.cards')
const firstPageBtn = document.querySelector(".first-page")
const lastPageBtn = document.querySelector(".last-page")
const currentPage = document.querySelector(".current-page span")
const prevPageBtn = document.querySelector(".prev-page")
const nextPageBtn = document.querySelector(".next-page")
let currentInd = 1;
let countCards = 8
let width = window.innerWidth
let repeat = 6
let listPets = []




const countCardsShow = () => {
    if (width < 768) countCards = 3
    if (width > 767 && width < 1280) countCards = 6
    if (width > 1279) countCards = 8
}
countCardsShow()

const getListPets = () => {
    for (let i = 0; i < repeat; i++) { listPets.push(...dPets) }
    listPets = listPets.map((item, ind) => ({
        ...item,
        id: ind
    }))

}
getListPets()

let countPages = listPets.length / countCards

const renderCard = ({ id, name, type, img }) => {
    const cardBlock = `
        <div class="cards__card" data-slide=${id}>
            <div class="card__img">
               <img src=${img} alt=${type}>
            </div>
            <div class="card__text">${name}</div>
            <button type="button" class="card__btn">Learn more</button>
        </div> `

    slideWrap.insertAdjacentHTML(
        "beforeend", cardBlock)
}


// =============================================
//===================================================
const renderPopup = ({ name, type, img, breed, description, inoculations, diseases, parasites }) => {
    const popupBlock = `
    <div class="popup-card__img">
        <img src=${img} alt=${type}>
    </div>
    <div class="popup-card__describe">
        <h2 class="describe__heading">${name}</h2>
        <p class="describe__subheading">${type} - ${breed}</p>
        <p class="describe__text">${description}</p>
        <ul class="describe__list">
           <li class="describe__item"><span>Age:</span>&nbsp;${type}</li>
           <li class="describe__item"><span>Inoculations:</span>&nbsp;${inoculations}</li>
           <li class="describe__item"><span>Diseases:</span>&nbsp;${diseases}</li>
           <li class="describe__item"><span>Parasites:</span>&nbsp;${parasites}</li>
        </ul>
    </div>
    `

    petPopup.insertAdjacentHTML("beforeend", popupBlock)
}
const showPetCard = (e) => {

    const card = e.target.closest(".cards__card")
    const key = +card.dataset.slide

    body.style.overflow = 'hidden';
    petPopup.innerHTML = "";
    renderPopup(listPets[key])
    wrapPopup.classList.add('show')
    overlayPopup.classList.add('show')
}

const closePopup = () => {
    wrapPopup.classList.remove('show')
    overlayPopup.classList.remove('show')
    body.style.overflow = '';
}

closePop.forEach(i => i.addEventListener("click", closePopup))

// ====================


const displaySlide = (indexPage) => {
    let indexCard = countCards * (indexPage - 1)
    slideWrap.innerHTML = ''
    for (let i = 0; i < countCards; i++) {
        renderCard(listPets[indexCard + i])
    }
    currentPage.textContent = indexPage
    if (indexPage === 1) {
        currentInd = 1
        firstPageBtn.disabled = true;
        prevPageBtn.disabled = true;
    } else {
        firstPageBtn.disabled = false;
        prevPageBtn.disabled = false;
    }
    if (indexPage === countPages) {
        currentInd = countPages
        lastPageBtn.disabled = true;
        nextPageBtn.disabled = true;

    } else {
        lastPageBtn.disabled = false;
        nextPageBtn.disabled = false;
    }

    petCards = document.querySelectorAll('.cards__card')
    console.log('Value: ', petCards);

    petCards.forEach(i => i.addEventListener("click", e => showPetCard(e)))
}
displaySlide(1)
firstPageBtn.addEventListener("click", () => displaySlide(1))
lastPageBtn.addEventListener("click", () => displaySlide(countPages))
nextPageBtn.addEventListener("click", () => displaySlide(++currentInd))
prevPageBtn.addEventListener("click", () => displaySlide(--currentInd))