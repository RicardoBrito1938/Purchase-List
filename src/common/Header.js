import React from 'react';
import {AppBar} from '@material-ui/core';
import {Link} from 'react-router-dom';

export default function Header() {
    return (
        <AppBar position="static" color="primary">
            <div className="header">
                <Link to="/">
                    <p className="title text-left">Purchase List</p>
                </Link>
            </div>
        </AppBar>
    );
}
