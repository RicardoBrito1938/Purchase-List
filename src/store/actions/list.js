export const Types = {
    ADD_PRODUCT: 'ADD_PRODUCT',
};

export const Creators = {
    addProduct: (product, list) => {
        return {
            type: Types.ADD_PRODUCT,
            product,
            list,
        };
    },
};
