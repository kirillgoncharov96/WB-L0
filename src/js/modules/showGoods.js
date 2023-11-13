import { Data } from "../data/data";


const showGoods = () => {

    Data.map((item) => {
        let card = document.createElement("div");

        if (item.id === 1) {
            card.classList.add(`product__card`, `item-${item.id}`)
            card.innerHTML = `
            <div class="item-${item.id}__details">
                <button
                    class="checkbox product-card"
                    type="button"
                ></button>
                <div class="item-${item.id}__details__img">
                    <img
                        src=${item.img}
                        alt="Изображение товара футболка"
                    />
                    <div
                        class="item-${item.id}__details__img-prop"
                    >
                        56
                    </div>
                </div>
                <div class="product__card__info">
                    <h6 class="product__card__title">
                        ${item.title}
                    </h6>
                    <div
                        class="product__card__description"
                    >
                        <p
                            class="product__card__description-text"
                        >
                            ${item.description.color}
                        </p>
                        <p
                            class="product__card__description-text"
                        >
                            ${item.description.size}
                        </p>
                    </div>
                    <p class="product__card__location">
                        ${item.location}
                    </p>
                    <div
                        class="product__card__legal-entity"
                    >
                        <p
                            class="product__card__legal-entity-name"
                        >
                            ${item.legalEntity}
                        </p>
                        <button
                            class="info tooltip__trigger"
                            type="button"
                        >
                            <div class="tooltip">
                                <span
                                    class="tooltip__title"
                                >
                                    ${item.tooltip.tooltipTitle}
                                </span>
                                <span
                                    class="tooltip__text"
                                >
                                    ${item.tooltip.tooltipText}
                                </span>
                                <span
                                    class="tooltip__text"
                                >
                                    ${item.tooltip.tooltipAdress}
                                </span>
                            </div>
                        </button>
                    </div>
                </div>
                <div
                    class="product__card__quantity-goods"
                >
                    <div
                        class="product__card__quantity-goods__selector selector__counter"
                    >
                        <button
                            class="selector__counter-minus"
                            type="button"
                        >
                            <span>-</span>
                        </button>
                        <input
                            type="text"
                            class="selector__counter-number"
                            min="1"
                            maxlength="3"
                            value=${item.quantityStart}
                            onkeypress="return event.charCode >= 48 && event.charCode <= 57"
                        />
                        <button
                            class="selector__counter-plus"
                            type="button"
                        >
                            <span>+</span>
                        </button>
                    </div>
                    <span
                        class="product__card__quantity-goods__text-caption"
                        >Осталось ${item.remainingGoods} шт.</span
                    >
                    <div
                        class="product__card__quantity-goods__icons control-buttons"
                    >
                        <button
                            class="control-buttons__favorite"
                            type="button"
                        ></button>
                        <button
                            class="control-buttons__delete"
                            type="button"
                        ></button>
                    </div>
                </div>
                <div class="product__card__price">
                    <div
                        class="product__card__price__with-discount"
                    >
                        <p class="product__card__value">
                        ${item.priceDiscount}
                        </p>
                        <span
                            class="product__card__currency"
                            >сом</span
                        >
                    </div>
                    <button
                        type="button"
                        class="product__card__price-full discount"
                    >
                        <span
                            class="discount__value tooltip__trigger"
                        >
                            ${item.price} сом
                        </span>
                        <div
                            class="tooltip tooltip__info-price"
                        >
                            <div
                                class="tooltip__info-price__disc-shop"
                            >
                                <span
                                    class="tooltip__disc"
                                    >Скидка 55%</span
                                >
                                <span
                                    class="tooltip__value"
                                    >−300 сом</span
                                >
                            </div>
                            <div
                                class="tooltip__info-price__disc-personal"
                            >
                                <span
                                    class="tooltip__disc"
                                    >Скидка покупателя
                                    10%</span
                                >
                                <span
                                    class="tooltip__value"
                                    >−30 сом</span
                                >
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        `;
        } else if (item.id === 2) {
            card.classList.add(`product__card`, `item-${item.id}`)

            card.innerHTML = `
                <div class="item-${item.id}__details">
                    <button
                        class="checkbox product-card"
                        type="button"
                    ></button>
                    <div class="item-${item.id}__details__img">
                        <img
                            src=${item.img}
                            alt="Изображение товара футболка"
                        />
                    </div>
                    <div class="product__card__info">
                        <h6 class="product__card__title">
                            ${item.title}
                        </h6>
                        <div
                            class="product__card__description"
                        >
                            <p
                                class="product__card__description-text"
                            >
                                ${item.description.color}
                            </p>
                        </div>
                        <p class="product__card__location">
                            ${item.location}
                        </p>
                        <div
                            class="product__card__legal-entity"
                        >
                            <p
                                class="product__card__legal-entity-name"
                            >
                                ${item.legalEntity}
                            </p>
                            <button
                                class="info tooltip__trigger"
                                type="button"
                            >
                                <div class="tooltip">
                                    <span
                                        class="tooltip__title"
                                    >
                                        ${item.tooltip.tooltipTitle}
                                    </span>
                                    <span
                                        class="tooltip__text"
                                    >
                                        ${item.tooltip.tooltipText}
                                    </span>
                                    <span
                                        class="tooltip__text"
                                    >
                                        ${item.tooltip.tooltipAdress}
                                    </span>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div
                        class="product__card__quantity-goods"
                    >
                        <div
                            class="product__card__quantity-goods__selector selector__counter"
                        >
                            <button
                                class="selector__counter-minus"
                                type="button"
                            >
                                <span>-</span>
                            </button>
                            <input
                                type="text"
                                class="selector__counter-number"
                                min="1"
                                maxlength="3"
                                value=${item.quantityStart}
                                onkeypress="return event.charCode >= 48 && event.charCode <= 57"
                            />
                            <button
                                class="selector__counter-plus"
                                type="button"
                            >
                                <span>+</span>
                            </button>
                        </div>
                        <div
                            class="product__card__quantity-goods__icons control-buttons"
                        >
                            <button
                                class="control-buttons__favorite"
                                type="button"
                            ></button>
                            <button
                                class="control-buttons__delete"
                                type="button"
                            ></button>
                        </div>
                    </div>
                    <div class="product__card__price">
                        <div
                            class="product__card__price__with-discount"
                        >
                            <p class="product__card__value">
                            2 300 041
                            </p>
                            <span
                                class="product__card__currency"
                                >сом</span
                            >
                        </div>
                        <button
                            type="button"
                            class="product__card__price-full discount"
                        >
                            <span
                                class="discount__value tooltip__trigger"
                            >
                                ${item.price} сом
                            </span>
                            <div
                                class="tooltip tooltip__info-price"
                            >
                                <div
                                    class="tooltip__info-price__disc-shop"
                                >
                                    <span
                                        class="tooltip__disc"
                                        >Скидка 55%</span
                                    >
                                    <span
                                        class="tooltip__value"
                                        >−300 сом</span
                                    >
                                </div>
                                <div
                                    class="tooltip__info-price__disc-personal"
                                >
                                    <span
                                        class="tooltip__disc"
                                        >Скидка покупателя
                                        10%</span
                                    >
                                    <span
                                        class="tooltip__value"
                                        >−30 сом</span
                                    >
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            `;
        } else {
            card.classList.add(`product__card`, `item-${item.id}`)
            card.innerHTML = `
                <div class="item-${item.id}__details">
                    <button
                        class="checkbox product-card"
                        type="button"
                    ></button>
                    <div class="item-${item.id}__details__img">
                        <img
                            src=${item.img}
                            alt="Изображение товара футболка"
                        />
                    </div>
                    <div class="product__card__info">
                        <h6 class="product__card__title">
                            ${item.title}
                        </h6>
                        <p class="product__card__location">
                            ${item.location}
                        </p>
                        <div
                            class="product__card__legal-entity"
                        >
                            <p
                                class="product__card__legal-entity-name"
                            >
                                ${item.legalEntity}
                            </p>
                            <button
                                class="info tooltip__trigger"
                                type="button"
                            >
                                <div class="tooltip">
                                    <span
                                        class="tooltip__title"
                                    >
                                        ${item.tooltip.tooltipTitle}
                                    </span>
                                    <span
                                        class="tooltip__text"
                                    >
                                        ${item.tooltip.tooltipText}
                                    </span>
                                    <span
                                        class="tooltip__text"
                                    >
                                        ${item.tooltip.tooltipAdress}
                                    </span>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div
                        class="product__card__quantity-goods"
                    >
                        <div
                            class="product__card__quantity-goods__selector selector__counter"
                        >
                            <button
                                class="selector__counter-minus"
                                type="button"
                            >
                                <span>-</span>
                            </button>
                            <input
                                type="text"
                                class="selector__counter-number"
                                min="1"
                                maxlength="3"
                                value=${item.quantityStart}
                                onkeypress="return event.charCode >= 48 && event.charCode <= 57"
                            />
                            <button
                                class="selector__counter-plus"
                                type="button"
                            >
                                <span>+</span>
                            </button>
                        </div>
                        <span
                            class="product__card__quantity-goods__text-caption"
                        >   
                            Осталось ${item.remainingGoods} шт.
                        </span>
                        <div
                            class="product__card__quantity-goods__icons control-buttons"
                        >
                            <button
                                class="control-buttons__favorite"
                                type="button"
                            ></button>
                            <button
                                class="control-buttons__delete"
                                type="button"
                            ></button>
                        </div>
                    </div>
                    <div class="product__card__price">
                        <div
                            class="product__card__price__with-discount"
                        >
                            <p class="product__card__value">
                            ${item.priceDiscount}
                            </p>
                            <span
                                class="product__card__currency"
                                >сом</span
                            >
                        </div>
                        <button
                            type="button"
                            class="product__card__price-full discount"
                        >
                            <span
                                class="discount__value tooltip__trigger"
                            >
                                ${item.price} сом
                            </span>
                            <div
                                class="tooltip tooltip__info-price"
                            >
                                <div
                                    class="tooltip__info-price__disc-shop"
                                >
                                    <span
                                        class="tooltip__disc"
                                        >Скидка 55%</span
                                    >
                                    <span
                                        class="tooltip__value"
                                        >−300 сом</span
                                    >
                                </div>
                                <div
                                    class="tooltip__info-price__disc-personal"
                                >
                                    <span
                                        class="tooltip__disc"
                                        >Скидка покупателя
                                        10%</span
                                    >
                                    <span
                                        class="tooltip__value"
                                        >−30 сом</span
                                    >
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            `;
        }

        document.querySelector('.product__card__wrapper').appendChild(card);


    });

    Data.map((item) => {
        let cardMiss = document.createElement("div");

        if (item.id === 1) {
            cardMiss.classList.add(`product__card__absent`, `item-${item.id}`)
            cardMiss.innerHTML = `
                <div class="item-${item.id}__details">
                    <div class="item-${item.id}__details__img">
                        <img
                            src=${item.img}
                            alt="Изображение товара футболка"
                        />
                        <div
                            class="item-${item.id}__details__img-prop"
                        >
                            56
                        </div>
                    </div>
                    <div class="product__card__info">
                        <h6 class="product__card__title">
                            ${item.title}
                        </h6>
                        <div
                            class="product__card__description"
                        >
                            <p
                                class="product__card__description-text"
                            >
                                ${item.description.color}
                            </p>
                            <p
                                class="product__card__description-text"
                            >
                                ${item.description.size}
                            </p>
                        </div>
                    </div>
                    <div
                        class="product__card__quantity-goods"
                    >
                        <div
                            class="product__card__quantity-goods__icons control-buttons"
                        >
                            <button
                                class="control-buttons__favorite"
                                type="button"
                            ></button>
                            <button
                                class="control-buttons__delete"
                                type="button"
                            ></button>
                        </div>
                    </div>
                </div>
            `;
        } else if (item.id === 2) {
            cardMiss.classList.add(`product__card__absent`, `item-${item.id}`)
            cardMiss.innerHTML = `
                <div class="item-${item.id}__details">
                    <div class="item-${item.id}__details__img">
                        <img
                            src=${item.img}
                            alt="Изображение товара футболка"
                        />
                    </div>
                    <div class="product__card__info">
                        <h6 class="product__card__title">
                            ${item.title}
                        </h6>
                        <div
                            class="product__card__description"
                        >
                            <p
                                class="product__card__description-text"
                            >
                                ${item.description.color}
                            </p>
                        </div>
                    </div>
                    <div
                        class="product__card__quantity-goods"
                    >
                        <div
                            class="product__card__quantity-goods__icons control-buttons"
                        >
                            <button
                                class="control-buttons__favorite"
                                type="button"
                            ></button>
                            <button
                                class="control-buttons__delete"
                                type="button"
                            ></button>
                        </div>
                    </div>
                </div>
            `;
        } else {
            cardMiss.classList.add(`product__card__absent`, `item-${item.id}`)
            cardMiss.innerHTML = `
                <div class="item-${item.id}__details">
                    <div class="item-${item.id}__details__img">
                        <img
                            src=${item.img}
                            alt="Изображение товара футболка"
                        />
                        <div
                            class="item-${item.id}__details__img-prop"
                        >
                            56/54/52...
                        </div>
                    </div>
                    <div class="product__card__info">
                        <h6 class="product__card__title">
                            ${item.title}
                        </h6>
                    </div>
                    <div
                        class="product__card__quantity-goods"
                    >
                        <div
                            class="product__card__quantity-goods__icons control-buttons"
                        >
                            <button
                                class="control-buttons__favorite"
                                type="button"
                            ></button>
                            <button
                                class="control-buttons__delete"
                                type="button"
                            ></button>
                        </div>
                    </div>
                </div>
            `;
        }


        document.querySelector('.product__card__wrapper__absent').appendChild(cardMiss);

    });



}

export default showGoods;