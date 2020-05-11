import React from 'react';
import {useSelector} from 'react-redux';
import List from './List';

import './index.css';

import NewList from './NewList';

export default function Home() {
    const list = useSelector((state) => state.list);
    const total = list.items.reduce((total, item) => total + item.total, 0);

    return (
        <div className="page-container">
            <NewList />
            {list.items.length > 0 && <List list={list.list} total={total} />}
        </div>
    );
}
