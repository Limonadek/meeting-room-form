import Label from "./Label";

/**
* @returns {JSX.Element} 
* @module SelectInput
* @param {object} props - Объект props для компонента SelectInput.
* @param {string} props.name - Имя элемента SelectInput.
* @param {string} props.value - Значение элемента SelectInput.
* @param {Array<object>} props.options - Массив параметров для отображения в SelectInput.
* @param {function} props.onChange - Функция обработчика события onChange для элемента SelectInput.
* @param {string} props.label - Метка для элемента SelectInput.
* @param {boolean} props.error - Независимо от того, есть ли ошибка при вводе или нет.
* @param {string} props.errorMessage - Сообщение об ошибке.
* @description Пользовательский компонент выборки элемента для формы бронирования.
*/
const SelectInput = ({ name, value, options, onChange, label, error, errorMessage }) => {
  return (
    <div 
      className='field'
    >
      <Label 
          label={label} 
          error={error}
          errorMessage={errorMessage}
      />
      <select
        name={name}
        value={value}
        onChange={onChange}
        className='meeting-room-form__input'
      >
        <option value='' disabled>Выбери...</option>
        {options.map((option, i) => (
          <option key={i} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
