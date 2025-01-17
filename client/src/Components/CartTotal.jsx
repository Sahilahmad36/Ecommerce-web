/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import Title from './Title';

const CartTotal = ({ method }) => {
    const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

    const shippingFee = method === 'cod' ? delivery_fee : 0; 
    const subtotal = getCartAmount();
    const totalAmount = subtotal + shippingFee;

    const discountAmount = (subtotal * 0.90).toFixed(2);
    const totalAfterDiscount = (parseFloat(discountAmount) + shippingFee).toFixed(2);

    return (
        <div className='w-full'>
            <div className='text-2xl'>
                <Title text1={'CART'} text2={'TOTALS'} />
            </div>
            <div className='flex flex-col gap-2 mt-2 text-sm'>
                <div className='flex justify-between'>
                    <p>Subtotal</p>
                    <p>{currency} {subtotal}.00</p>
                </div>
                <hr />
                <div className='flex justify-between'>
                    <p>Shipping Fee</p>
                    <p>{currency} {shippingFee}.00</p> 
                </div>
                <hr />
                <div className='flex justify-between'>
                    <b>Total (Original)</b>
                    <b>{currency} {totalAmount}.00</b>
                </div>
                <hr />
                <div className='flex justify-between'>
                    <b>Total (After 10% Discount)</b>
                    <b>{currency} {totalAfterDiscount}</b>
                </div>
            </div>
        </div>
    );
};

export default CartTotal;
