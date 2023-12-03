import showGoods from "./modules/showGoods";
import closeCardGoods from "./modules/closeCardGoods";
import chooseGoods from "./modules/сhooseGoods";
import modalPayCard from "./modules/modalPayCard";
import modalDeliveryCard from "./modules/modalDeliveryCard";
import formValidation from "./modules/formValidation";

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    showGoods();
    closeCardGoods();
    chooseGoods();
    modalPayCard();
    modalDeliveryCard();
    formValidation();


    //Активация heart
    const btnsHeart = document.querySelectorAll('.control-buttons__favorite');
    btnsHeart.forEach((item) => {
        item.addEventListener('click', () => {
            if (item.classList.contains('active')) {
                item.classList.remove('active');
            } else {
                item.classList.add('active');
            }
        })
    });

    //Удаление товаров из секции card-2
    const btnsDelete = document.querySelectorAll('.main__basket__product__absent .control-buttons__delete'),
        cardText = document.querySelector('.card-2__text');

    btnsDelete.forEach((item) => {
        item.addEventListener('click', (e) => {
            const productElement = e.target.closest('.product__card__absent');
            document.querySelector('.main__basket__product__absent').style.paddingTop = '10px';
            let remainingGoods = document.querySelectorAll('.product__card__absent').length - 1;

            if (remainingGoods === 2) {
                cardText.textContent = `Отсутствуют · ${remainingGoods} товара`;
            } else if (remainingGoods === 1) {
                cardText.textContent = `Отсутствует · ${remainingGoods} товар`;
            } else {
                cardText.textContent = 'Отсутствуют · 0 товаров';
                document.querySelector('.main__basket__product__absent').style.paddingTop = '';
            }

            productElement.remove();

        })
    });

    //Удаление товаров из секции card-1
    const btnsDeleteTwo = document.querySelectorAll('.main__basket__product .control-buttons__delete'),
          btnCheckBoxAll = document.querySelectorAll('.checkbox.product-card');

    btnsDeleteTwo.forEach((item, index) =>{
        item.addEventListener('click', (e) => {
            document.querySelector('.main__basket__product').style.paddingTop = '10px';
            
            const productElement = e.target.closest('.product__card');
            
            if (btnCheckBoxAll[index].classList.contains('checkbox_active')) {
                btnCheckBoxAll[index].click();
            }
            productElement.remove();
            
        })
    });

}); 