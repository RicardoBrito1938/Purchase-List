import {Types} from '../actions/form';

const InitialState = {
    action: 'new',
    productToUpdate: {},
};

export default function form(state = InitialState, action) {
    switch (action.type) {
        case Types.START_UPDATE:
            return {
                action: 'update',
                productToUpdate: action.product,
            };
        default:
            return state;
    }
}
