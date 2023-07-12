import * as actionTypes from './actionsTypes';
import axios from "../../axios-store";

export const fetchProductsSuccess = (products) => ({
    type: actionTypes.FETCH_PRODUCTS_SUCCESS,
    payload: products,
});

export const addProductSuccess = (product) => ({
    type: actionTypes.ADD_PRODUCT_SUCCESS,
    payload: product,
});

export const updateProductSuccess = (product) => ({
    type:actionTypes.UPDATE_PRODUCT_SUCCESS,
    payload: product,
});

export const deleteProductSuccess = (productId) => ({
    type: actionTypes.DELETE_PRODUCT_SUCCESS,
    payload: productId,
});

export const fetchProducts = () => {
    return (dispatch) => {
        axios.get('/products')
            .then((response) => {
                console.log(response.data[2])
                dispatch(fetchProductsSuccess(response.data));
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });
    };
};

export const addProduct = (product) => {
    return (dispatch) => {
        axios.post('/products', product)
            .then((response) => {
                dispatch(addProductSuccess(response.data));
            })
            .catch((error) => {
                console.error('Error adding product:', error);
            });
    };
};

export const updateProduct = (product) => {
    return (dispatch) => {
        axios.put(`/products/${product.id}`, product)
            .then((response) => {
                dispatch(updateProductSuccess(response.data));
            })
            .catch((error) => {
                console.error('Error updating product:', error);
            });
    };
};

export const deleteProduct = (productId) => {
    return (dispatch) => {
        axios.delete(`/products/${productId}`)
            .then(() => {
                dispatch(deleteProductSuccess(productId));
            })
            .catch((error) => {
                console.error('Error deleting product:', error);
            });
    };
};