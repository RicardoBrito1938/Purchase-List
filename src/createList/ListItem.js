import React from 'react';
import CustormCard from '../common/CustomCard';
import ListItemFooter from './ListItemFooter';
import {Checkbox, Typography} from '@material-ui/core';

export default function ListItem() {
    return (
        <CustormCard
            link="#"
            image="https://s2.glbimg.com/P6Nn4AXYPq-K1Xek4cCKyONYYyA=/e.glbimg.com/og/ed/f/original/2014/01/15/cafe.jpg"
            containerClass="list-item"
            footer={<ListItemFooter />}>
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
    );
}
