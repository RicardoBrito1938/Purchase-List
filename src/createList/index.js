import React from 'react';
import Form from './Form';
import ListItem from './ListItem';
import NewItem from './NewItem';
import {useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';

import './List.css';

export default function CreateList() {
    let {action} = useParams();
    const list = useSelector((state) => state.list);

    return (
        <div className="page-container">
            <Form url={action} />
            <div className="list-items-container">
                {list.items.map((item) => (
                    <ListItem item={item} key={item.id} />
                ))}
                {action === 'edicao' && <NewItem list={list.list} />}
            </div>
        </div>
    );
}
