import formatValue from "./formatValue";

const chooseGoods = () => {

    //Работа с карточкой товара(цена, скидка, кол-во товара, удаление товара)
    const btnCheckBoxAll = document.querySelector('.checkbox'),
        btnCheckBoxAllGoods = document.querySelectorAll('.checkbox.product-card'),
        btnPlusValue = document.querySelectorAll('.selector__counter-plus'),
        btnMinusValue = document.querySelectorAll('.selector__counter-minus'),
        inputsValue = document.querySelectorAll('.selector__counter-number');

    //Функция фильтрации выбора всех товаров и включения/отключения checkbox "выбрать все" 
    function checkbox() {
        if(document.querySelectorAll('.checkbox.product-card.checkbox_active').length === 3) {
            btnCheckBoxAll.classList.add('checkbox_active');
        } else {
            btnCheckBoxAll.classList.remove('checkbox_active');
        }
    };

    btnCheckBoxAll.addEventListener('click', () => {
        if (btnCheckBoxAll.classList.contains('checkbox_active')) {
            btnCheckBoxAll.classList.remove('checkbox_active');
            btnCheckBoxAllGoods.forEach((item) => {
                item.classList.remove('checkbox_active')
            })
        } else {
            btnCheckBoxAll.classList.add('checkbox_active');
            btnCheckBoxAllGoods.forEach((item) => {
                item.classList.add('checkbox_active')
            })
        }
        quantityOfGoods();
    });

    btnCheckBoxAllGoods.forEach((item, index) => {
        item.addEventListener('click', () => {
            if (item.classList.contains('checkbox_active')) {
                item.classList.remove('checkbox_active')
            } else {
                item.classList.add('checkbox_active')
            }
            checkbox();
            quantityOfGoods();
        })
    });

    //Функция блокировки кнопки "-" при value === 1
    function disabledButtons(input) {
        let currentValue = parseInt(input.closest('.selector__counter').querySelector('.selector__counter-number').value);
        if(currentValue === 1) {
            input.parentNode.querySelector('.selector__counter-minus').classList.add('disabled');
            input.parentNode.querySelector('.selector__counter-minus').disabled = true;
        } else {
            input.parentNode.querySelector('.selector__counter-minus').classList.remove('disabled');
            input.parentNode.querySelector('.selector__counter-minus').disabled = false;
        } 
    };


    //Функция блокировки "+" для условия есть ли товар в определенном кол-ве на складе
    function disabledButtonsPlus(input, index) {
        let currentValue = parseInt(input.closest('.selector__counter').querySelector('.selector__counter-number').value);
        if (index === 0 && currentValue === 2) {
            input.parentNode.querySelector('.selector__counter-plus').classList.add('disabled');
            input.parentNode.querySelector('.selector__counter-plus').disabled = true;
        } else if (index === 2 && currentValue === 2) {
            input.parentNode.querySelector('.selector__counter-plus').classList.add('disabled');
            input.parentNode.querySelector('.selector__counter-plus').disabled = true;
        } else {
            input.parentNode.querySelector('.selector__counter-plus').classList.remove('disabled');
            input.parentNode.querySelector('.selector__counter-plus').disabled = false;
        }
    };

    btnPlusValue.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            btn.closest('.selector__counter').querySelector('.selector__counter-number').value++;
            disabledButtons(btn);
            disabledButtonsPlus(btn, index);
            quantityOfGoods();
        })
    });

    btnMinusValue.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            btn.closest('.selector__counter').querySelector('.selector__counter-number').value--;
            disabledButtons(btn);
            disabledButtonsPlus(btn, index);
            quantityOfGoods();
        })
    });

    //Функция подсчета кол-ва товара при клике на "-" и "+" для работы с выводом кол-ва товара, цены/скидки и доставкой
    function quantityOfGoods() {
        let sum = 0;
        inputsValue.forEach((item, index) => {
            if(document.querySelector(`.item-${index + 1}__details`).querySelector('.checkbox.product-card.checkbox_active')) {
                sum += parseInt(item.value);
            } else {
                sum += 0
            }
        })
        productShow(sum);
        deliveryShow(sum);
        orderValueShow();
    }

    //Функция отображения кол-ва товара в оформлении заказа
    function productShow(value) {

        const number = document.querySelector('.item-2__details .selector__counter-number'),
              checkboxCardTwo = document.querySelectorAll('.checkbox.product-card')[1];

        if(number !== undefined) {
            if (parseInt(number.value) > 184 && window.innerWidth > 994 && checkboxCardTwo.classList.contains('checkbox_active')) {
                document.querySelector('.delivery-location__adress').style.marginBottom = '4px';
                document.querySelector('.delivery-location__date').style.display = 'block';
                document.querySelector('.delivery-location__date').textContent = `5-8 фев`;
    
            } else if(value !== 0 && window.innerWidth > 994) {
                document.querySelector('.delivery-location__adress').style.marginBottom = '4px';
                document.querySelector('.delivery-location__date').style.display = 'block';
                document.querySelector('.delivery-location__date').textContent = `5-6 фев`;
            } else {
                document.querySelector('.delivery-location__adress').style.marginBottom = '32px';
                document.querySelector('.delivery-location__date').style.display = 'none';
            }
            
        }

        

        const first = value % 100,
              second = first % 10;

        if (first >= 11 && first <= 19) {
            document.querySelector('.value__text').textContent = 'товаров';
            document.querySelector('.card-1__text.card-1__text__close').children[0].textContent = `${value} товаров ·`
        } else if (second >= 2 && second <= 4) {
            document.querySelector('.value__text').textContent = 'товара';
            document.querySelector('.card-1__text.card-1__text__close').children[0].textContent = `${value} товара ·`
        } else if (second === 1) {
            document.querySelector('.value__text').textContent = 'товар';
            document.querySelector('.card-1__text.card-1__text__close').children[0].textContent = `${value} товар ·`
        } else {
            document.querySelector('.value__text').textContent = 'товаров'
            document.querySelector('.card-1__text.card-1__text__close').children[0].textContent = `${value} товаров ·`;
        }

        document.querySelector('.value').textContent = `${value}`;
        
    }

    //Функиция отображения кол-ва карточек товара и дату доставки
    function deliveryShow(value) {

        const basketValue = document.querySelector('.navbar-pc__notify'),
            basketMobileValue = document.querySelector('.mobile-navbar__notify'),
            secondProductAnotherValue = document.querySelectorAll('.delivery__info.data-delivery')[1].querySelector('.product-card__counter'),
            number = document.querySelector('.item-2__details .selector__counter-number'),
            checkboxCardTwo = document.querySelectorAll('.checkbox.product-card')[1];

            

        //Работа с отображением доставки товара на другую дату (при увеличении кол-ва допустим на складе в этом пункте)
        if (+number.value > 184 && window.innerWidth > 320 && checkboxCardTwo.classList.contains('checkbox_active')) {
            document.querySelectorAll('.delivery__info.data-delivery')[1].style.display = 'flex';
            document.querySelectorAll('.delivery__info.data-delivery')[0].style.marginBottom = '16px';
        } else if (+number.value > 184 && window.innerWidth <= 320 && checkboxCardTwo.classList.contains('checkbox_active')) {
            document.querySelectorAll('.delivery__info.data-delivery')[1].style.display = 'flex';
            document.querySelectorAll('.delivery__info.data-delivery')[0].style.marginBottom = '24px';
        } else {
            document.querySelectorAll('.delivery__info.data-delivery')[1].style.display = 'none';
            document.querySelectorAll('.delivery__info.data-delivery')[0].style.marginBottom = '24px';
        }
        
        if(+number.value - 184 === 1) {
            secondProductAnotherValue.style.display = 'none';
        } else if (+number.value - 184 > 1) {
            secondProductAnotherValue.style.display = 'flex';
            secondProductAnotherValue.textContent = `${+number.value - 184}`;
        }
        
        //Отображение кол-ва товара в корзине
        basketValue.textContent = `${value}`;
        basketMobileValue.textContent = `${value}`;

        //Отображение товара на дату (5-6 фев)
        const checkboxAll = document.querySelectorAll('.checkbox.product-card.checkbox_active'),
              checkboxActive = document.querySelectorAll('.checkbox.product-card'),
              productCards = document.querySelectorAll('#delivery_product > div'),
              countProduct = document.querySelectorAll('.selector__counter-number');


        if(checkboxAll.length === 0) {
            document.querySelectorAll('.delivery__info.data-delivery')[0].style.display = 'none';
        } else {
            document.querySelectorAll('.delivery__info.data-delivery')[0].style.display = 'flex';
        }

        checkboxActive.forEach((item, index) => {
            
            if(item.classList.contains('checkbox_active')) {
                document.querySelector(`.product-card__photo-${index + 1}`).style.display = 'block';
            } else {
                document.querySelector(`.product-card__photo-${index + 1}`).style.display = 'none';
            }
        });

        if(productCards.length > 1) {
            productCards.forEach((item, index) => {
                if(parseInt(countProduct[index].value) > 1 && index !== 1) {
                    item.querySelector('.product-card__counter').textContent = `${countProduct[index].value}`;
                    item.querySelector('.product-card__counter').style.display = 'flex';
                } else if(parseInt(countProduct[index].value) > 1 && parseInt(countProduct[index].value) <= 184) {
                    item.querySelector('.product-card__counter').textContent = `${countProduct[1].value}`;
                    item.querySelector('.product-card__counter').style.display = 'flex';
                } else if(parseInt(countProduct[index].value) > 184) {
                    item.querySelector('.product-card__counter').textContent = `184`;
                    item.querySelector('.product-card__counter').style.display = 'flex';
                } else {
                    item.querySelector('.product-card__counter').style.display = 'none';
                }
            });
        } else {
            productCards.querySelector('.product-card__counter').style.display = 'none';
        }

        

    }

    //Функция работы с ценой товара и скидкой
    function orderValueShow() {
        const countProducts = document.querySelectorAll('.selector__counter-number'),
              priceProducts = document.querySelectorAll('.product__card__value'),
              discProducts = document.querySelectorAll('.discount__value'),
              orderPriceAll = document.querySelector('.main__total-price__value .price__value'),
              priceCards = document.querySelector('.card-1__text.card-1__text__close'),
              orderDiscAll = document.querySelector('.quantity-goods__price.price'),
              minusDiscAll = document.querySelector('.discount__price.price'),
              submitBtn = document.querySelector('.main__total-price__order-btn'),
              checkboxPayMethod = document.querySelector('.checkbox.select-paymethod');

        countProducts.forEach((value, index) => {
            if (index === 0) {
                priceProducts[index].textContent = `${parseInt(value.value * 368)}`;
                discProducts[index].textContent = `${parseInt(value.value * 1051)} сом`;
            } else if(index === 1) {
                priceProducts[index].textContent = `${formatValue(parseInt(value.value * 4025))}`;
                discProducts[index].textContent = `${formatValue(parseInt(value.value * 11500))} сом`;
            } else {
                priceProducts[index].textContent = `${parseInt(value.value * 167)}`;
                discProducts[index].textContent = `${parseInt(value.value * 475)} сом`;
            }
        });

        //Отображение общей цены 
        let sumProducts = 0;
        priceProducts.forEach((price, index) => {
            if(document.querySelector(`.item-${index + 1}__details`).querySelector('.checkbox.product-card.checkbox_active')) {
                sumProducts += parseInt(price.textContent.replaceAll(' ', ''));
            } else {
                sumProducts += 0
            }
        });
        orderPriceAll.textContent = `${formatValue(sumProducts)}`;
        priceCards.children[1].textContent = `${formatValue(sumProducts)} сом`;

        //Отображение общей скидки
        let sumDisc = 0;
        discProducts.forEach((discount, index) => {
            if(document.querySelector(`.item-${index + 1}__details`).querySelector('.checkbox.product-card.checkbox_active')) {
                sumDisc += parseInt(discount.textContent.replaceAll(' ', ''));
            } else {
                sumDisc += 0
            }
        });
        orderDiscAll.children[0].textContent = `${formatValue(sumDisc)}`;
        if(sumProducts - sumDisc !== 0) {
            minusDiscAll.children[0].textContent = `−${formatValue(sumDisc - sumProducts)}`;
        } else {
            minusDiscAll.children[0].textContent = `0`;
        }
        
        //Если активна кнопка оплаты по карте
        if (checkboxPayMethod.classList.contains('checkbox_active')) {
            submitBtn.textContent = `Оплатить ${formatValue(orderPriceAll.textContent)} сом`;
        } 

    }

}

export default chooseGoods;