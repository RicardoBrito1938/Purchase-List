import React from 'react';
import Form from './Form';
import CustormCard from '../common/CustomCard';
import {Checkbox, Typography} from '@material-ui/core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPen, faTrash} from '@fortawesome/free-solid-svg-icons';

import './List.css';

const createList = () => (
    <div className="page-container">
        <Form />
        <div className="list-items-container">
            <CustormCard link="#" containerClass="list-item">
                <div>
                    <div className="list-item-header">
                        <Typography variant="subtitle1" component="h2">
                            Coffe
                        </Typography>
                        <Checkbox />
                    </div>
                    <Typography component="p">1 unit</Typography>
                    <Typography component="p">R$12,00</Typography>
                </div>
            </CustormCard>
        </div>
    </div>
);

const ListItemFooter = () => {
    return (
        <div className="list-item-footer">
            <div className="list-card-footer-actions"></div>
            <p>Total = R$50,00</p>
        </div>
    );
};

export default createList;
