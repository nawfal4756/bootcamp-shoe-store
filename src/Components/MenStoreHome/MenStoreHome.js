import React, { useContext } from 'react'
import styles from './MenStoreHome.module.css'
import {Paper, Grid, Card, CardContent, Typography, Button} from '@material-ui/core';

import {GlobalState} from '../../context/GlobalState';

export const MenStoreHome = () => {

    const {menShoes} = useContext(GlobalState);

    return (
        <div className={styles.container}>
            <Paper elevation={3} className={styles.paper}>
                <Grid container spacing={2} justify="center">
                    <Grid item xs={12}>
                        <h1>Men's Shoe Store</h1>
                    </Grid>

                    {Object.entries(menShoes).map(([id, {name, img, price}]) => (
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
                                            <Typography className={styles.price}>{price}</Typography>
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
