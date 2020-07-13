import React from 'react';
import styles from './StoreHome.module.css';
import {Paper, Grid, Card, CardContent, Typography, Button} from '@material-ui/core';
import { Link } from 'react-router-dom';
import cx from 'classnames';

export const StoreHome = () => {
    return (
        <div className={styles.container}>
            <Paper elevation={3} className={styles.paper}>
                <h1 className={styles.heading}>Welcome To Nawfal's Shoe Store</h1>
                <Grid container justify="center" spacing={2}>

                    <Grid item xs={12} md={5}>
                        <Card>
                            <CardContent>
                                <Link className={cx(styles.link, styles.womenShoes)} to="/women">
                                    <img className={styles.image} src="https://sc01.alicdn.com/kf/HTB1ihu.a6gy_uJjSZR0q6yK5pXaT.jpg" alt="Women Shoes" />
                                    <Typography className={styles.nameHeading}>Women Shoes</Typography>
                                    <Button variant="outlined" className={styles.button}>Shop Now!</Button>
                                </Link>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={5}>
                        <Card>
                            <CardContent>
                                <Link className={cx(styles.link, styles.womenShoes)} to="/men">
                                    <img className={styles.image} src="https://www.unze.com.pk/media/catalog/product/cache/1/thumbnail/600x600/9df78eab33525d08d6e5fb8d27136e95/G/S/GS6034_1.jpg" alt="Men Shoes" />
                                    <Typography className={styles.nameHeading}>Men Shoes</Typography>
                                    <Button variant="outlined" className={styles.button}>Shop Now!</Button>
                                </Link>
                            </CardContent>
                        </Card>
                    </Grid>

                </Grid>
            </Paper>
        </div>
    )
}
