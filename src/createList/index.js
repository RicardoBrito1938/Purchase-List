import React from 'react';
import Form from './Form';
import ListItem from './ListItem';
import {useSelector} from 'react-redux';

import './List.css';

export default function CreateList() {
    const list = useSelector((state) => state.list);

    return (
        <div className="page-container">
            <Form />
            <div className="list-items-container">
                {list.items.map((item) => (
                    <ListItem item={item} key={item.product} />
                ))}
            </div>
        </div>
    );
}
