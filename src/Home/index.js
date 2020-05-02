import React from 'react';
import List from './List';

import './index.css';

import NewList from './NewList';

export default function Home() {
    return (
        <div className="page-container">
            <NewList />
            <List />
        </div>
    );
}
