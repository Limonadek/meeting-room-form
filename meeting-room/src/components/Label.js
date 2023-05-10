/**
* @returns {JSX.Element}
* @module Label
* @param {object} props - Объект props для компонента Label.
* @param {string} label - Текст для Label
* @param {boolean} props.error - Независимо от того, есть ли ошибка при вводе или нет.
* @param {string} props.errorMessage - Сообщение об ошибке.
* @description Компонент Label для отображения метки для ввода в форму и необязательного сообщения об ошибке.
*/
const Label = ({ label, error, errorMessage = 'Это поле обязательно для заполнения' }) => {
    return ( 
        <label 
            className='meeting-room-form__label'
        >
            {label}
            {error && 
            <span 
                className='meeting-room-form__input--error'
            >
                {errorMessage}
            </span>}
        </label>
    );
};
  
export default Label;
