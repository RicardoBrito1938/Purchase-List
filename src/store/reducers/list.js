import {Types} from '../actions/list';
import uuidv1 from 'uuid/dist/v1';

const initialState = {
    list: null,
    items: [],
};

export default function list(state = initialState, action) {
    switch (action.type) {
        case Types.ADD_PRODUCT:
            return {
                list: action.list,
                items: [
                    ...state.items,
                    {
                        ...action.product,
                        total: getItemTotal(action.product),
                        id: uuidv1(),
                        checked: false,
                    },
                ],
            };
        case Types.DELETE_PRODUCT:
            return {
                ...state,
                items: state.items.filter(
                    (item) => item.id !== action.productId,
                ),
            };
        case Types.TOOGLE_PRODUCT:
            return {
                ...state,
                items: toogleItem(state.items, action.productId),
            };
        default:
            return state;
    }
}

function getItemTotal(product) {
    return product.price * product.quantity;
}

//ache o item para ser modificado
const toogleItem = (items, productId) => {
    const index = items.findIndex((item) => item.id === productId);
    return [
        ...items.slice(0, index), //todos os items antes  do item a ser modificado
        {...items[index], checked: !items[index].checked}, // item atualizado
        ...items.slice(index + 1), //todos os items depois do item  a ser modificado
    ];
};
