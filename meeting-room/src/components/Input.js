import Label from "./Label";

/**
* @returns {JSX.Element} 
* @module Input
* @param {object} props - Объект props для компонента Input.
* @param {string} props.name - Имя элемента Input.
* @param {string} props.value - Значение элемента Input.
* @param {function} props.onChange - Функция обработчика события onChange для элемента Input.
* @param {string} props.label - Метка для элемента Input.
* @param {string} [props.type='text'] - Тип элемента Input.
* @param {boolean} props.error - Независимо от того, есть ли ошибка при вводе или нет.
* @param {string} props.errorMessage - Сообщение об ошибке.
* @description Пользовательский компонент поля ввода для формы бронирования.
*/
const Input = ({ name, value, onChange, label, type = 'text', error, errorMessage }) => {
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
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder="Выбери..."
        className='meeting-room-form__input meeting-room-form__input--ios'
      />
    </div>
  );
};

export default Input;
