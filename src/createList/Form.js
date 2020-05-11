import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {Creators as ListActions} from '../store/actions/list';
import {TextField, MenuItem, InputAdornment, Button} from '@material-ui/core';

export default function Form() {
    const units = ['kg', 'lt', 'un'];

    const [list, setList] = useState('');
    const [product, setProduct] = useState('');
    const [quantity, setQuantity] = useState('');
    const [unit, setUnit] = useState('');
    const [price, setPrice] = useState('');
    const [showErrors, setShowErrors] = useState(false);

    const dispatch = useDispatch();

    const handleSubmtit = () => {
        if (!list || !product || !quantity || !unit) {
            setShowErrors(true);
        } else {
            dispatch(
                ListActions.addProduct({product, quantity, unit, price}, list),
            );
            setList('');
            setProduct('');
            setQuantity('');
            setUnit('');
            setPrice('');
            setShowErrors(true);
        }
    };

    return (
        <form className="form-container">
            <div className="form-row">
                <TextField
                    label="List"
                    name="list"
                    value={list}
                    onChange={(e) => setList(e.target.value)}
                    required
                    error={!list && showErrors}
                />
                <Button
                    variant="outlined"
                    onClick={handleSubmtit}
                    color="secondary">
                    Add
                </Button>
            </div>
            <div className="form-row">
                <TextField
                    label="Product"
                    name="product"
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}
                    required
                    error={!product && showErrors}
                />
                <TextField
                    label="Quantity"
                    name="quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    required
                    error={!quantity && showErrors}
                />
                <TextField
                    select
                    label="Unit"
                    name="unit"
                    value={unit}
                    onChange={(e) => setUnit(e.target.value)}
                    required
                    error={!unit && showErrors}>
                    {units.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    label="Price"
                    name="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">R$</InputAdornment>
                        ),
                    }}
                />
            </div>
        </form>
    );
}
