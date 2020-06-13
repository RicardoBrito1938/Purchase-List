export const Types = {
    ADD_PRODUCT: 'ADD_PRODUCT',
    DELETE_PRODUCT: 'DELETE_PRODUCT',
    TOOGLE_PRODUCT: 'TOOGLE_PRODUCT',
};

export const Creators = {
    addProduct: (product, list) => {
        return {
            type: Types.ADD_PRODUCT,
            product,
            list,
        };
    },

    deleteProduct: (productId) => ({
        type: Types.DELETE_PRODUCT,
        productId,
    }),

    toogleProduct: (productId) => ({
        type: Types.TOOGLE_PRODUCT,
        productId,
    }),
};
