const popup = () => {
    const closePopupBtn = document.querySelector('.popup-card__close')
    const overlayPopup = document.querySelector('.popup-overlay')
    const petPopup = document.querySelector('.popup-card')
    const wrapPopup = document.querySelector('.wrap-popup')
    const petCards = document.querySelectorAll('.slider-card')

    const closePopup = () => {
        wrapPopup.classList.remove('show')
        overlayPopup.classList.remove('show')
    }

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
        const card = e.target.closest(".slider-card")
        const key = +card.dataset.card

        petPopup.innerHTML = "";
        renderPopup(dataPets[key])
        wrapPopup.classList.add('show')
        overlayPopup.classList.add('show')
    }

    petCards.forEach(card => card.addEventListener("click", e => showPetCard(e)))
    overlayPopup.addEventListener("click", closePopup);
    closePopupBtn.addEventListener("click", closePopup);
}
export default popup