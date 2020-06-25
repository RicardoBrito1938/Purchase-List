import {Types} from '../actions/form';

const InitialState = {
    action: 'new',
    listToUpdate: null,
    productToUpdate: {},
};

export default function form(state = InitialState, action) {
    switch (action.type) {
        case Types.START_UPDATE:
            return {
                action: 'update',
                listToUpdate: action.list,
                productToUpdate: action.product,
            };

        case Types.FINISH_UPDATE:
            return {
                action: 'new',
                listToUpdate: null,
                productToUpdate: {},
            };
        default:
            return state;
    }
}