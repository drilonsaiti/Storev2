import React, {useEffect, useState} from 'react';
import { Container, Typography, makeStyles } from '@material-ui/core';
import ProductsList from '../../component/Products/Product/ProductsList'
import AddProductForm from '../../component/Products/AddEditProduct/AddEditProduct';
import * as actions from '../../store/actions/index';
import {connect} from "react-redux";
const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: theme.spacing(4),
    },
    title: {
        marginBottom: theme.spacing(2),
    },
}));

const ProductsPage = (props) => {
    const classes = useStyles();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        props.onFetchProducts();
    }, [props.onFetchProducts]);

    return (
        <Container className={classes.container}>
            <Typography variant="h4" component="h1" className={classes.title}>
                Products Page
            </Typography>
            <ProductsList products={props.products} />
            <AddProductForm onAddProduct={props.onAddProduct} />
        </Container>
    );
};

const mapStateToProps = (state) => ({
    products: state.products,
});

const mapDispatchToProps  = dispatch => {
    return{
        onFetchProducts: () => dispatch(actions.fetchProducts()),
        onAddProduct: (product) => dispatch(actions.addProduct(product))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);
