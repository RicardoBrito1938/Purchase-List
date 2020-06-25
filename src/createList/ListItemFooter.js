import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPen, faTrash} from '@fortawesome/free-solid-svg-icons';
import {useDispatch} from 'react-redux';
import {Creators as ListActions} from '../store/actions/list';
import {Creators as FormActions} from '../store/actions/form';

export default function ListItemFooter({item, list}) {
    const dispatch = useDispatch();

    return (
        <div className="list-item-footer">
            <div className="list-card-footer-actions">
                <FontAwesomeIcon
                    onClick={() => {
                        dispatch(FormActions.startUpdate(list, item));
                    }}
                    icon={faPen}
                    color="#00b0ff"
                    size="1x"
                />
                <FontAwesomeIcon
                    onClick={() => {
                        dispatch(ListActions.deleteProduct(item.id));
                    }}
                    icon={faTrash}
                    color="#e91e63"
                    size="1x"
                />
            </div>
            <p>Total = R${item.total}</p>
        </div>
    );
}
