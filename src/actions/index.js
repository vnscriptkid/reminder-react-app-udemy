import { ADD_REMINDER, REMOVE_REMINDER } from '../constants';

export const addReminder = ({text = '', datetime = 0} = {}) => {
    const action = {
        type: ADD_REMINDER,
        text,
        datetime
    }
    console.log('action in addReminder', action);
    return action;
}

export const removeReminder = (id) => {
    return {
        type: REMOVE_REMINDER,
        id: id
    }
}