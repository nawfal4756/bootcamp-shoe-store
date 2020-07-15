import React, { useState, useContext } from 'react';
import styles from './ShopCartList.module.css'
import { Grid, Card, CardContent, Typography, Button, ButtonGroup} from '@material-ui/core';
import { GlobalContext } from '../../context/GlobalState';

export const ShopCartList = (props) => {
    const {deleteItem} = useContext(GlobalContext);
    let [quantity, setQuantity] = useState(1);
    
    return (
        <div>
            <Grid container spacing={2} justify="center">
                <Grid item xs={5} className={styles.card}>
                    <Card>
                        <CardContent>
                            <Grid container spacing={2} justify="center">
                                <Grid item xs={4}>
                                    <img className={styles.image} src={props.img} alt="Pic"/>
                                </Grid>
                                <Grid item xs={5}>
                                    <Typography>{props.name}</Typography>
                                    <Typography>{`$${props.price}.00`}</Typography>
                                    <Typography>Quantity: {quantity}</Typography>
                                    <ButtonGroup>
                                        <Button onClick={() => setQuantity(quantity += 1)}>+</Button>
                                        <Button disabled={quantity === 1} onClick={() => setQuantity(quantity -= 1)}>-</Button>
                                    </ButtonGroup>
                                    <br/>
                                    <Typography>Total: {quantity * props.price}</Typography>
                                </Grid>
                                <Grid item xs={1}>
                                    <Button onClick={() => deleteItem(props.id)}>x</Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}
