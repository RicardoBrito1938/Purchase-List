import React from 'react';
import {AppBar} from '@material-ui/core';

export default function Header() {
    return (
        <AppBar position="static" color="primary">
            <div className="header">
                <p className="title">Purchase List</p>
            </div>
        </AppBar>
    );
}
