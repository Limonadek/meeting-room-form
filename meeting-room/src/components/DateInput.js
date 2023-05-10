import Label from './Label';

/**
* @returns {JSX.Element} 
* @module DateInput
* @param {object} props - Объект props для компонента DateInput.
* @param {string} props.name - Имя элемента DateInput.
* @param {string} props.value - Значение элемента DateInput.
* @param {function} props.onChange - Функция обработчика события onChange для элемента DateInput.
* @param {string} props.label - Метка для элемента DateInput.
* @param {function} props.onBlur - Функция, вызываемая, когда поле ввода теряет фокус.
* @param {boolean} props.error - Независимо от того, есть ли ошибка при вводе или нет.
* @param {string} props.errorMessage - Сообщение об ошибке.
* @description Пользовательский компонент Даты времени для формы бронирования.
*/
const DateInput = ({ name, value, onChange, label, onBlur, error, errorMessage }) => {
  return ( 
    <div 
      className='field'
    >
      <Label 
        label={label} 
        error={error}
        errorMessage={errorMessage}
      />
      <input
        onBlur={onBlur}
        type='date'
        name={name}
        value={value}
        onChange={onChange}
        className='meeting-room-form__input meeting-room-form__input--ios'
        pattern='[0-9]{2}-[0-12]-[0-9]{4}'
      />
    </div>
  );
};
  
export default DateInput;
