import React from 'react';
import Form from './Form';
import ListItem from './ListItem';

import './List.css';

const createList = () => (
    <div className="page-container">
        <Form />
        <div className="list-items-container">
            <ListItem />
        </div>
    </div>
);

export default createList;
