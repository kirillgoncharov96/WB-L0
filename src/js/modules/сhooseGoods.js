
const chooseGoods = () => {

    //Выбор всех товаров
    const btnCheckBoxAll = document.querySelector('.checkbox'),
        btnCheckBoxFirst = document.querySelector('.item-1__details .checkbox.product-card'),
        btnCheckBoxSecond = document.querySelector('.item-2__details .checkbox.product-card'),
        btnCheckBoxThree = document.querySelector('.item-3__details .checkbox.product-card'),
        btnCheckBoxAllGoods = document.querySelectorAll('.checkbox.product-card');

    btnCheckBoxAll.addEventListener('click', () => {
        if (btnCheckBoxAll.classList.contains('checkbox_active')) {
            btnCheckBoxAll.classList.remove('checkbox_active');
            btnCheckBoxAllGoods.forEach((item) => {
                item.classList.remove('checkbox_active')
            });
        } else {
            btnCheckBoxAll.classList.add('checkbox_active');
            btnCheckBoxAllGoods.forEach((item) => {
                item.classList.add('checkbox_active')
            });
        }
    });

    btnCheckBoxAllGoods.forEach((item) => {
        item.addEventListener('click', () => {
            if (item.classList.contains('checkbox_active')) {
                item.classList.remove('checkbox_active')
            } else {
                item.classList.add('checkbox_active')
            }
        })
    });


}

export default chooseGoods;