import formatValue from "./formatValue";

const formValidation = () => {

    //Валидация inputs, с проверкой ввода и добавления ошибки/оповещения при проверке на выполнение валидности
    const formInputs = document.querySelector('.main__basket__product-recipient.form'),
        orderForm = document.querySelector('.main__total-price__order-btn');

    //Класс для вызова стилей при не заполнении/ошибки заполнения полей
    const INVALID_CLASSNAME = 'invalid';

    //Подсказки/пояснения для inputs
    const EMPTY_WARNINGS = {
        name: 'Укажите имя',
        surname: 'Введите фамилию',
        email: 'Укажите электронную почту',
        tel: 'Укажите номер телефона',
        itn: 'Укажите ИНН',
    };
    const MISMATCH_WARNINGS = {
        name: 'Укажите имя',
        surname: 'Введите фамилию',
        email: 'Проверьте адрес электронной почты',
        tel: 'Формат: +9 999 999 99 99',
        itn: 'Проверьте ИНН',
    };

    function validateForm(form) {
        const inputs = Array.from(form.querySelectorAll('input'));
        const isAnyInputInvalid = inputs.map(validateInput).some(validation => !validation);
        const isAnyInputEmpty = inputs.map(isInputEmpty).some(validation => validation);
        const invalidInputs = form.querySelectorAll('label.invalid input');

        if (isAnyInputInvalid || isAnyInputEmpty) {
            return { isValid: false, invalidInputs };
        }

        return { isValid: true, invalidInputs };
    }

    //Проверка каждого inputs по заданным параметрам
    function validateInput(input) {
        const inputID = input.id;
        const label = input.closest('label');
        const warningBlock = label.querySelector('.input-block__warning');
        const inputValue = input.value;

        const validationConditions = {
            'name': {
                antiPattern: /[^a-zA-Zа-яА-ЯёЁ]/,
                isValid: (value) => value === '' || !validationConditions['name'].antiPattern.test(value),
            },
            'surname': {
                antiPattern: /[^a-zA-Zа-яА-ЯёЁ]/,
                isValid: (value) => value === '' || !validationConditions['surname'].antiPattern.test(value),
            },
            'email': {
                pattern: /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/,
                isValid: (value) => value === '' || validationConditions['email'].pattern.test(value),
            },
            'tel': {
                pattern: /^\+\d\s\d{3}\s\d{3}\s\d{2}\s\d{2}$/,
                isValid: (value) => value === '' || validationConditions['tel'].pattern.test(value),
            },
            'itn': {
                isValid: (value) => value.length === 14,
            }
        };

        const isInputValid = validationConditions[inputID]?.isValid(inputValue);

        if (!isInputValid) {
            markAsInvalid(label);
            showWarning(warningBlock, MISMATCH_WARNINGS[inputID]);
            return false;
        } else {
            markAsValid(label);
            hideWarning(warningBlock);

            input.oninput = '';
            return true;
        }
    }

    function handleTelInputChange(input) {
        const inputValue = input.value.replace(/\D/g, '');
        let formattedValue = formatTelNumber(inputValue);
        input.value = formattedValue;
    }

    //Стилизация отображения номера в inputs(mobile)
    function formatTelNumber(number) {
        let formattedValue = '';
        let currentPos = 1;

        for (let i = 0; i < number.length; i++) {
            if (currentPos === 1) {
                formattedValue += '+';
            } else if (currentPos === 2 || currentPos === 5 || currentPos === 8 || currentPos === 10) {
                formattedValue += ' ';
            }
            formattedValue += number[i];
            currentPos++;
        }

        return formattedValue;
    }

    function isInputEmpty(input) {
        const isEmpty = input.validity.valueMissing;

        if (isEmpty) {
            const inputID = input.id;
            const label = input.closest('label');
            const warningBlock = label.querySelector('.input-block__warning');
            markAsInvalid(label);
            showWarning(warningBlock, EMPTY_WARNINGS[inputID]);
            return true;
        }
        return false;
    }

    function markAsInvalid(element) {
        if (!element.classList.contains(INVALID_CLASSNAME)) {
            element.classList.add(INVALID_CLASSNAME)
        }
    }

    function markAsValid(element) {
        element.classList.remove(INVALID_CLASSNAME);
    }

    function showWarning(element, warning) {
        element.textContent = warning;
    }

    function hideWarning(element) {
        element.textContent = '';
    }


    //Валидация inputs с указанием ошибки при вводе
    formInputs.querySelectorAll('input').forEach(input => {
        input.onblur = () => {
            if (!input.value) return;
            input.oninput = () => validateInput(input);
            validateInput(input);
        }
        if (input.id === 'tel') {
            input.addEventListener('input', () => handleTelInputChange(input));
        }
    });


    //Функция проверки заполненности inputs и выдача ошибки в пустых полях
    function handleOrderSubmit(event, formToValidate) {
        if (!formToValidate) {
            return;
        };

        const { isValid, invalidInputs } = validateForm(formToValidate),
        errorElement = document.querySelector('.main__basket__product-recipient.box');

        if (!isValid && window.innerWidth > 425) {
            event.preventDefault();

            invalidInputs.forEach(input => {
                if (!input.classList.contains('shake')) {
                    input.classList.add('shake');
                }
                setTimeout(() => {
                    input.classList.remove('shake')
                }, 350)
            });
            
        } else if (!isValid && window.innerWidth <= 425) {
            event.preventDefault();

            invalidInputs.forEach(input => {
                if (!input.classList.contains('shake')) {
                    input.classList.add('shake');
                }
                setTimeout(() => {
                    input.classList.remove('shake')
                }, 350)
            });

            errorElement.scrollIntoView({ block: "start", behavior: "smooth" });
         
        }

        //inputs валидируются в момент ввода, а не после события blur
        const inputs = formToValidate.querySelectorAll('input');
        inputs.forEach(input => input.oninput = () => validateInput(input));
    }

    //Валидация формы при заказе (нажатие на кнопку заказать/оплатить)
    orderForm.addEventListener('click', (event) => handleOrderSubmit(event, formInputs));


    //Отображение цены при клике на checkbox (оплата сразу)
    const checkboxPayMethod = document.querySelector('.checkbox.select-paymethod'),
        submitBtn = document.querySelector('.main__total-price__order-btn'),
        elementToHide = document.querySelector('.select-paymethod__text-info'),
        priceValue = document.querySelector('.price__value');

    checkboxPayMethod.addEventListener('click', () => {
        if (checkboxPayMethod.classList.contains('checkbox_active')) {
            checkboxPayMethod.classList.remove('checkbox_active');
            submitBtn.textContent = `Заказать`;
            elementToHide.style.display = 'block';
        } else {
            checkboxPayMethod.classList.add('checkbox_active');
            submitBtn.textContent = `Оплатить ${formatValue(priceValue.textContent)} сом`;
            elementToHide.style.display = 'none';
        }
    });

}

export default formValidation;