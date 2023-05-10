/**
* @returns {JSX.Element} 
* @module TextArea
* @param {object} props - Объект props для компонента TextArea.
* @param {string} props.name - Имя элемента TextArea.
* @param {string} props.value - Значение элемента TextArea.
* @param {function} props.onChange - Функция обработчика события onChange для элемента TextArea.
* @param {string} props.label - Метка для элемента TextArea.
* @param {number} props.rows - Количество строк, отображаемых в элементе TextArea.
* @description Пользовательский компонент текстовой области для формы бронирования.
*/
const TextArea = ({ name, value, onChange, label, rows }) => {
    return (
        <div 
            className='field'
        >
            <label 
                className='meeting-room-form__label'
            >
                {label}
            </label>
            <textarea
                name={name}
                value={value}
                onChange={onChange}
                rows={rows}
                className='meeting-room-form__textarea '
            />
        </div>
    );
};

export default TextArea;
