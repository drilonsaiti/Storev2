import React, { useState, useEffect } from 'react';

const ProductForm = ({ product, onSubmit }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [purchasePrice, setpurchasePrice] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [barCode,setBarCode] = useState(0);

    useEffect(() => {
        if (product) {
            setName(product.name);
            setPrice(product.price);
            setQuantity(product.quantity);
        }
    }, [product]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedProduct = { id: product?.id, name, price, quantity };
        onSubmit(updatedProduct);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>{product ? 'Edit Product' : 'Add Product'}</h2>
            <div>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label>Price:</label>
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
            </div>
            <div>
                <label>Purchase price:</label>
                <input type="number" value={purchasePrice} onChange={(e) => setpurchasePrice(e.target.value)} />
            </div>
            <div>
                <label>Quantity:</label>
                <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
            </div>
            <div>
                <label>Bar code:</label>
                <input type="number" value={barCode} onChange={(e) => setBarCode(e.target.value)} />
            </div>
            <button type="submit">{product ? 'Update' : 'Add'}</button>
        </form>
    );
};

export default ProductForm;