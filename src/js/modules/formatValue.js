
//Функция задает необходимый формат цены с пробелами (по типу 100 000, 10 000, 1 000)
const formatValue = (number, space = ' ') => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, space);
}

export default formatValue;