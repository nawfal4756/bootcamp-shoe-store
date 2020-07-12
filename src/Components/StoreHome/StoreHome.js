import React, { useContext } from 'react'
import styles from './StoreHome.module.css'
import {Paper, Grid, Card, CardContent, Typography, Button} from '@material-ui/core';

import {GlobalState} from '../../context/GlobalState';

export const StoreHome = () => {

    const {shoes} = useContext(GlobalState);

    console.log(shoes);

    return (
        <div className={styles.container}>
            <Paper elevation={3} className={styles.paper}>
                <Grid container spacing={2} justify="center">
                    <Grid item xs={12}>
                        <h1>Store</h1>
                    </Grid>

                    {Object.entries(shoes).map(([id, {name, img}]) => (
                        <Grid item xs={5} md={3} key={id}>
                            <Card>
                                <CardContent>
                                    <Grid container justify="center">
                                        <Grid item xs={12}>
                                            <Typography variant="h5">{name}</Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <img className={styles.productImage} src={img} alt={name} />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography className={styles.price}>PRODUCT PRICE</Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button color="primary" variant="outlined">Add To Cart</Button>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Paper>
        </div>
    )
}
