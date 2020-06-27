import {call, put} from 'redux-saga/effects';
import {services} from '../services';
import {Creators as ListActions} from '../actions/list';

const genericImg =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR0xMyElHnbRs6NyA-7vvHEaQkXbv1pjDVv9w&usqp=CAU';

export function* getImageRequest(action) {
    try {
        const img = yield call(services.getImages, action.product.product);
        yield put(ListActions.getImageSuccess(action.product, img));
    } catch (err) {
        console.log(err);
        yield put(ListActions.getImageFailure(action.product, genericImg));
    }
}
