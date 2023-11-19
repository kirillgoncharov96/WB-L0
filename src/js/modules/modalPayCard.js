
const modalPayCard = () => {
    //Модальное окно выбора карты (открыть\закрыть и выбор платежной карты)
    const btnTrigger = document.querySelectorAll('#pay-card__edit'),
        btnClose = document.querySelector('.modal__payment-method__close-btn'),
        checkBoxCard = document.querySelectorAll('.bank-card__selected'),
        btnCard = document.querySelectorAll('.modal__payment-method__select.bank-card .bank-card'),
        submitBtn = document.querySelector('.modal__payment-method__submit .submit-btn'),
        dateCard = document.querySelector('.pay-method__bank-card-date'),
        selectCard = document.querySelectorAll('#pay_icon');

    let html = document.documentElement,
        scrollPosition = window.pageYOffset,
        paddinRight = window.innerWidth - document.body.offsetWidth;

    document.querySelector('.modal__payment-method__wrapper').addEventListener('click', (e) => e.preventDefault());

    btnTrigger.forEach((item) => {
        item.addEventListener('click', () => {

            html.style.marginRight = paddinRight + "px";
            scrollPosition = window.pageYOffset;
            html.style.top = -scrollPosition + "px";
            html.classList.add('active');
            document.querySelector('.modal__payment-method__wrapper').style.left = document.body.offsetWidth / 2 + 'px';
            document.querySelector('.modal__payment-method').classList.add('active');
        })
    });

    btnClose.addEventListener('click', () => {

        html.style.marginRight = `0px`;
        html.classList.remove('active');
        window.scrollTo(0, scrollPosition);
        html.style.top = '';
        document.querySelector('.modal__payment-method').classList.remove('active');


    });

    function deactivateButtons() {
        checkBoxCard.forEach(btn => {
            btn.classList.remove('active');
        });
    };

    btnCard.forEach((item) => {
        item.addEventListener('click', () => {
            deactivateButtons();
            item.querySelector('.bank-card__selected').classList.toggle('active');
            const cardId = item.id;
            createContent(cardId);
        })
    });


    function createContent(id) {
        submitBtn.addEventListener('click', (e) => {
            e.preventDefault();

            switch (id) {
                case 'card-1':
                    dateCard.textContent = '01/30';
                    selectCard.forEach((item) => item.src = './assets/icons/mir_card.svg');
                    break;
                case 'card-2':
                    dateCard.textContent = '05/23';
                    selectCard.forEach((item) => item.src = './assets/icons/visa_card.svg');
                    break;
                case 'card-3':
                    dateCard.textContent = '05/28';
                    selectCard.forEach((item) => item.src = './assets/icons/mastercard_card.svg');
                    break;
                case 'card-4':
                    dateCard.textContent = '04/25';
                    selectCard.forEach((item) => item.src = './assets/icons/maestro_card.svg');
                    break;
                default:
                    return;
            }

            btnClose.click();

        });
    }


}

export default modalPayCard;