import React from 'react';
import {faShoppingBasket, faCheck} from '@fortawesome/free-solid-svg-icons';

import CustomCard from '../common/CustomCard';
import ListFooter from './ListFooter';
import ListItem from './ListItem';

import './List.css';

export default function List({list, total, closedItems, openItems}) {
    return (
        <CustomCard
            containerClass="list-container"
            link="/list"
            footer={<ListFooter total={total} />}>
            <div>
                <p className="title">{list}</p>
                <div className="list-card-body">
                    <ListItem
                        icon={faShoppingBasket}
                        text={`${openItems} open`}
                    />
                    <ListItem icon={faCheck} text={`${closedItems} on cart`} />
                </div>
            </div>
        </CustomCard>
    );
}
