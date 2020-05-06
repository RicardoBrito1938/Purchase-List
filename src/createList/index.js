import React from 'react';

import {TextField, MenuItem, InputAdornment, Button} from '@material-ui/core';

import './List.css';

const units = ['kg', 'lt', 'un'];

const createList = () => (
    <div className="page-container">
        <form className="form-container">
            <div className="form-row">
                <TextField
                    label="Lista"
                    name="list"
                    value={''}
                    onChange={() => {}}
                    required
                />
                <Button variant="outlined" color="secondary">
                    Add
                </Button>
            </div>
            <div className="form-row">
                <TextField
                    label="Product"
                    name="product"
                    value={''}
                    onChange={() => {}}
                    required
                />
                <TextField
                    label="Quantity"
                    name="quantity"
                    value={''}
                    onChange={() => {}}
                    required
                />
                <TextField
                    select
                    label="Unity"
                    name="unity"
                    value={''}
                    onChange={() => {}}
                    required>
                    {units.map((option) => (
                        <MenuItem key="option" value="option">
                            {option}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    label="Price"
                    name="price"
                    value={''}
                    onChange={() => {}}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">R$</InputAdornment>
                        ),
                    }}
                />
            </div>
        </form>
    </div>
);

export default createList;
