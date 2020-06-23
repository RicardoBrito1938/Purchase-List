import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Creators as ListActions} from '../store/actions/list';
import {Creators as FormActions} from '../store/actions/form';

import {TextField, MenuItem, InputAdornment, Button} from '@material-ui/core';

export default function Form({url}) {
    const units = ['kg', 'lt', 'un'];

    const [list, setList] = useState('');
    const [product, setProduct] = useState('');
    const [quantity, setQuantity] = useState('');
    const [unit, setUnit] = useState('');
    const [price, setPrice] = useState('');
    const [showErrors, setShowErrors] = useState(false);

    const dispatch = useDispatch();
    const form = useSelector((state) => state.form);
    const showForm = form.action === 'update' || url === 'novo';

    useEffect(() => {
        if (form.action === 'update') {
            const {product, quantity, unit, price} = form.productToUpdate;
            setProduct(product);
            setQuantity(quantity);
            setUnit(unit);
            setPrice(price);
        }
    }, [form.action, form.productToUpdate]);

    const handleSubmtit = () => {
        if (!list || !product || !quantity || !unit) {
            setShowErrors(true);
        } else {
            form.action === 'new'
                ? addItem(list, product, quantity, unit, price)
                : updateItem(list, product, quantity, unit, price);
        }
    };

    const addItem = (list, product, quantity, unit, price) => {
        dispatch(
            ListActions.addProduct(
                {list, product, quantity, unit, price},
                list,
            ),
        );
        clearState();
    };

    const updateItem = (list, product, quantity, unit, price) => {
        const {id, checked} = form.productToUpdate;
        dispatch(
            ListActions.updateProduct(
                {product, quantity, unit, price, id, checked},
                list,
            ),
        );
        clearState();
        dispatch(FormActions.finishUpdate());
    };

    const clearState = () => {
        setProduct('');
        setQuantity('');
        setUnit('');
        setPrice('');
        setShowErrors(true);
    };

    return (
        showForm && (
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
                        Save
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
                                <InputAdornment position="start">
                                    R$
                                </InputAdornment>
                            ),
                        }}
                    />
                </div>
            </form>
        )
    );
}
