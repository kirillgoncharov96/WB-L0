
const modalDeliveryCard = () => {
    //Модальное окно выбора адреса и способа доставки (открыть\закрыть и адрес\доставка)
    const btnTrigger = document.querySelectorAll('#delivery_edit'),
        btnClose = document.querySelector('.modal__delivery-method__close-btn'),
        btnCourierEdit = document.querySelector('.delivery-method__courier-btn'),
        btnPickUpPointEdit = document.querySelector('.delivery-method__pickup-point-btn'),
        btnsDelete = document.querySelectorAll('.delete__adress'),
        submitBtn = document.querySelector('.modal__delivery-method__submit .submit-btn'),
        checkbox = document.querySelectorAll('.select__adress'),
        adressText = document.querySelectorAll('#adress'),
        ratingValue = document.querySelector('.location__adress-info.number-rating');


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
            document.querySelector('.modal__delivery-method__wrapper').style.left = document.body.offsetWidth / 2 + 'px';
            document.querySelector('.modal__delivery-method').classList.add('active');
        })
    });

    btnClose.addEventListener('click', () => {
        html.style.marginRight = `0px`;
        html.classList.remove('active');
        window.scrollTo(0, scrollPosition);
        html.style.top = '';
        document.querySelector('.modal__delivery-method').classList.remove('active');
    });

    btnsDelete.forEach((item) => {
        item.addEventListener('click', (e) => {
            const adress = e.target.closest('.modal__delivery-method__item');
            adress.remove();
        })
    });

    btnCourierEdit.addEventListener('click', function () {
        btnCourierEdit.classList.add('active');
        btnPickUpPointEdit.classList.remove('active');
        document.querySelector('#point_location').classList.add('hidden');
        document.querySelector('#cr_location').classList.remove('hidden');
    });

    btnPickUpPointEdit.addEventListener('click', () => {
        btnPickUpPointEdit.classList.add('active');
        btnCourierEdit.classList.remove('active');
        document.querySelector('#point_location').classList.remove('hidden');
        document.querySelector('#cr_location').classList.add('hidden');
    });

    function deactivateButtons() {
        checkbox.forEach((btn) => {
            btn.classList.remove('active');
            btn.closest('.modal__delivery-method__item').querySelector('.delete__adress').disabled = false;
        });
    };

    checkbox.forEach((item) => {
        item.addEventListener('click', (e) => {
            deactivateButtons();
            item.classList.toggle('active');
            item.closest('.modal__delivery-method__item').querySelector('.delete__adress').disabled = true;
            const id = e.target.closest('.modal__delivery-method__item').id;
            createDelivery(id);
        })
    });

    function createDelivery(id) {
        submitBtn.addEventListener('click', (e) => {
            e.preventDefault();

            if (btnPickUpPointEdit.classList.contains('active')) {
                document.querySelector('.location__delivery-method').textContent = 'Пункт выдачи';
                document.querySelector('.delivery-location__title').textContent = 'Доставка в пункт выдачи';
                document.querySelector('.location__adress-info').style.display = 'flex';
            } else {
                document.querySelector('.location__delivery-method').textContent = 'Доставит курьер';
                document.querySelector('.delivery-location__title').textContent = 'Доставка курьером';
                document.querySelector('.location__adress-info').style.display = 'none';
            }

            switch (id) {
                case '1':
                    ratingValue.textContent = '4.99';
                    adressText.forEach((item) => item.textContent = 'г. Бишкек, микрорайон Джал, улица Ахунбаева Исы, д. 67/1');
                    break;
                case '2':
                    ratingValue.textContent = '4.95';
                    adressText.forEach((item) => item.textContent = 'г. Бишкек, улица Ахматбека Суюмбаева, 12/1');
                    break;
                case '3':
                    ratingValue.textContent = '4.98';
                    adressText.forEach((item) => item.textContent = 'г. Бишкек, улица Табышалиева, д. 57');
                    break;
                case '4':
                    adressText.forEach((item) => item.textContent = 'Бишкек, улица Табышалиева, 57');
                    break;
                case '5':
                    adressText.forEach((item) => item.textContent = 'Бишкек, улица Жукеева-Пудовкина, 77/1');
                    break;
                case '6':
                    adressText.forEach((item) => item.textContent = 'Бишкек, микрорайон Джал, улица Ахунбаева Исы, 67/1');
                    break;
                default:
                    return;
            }

            btnClose.click();

        });
    }




}

export default modalDeliveryCard;