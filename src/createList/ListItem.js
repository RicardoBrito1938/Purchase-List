import React from 'react';
import CustormCard from '../common/CustomCard';
import ListItemFooter from './ListItemFooter';
import {Checkbox, Typography} from '@material-ui/core';
import {useDispatch} from 'react-redux';
import {Creators as ListActions} from '../store/actions/list';

export default function ListItem({item, list}) {
    const dispatch = useDispatch();

    return (
        <CustormCard
            link="#"
            image="https://s2.glbimg.com/P6Nn4AXYPq-K1Xek4cCKyONYYyA=/e.glbimg.com/og/ed/f/original/2014/01/15/cafe.jpg"
            containerClass="list-item"
            footer={<ListItemFooter list={list} item={item} />}>
            <div>
                <div className="list-item-header">
                    <Typography variant="subtitle1" component="h2">
                        {item.product}
                    </Typography>
                    <Checkbox
                        onClick={() =>
                            dispatch(ListActions.toogleProduct(item.id))
                        }
                        checked={item.checked}
                    />
                </div>
                <Typography component="p">
                    {item.quantity} {item.unit}
                </Typography>
                <Typography component="p">R$ {item.price}</Typography>
            </div>
        </CustormCard>
    );
}
