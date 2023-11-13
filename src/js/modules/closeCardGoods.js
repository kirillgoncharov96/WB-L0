
const closeCardGoods = () => {

    // Первая карточка
    const btnTriggerClose = document.querySelector('.card-1__arrow'),
        btnTriggerOpen = document.querySelector('.card-1__arrow__close');

    btnTriggerClose.addEventListener('click', () => {
        document.querySelector('.main__basket__card.card-1').style.display = "none";
        document.querySelector('.main__basket__card.card-1__close').style.display = "flex";
        document.querySelector('.main__basket__product').classList.add('hidden');
        document.querySelector('.product__card__wrapper').classList.add('hidden');
    });

    btnTriggerOpen.addEventListener('click', () => {
        document.querySelector('.main__basket__card.card-1__close').style.display = "none";
        document.querySelector('.main__basket__card.card-1').style.display = "flex";
        document.querySelector('.main__basket__product').classList.remove('hidden');
        document.querySelector('.product__card__wrapper').classList.remove('hidden');
    });

    //Вторая карточка 
    const btnTrigger = document.querySelector('.card-2__arrow');

    btnTrigger.addEventListener('click', () => {
        if (btnTrigger.style.transform) {
            document.querySelector('.card-2__arrow').style.transform = "";
            document.querySelector('.main__basket__product__absent').classList.remove('hidden');
            document.querySelector('.product__card__wrapper__absent').classList.remove('hidden');
        } else {
            document.querySelector('.card-2__arrow').style.transform = "rotate(180deg)";
            document.querySelector('.main__basket__product__absent').classList.add('hidden');
            document.querySelector('.product__card__wrapper__absent').classList.add('hidden');
        }
    });


}

export default closeCardGoods;