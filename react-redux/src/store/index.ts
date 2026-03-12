import { createStore } from 'redux';

const initialState = {
    owner: 'RATSIMISETA Andry Lalaina',
    globalMessage: 'Welcome to the Contact Me page!'
};

interface ActionType {
    type: string;
    payload?: null;
}

const reducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case 'SET_OWNER':
            return {
                ...state,
                owner: action.payload
            };
        case 'SET_GLOBAL_MESSAGE':
            return {
                ...state,
                globalMessage: action.payload
            };
        default:
            return state;
    }
};

export const store = createStore(reducer);