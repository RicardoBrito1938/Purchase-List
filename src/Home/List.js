import React from 'react';
import {faShoppingBasket, faCheck} from '@fortawesome/free-solid-svg-icons';

import CustomCard from '../common/CustomCard';
import ListFooter from './ListFooter';
import ListItem from './ListItem';

import './List.css';

const List = () => (
    <CustomCard containerClass="list-container" footer={<ListFooter />}>
        <div>
            <p className="title">Month</p>
            <div className="list-card-body">
                <div className="list-card-item">
                    <ListItem icon={faShoppingBasket} text="1 remaining item" />
                    <ListItem icon={faCheck} size="2 items on cart" />
                </div>
            </div>
        </div>
    </CustomCard>
);

export default List;
