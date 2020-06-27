import React from 'react';
import CustormCard from '../common/CustomCard';
import ListItemFooter from './ListItemFooter';
import {Checkbox, Typography} from '@material-ui/core';
import {useDispatch} from 'react-redux';
import {Creators as ListActions} from '../store/actions/list';

export default function ListItem({item}) {
    const dispatch = useDispatch();

    return (
        <CustormCard
            link="#"
            image={item.img}
            containerClass="list-item"
            footer={<ListItemFooter item={item} />}>
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
