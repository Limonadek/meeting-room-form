/**
* @returns {JSX.Element}
* @module Button
* @param {object} props - Объект props для компонента Button.
* @param {ReactNode} props.children - Дочерние компоненты Button.
* @param {string} props.type - Тип элемента Button.
* @param {function} props.onClick - Функция обработчика щелчка кнопки.
* @description Пользовательский компонент кнопки для формы бронирования.
*/
const Button = ({ children, type, onClick }) => {
    return (
        <button
            className='button'
            type={type}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
