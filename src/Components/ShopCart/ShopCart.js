import React, { useContext, useState } from 'react'
import {GlobalContext} from '../../context/GlobalState';
import styles from './ShopCart.module.css';
import {Paper, Button, Typography} from '@material-ui/core';
import { ShopCartList } from './ShopCartList';

export const ShopCart = () => {

    const {cart} = useContext(GlobalContext);
    let status = false;
    let [out, setOut] = useState(false)
    

    if (cart.length > 0) {
        status = true
    }

    //const total = cart.reduce((acc, item) => acc += item.price, 0).toFixed(2);
    if (!out) {
        return (
            <div className={styles.container}>
                <Paper elevation={3} className={styles.paper}>
                    <h1 className={styles.heading}>Your Shopping Cart</h1>
                    <hr/>
                    {status ? "" : <h3 className={styles.text}>Your Cart is Empty!</h3>}
                    {status ? <Typography className={styles.text}>Number of Items in Cart: {cart.length}</Typography> : ""}

                    {cart.map(item => (<ShopCartList key={item.id} id={item.id} name={item.name} img={item.img} quantity={item.quantity} price={item.price} />))}
                    <br/>
                    <br/>
                    {status ? 
                        <Button className={styles.button} 
                            fullWidth={true} 
                            variant="outlined" 
                            onClick={() => setOut(!out)
                        }>
                        Checkout</Button> 
                    : ""}
                </Paper>
            </div>
        )
    }
    else {
        return (
            <div className={styles.container}>
                <Paper elevation={3} className={styles.paper}>
                    <h1 className={styles.heading}>Your Shopping Cart</h1>
                    <hr/>
                    <h3 className={styles.text}>Your Order Has Been Confirmed</h3>
                </Paper>
            </div>       
        )
    }
}
