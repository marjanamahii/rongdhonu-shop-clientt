import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/giphy.gif';

const PlaceOrder = () => {
    return (
        <div>
            <h1>Order placed Successfully!</h1>
            <img src={img} alt="" />
        </div>
    );
};

export default PlaceOrder;