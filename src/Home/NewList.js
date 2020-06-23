import React from 'react';
import CustomCard from '../common/CustomCard';
import {useDispatch} from 'react-redux';
import {Creators as ListActions} from '../store/actions/list';

const NewList = () => {
    const dispatch = useDispatch();

    const handleNewList = () => {
        dispatch(ListActions.newList());
    };

    return (
        <CustomCard link="/list/novo" containerClass="new-list-container">
            <div onClick={handleNewList}>
                <p className="title">Adicionar novas listas</p>
            </div>
        </CustomCard>
    );
};
export default NewList;
