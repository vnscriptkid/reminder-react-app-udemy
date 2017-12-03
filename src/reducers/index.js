import {ADD_REMINDER, REMOVE_REMINDER} from '../constants';

export const remindersReducer = (state = [], action) => {
    switch(action.type) {
        case ADD_REMINDER:            
            return [
                ...state, 
                {
                    text: action.text,
                    datetime: action.datetime,
                    id: Math.floor(Math.random() * 100000)
                }
            ]
        case REMOVE_REMINDER: 
            return state.filter((e) => e.id !== action.id);
        default: 
            return state;
    }
}