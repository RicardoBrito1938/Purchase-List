import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import {useDispatch} from 'react-redux';

import CustomCard from '../common/CustomCard';
import {Creators as FormActions} from '../store/actions/form';

const NewItem = ({list}) => {
    const dispatch = useDispatch();
    const handleAddList = () => {
        dispatch(FormActions.startAdd(list));
    };

    return (
        <CustomCard link="#" containerClass="list-item">
            <div onClick={handleAddList} className="new-item">
                <p className="title">New Product</p>
                <FontAwesomeIcon
                    icon={faPlusCircle}
                    color="#e4e4e4"
                    size="8x"
                />
            </div>
        </CustomCard>
    );
};

export default NewItem;
