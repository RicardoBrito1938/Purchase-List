import React from 'react';
import CustormCard from '../common/CustomCard';
import ListItemFooter from './ListItemFooter';
import {Checkbox, Typography} from '@material-ui/core';

export default function ListItem({item}) {
    return (
        <CustormCard
            link="#"
            image="https://s2.glbimg.com/P6Nn4AXYPq-K1Xek4cCKyONYYyA=/e.glbimg.com/og/ed/f/original/2014/01/15/cafe.jpg"
            containerClass="list-item"
            footer={<ListItemFooter total={item.total} />}>
            <div>
                <div className="list-item-header">
                    <Typography variant="subtitle1" component="h2">
                        {item.product}
                    </Typography>
                    <Checkbox />
                </div>
                <Typography component="p">
                    {item.quantity} {item.unit}
                </Typography>
                <Typography component="p">R$ {item.price}</Typography>
            </div>
        </CustormCard>
    );
}
