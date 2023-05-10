import React, { useState } from "react";
import Button from "./components/Button";
import DateInput from "./components/DateInput";
import Input from "./components/Input";
import SelectInput from "./components/SelectInput";
import TextArea from "./components/TextArea";
import './MeetingRoomForm.css';

/**
* @returns {JSX.Element} 
* @module MeetingRoomForm
* @description Компонент формы бронировании переговорной.
*/
const MeetingRoomForm = () => {

    /**
    * @memberof module:MeetingRoomForm
    * @type {[Object, Function]}
    * @param {string} tower - Выбранная башня пользователем.
    * @param {string} floor - Выбранный этаж пользователем.
    * @param {string} intercom - Выбранная комната переговорной пользователем.
    * @param {string} date - Выбранная дата встречи пользователем.
    * @param {string} timer - Выбранное время встречи пользователем.
    * @param {string} comment - Коментарии пользователя.
    * @description Состояние полей формы.
    */
    const [formData, setFormData] = useState({
        tower: "",
        floor: "",
        intercom: "",
        date: "",
        time: "",
        comment: ""
    });

    /**
    * @memberof module:MeetingRoomForm
    * @type {[boolean, Function]} 
    * @description Состояние ошибок формы.
    */
    const [error, setError] = useState(false);

    /**
    * @memberof module:MeetingRoomForm
    * @type {[boolean, Function]} 
    * @description Состояние ошибки даты.
    */
    const [errorDate, setErrorDate] = useState(false);

    /**
    * @memberof module:MeetingRoomForm
    * @param {React.FocusEvent<HTMLInputElement>} event - Событие, запускаемое в поле ввода, когда оно теряет фокус.
    * @description Метод проверки того, являются ли выбранные данные действительными или нет, и обновления на основе данных и состояний ошибок соответствующим образом.
    */
    const checkDate = (event) => {
        const selectedDateTime = new Date(event.target.value);
        const currentDateTime = new Date();

        if (selectedDateTime < currentDateTime) {
            setErrorDate(true);
            setFormData({...formData, date: ''});
        } else {
            setErrorDate(false);
        }
    };

    /**
    * @memberof module:MeetingRoomForm
    * @param {React.ChangeEvent<HTMLInputElement>} event - Событие, запущенное в поле ввода.
    * @description Способ обработки изменений поля ввода и установки значений в состояние данных формы.
    */
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (value.length === 0) return;
        setFormData({ ...formData, [name]: value });
    };

    /**
    * @memberof module:MeetingRoomForm
    * @param {React.FormEvent<HTMLFormElement>} event - Событие, запущенное при отправке формы.
    * @description Способ предотвращения отправки формы по умолчанию, проверяет наличие обязательных полей и регистрирует значения состояния данных формы.
    */
    const handleSubmit = (event) => {
        event.preventDefault();

        const requiredFields = ['tower', 'floor', 'intercom', 'date', 'time'];
        const missingFields = requiredFields.filter(field => !formData[field]);
        if (missingFields.length > 0) {
            setError(true);
            return;
        };

        console.log(formData);
        setError(false);
    };

    /**
    * @memberof module:MeetingRoomForm
    * @description Метод очищает все поля стейта.
    */
    const handleClear = () => {
        setFormData({
            tower: "",
            floor: "",
            intercom: "",
            date: "",
            time: "",
            comment: ""
        });
    };

    /**
    * @memberof module:MeetingRoomForm
    * @type {Array.<{label: string, value: string}>} 
    * @description Параметры для поля выбора башни.
    */
    const towerOptions = [
        { label: 'Башня A', value: 'A' },
        { label: 'Башня B', value: 'B' },
    ];

    /**
    * @memberof module:MeetingRoomForm
    * @type {Array<Object>}
    * @description Массив объектов, представляющих параметры для ввода выбора этажа.
    */
    const floorOptions = [...Array(25)].map((_, i) => ({
        label: `Этаж ${i + 3}`,
        value: `${i + 3}`,
    }));

    /**
    * @memberof module:MeetingRoomForm
    * @type {Array<Object>}
    * @description Массив объектов, представляющих параметры для ввода выбора комнаты.
    */
    const intercomOptions = [...Array(10)].map((_, i) => ({
        label: `Комната ${i + 1}`,
        value: `${i + 1}`,
    }));

    /**
    * @memberof module:MeetingRoomForm
    * @type {JSX.Element}
    * @description Элемент JSX, представляющий форму бронирования конференц-зала.
    */
    return (
        <form
            className='form meeting-room-form'
            onSubmit={handleSubmit}
        >
            <h1 
                className='meeting-room__heading'
            >
                Форма бронирования переговорной
            </h1>
            <SelectInput
                name='tower'
                value={formData.tower}
                onChange={handleInputChange}
                options={towerOptions}
                label='Башня'
                error={error && !formData.tower}
            />
            <SelectInput 
                name='floor'
                value={formData.floor}
                onChange={handleInputChange}
                options={floorOptions}
                label='Этаж'
                error={error && !formData.floor}
            />
            <SelectInput 
                name='intercom'
                value={formData.intercom}
                onChange={handleInputChange}
                options={intercomOptions}
                label='Комната'
                error={error && !formData.intercom}
            />
            <DateInput
                name='date'
                value={formData.date}
                onChange={handleInputChange}
                label='Дата встречи'
                onBlur={checkDate}
                error={(error || errorDate) && !formData.date}
                errorMessage='Указана некоректная дата'
            />
            <Input
                name='time'
                value={formData.time}
                onChange={handleInputChange}
                label='Время встречи'
                type='time'
                error={error && !formData.time}
            />
            <TextArea 
                name='comment'
                value={formData.comment}
                onChange={handleInputChange}
                label='Комментарий'
                rows={3}
                error={error && !formData.comment}    
            />
            <div 
                className='button-container'
            >
                <Button
                    type='submit'
                >
                    Отправить
                </Button>
                <Button
                    type='button'
                    onClick={handleClear}
                >
                    Очистить
                </Button>
            </div>
        </form>
    );
};

export default MeetingRoomForm;
