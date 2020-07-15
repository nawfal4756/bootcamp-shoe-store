import React, { useContext } from 'react'
import { Grid, Card, CardContent, Typography, Button } from '@material-ui/core'
import styles from './WomenList.module.css';
import {GlobalContext} from '../../context/GlobalState';

export const WomenList = (props) => {

    const {addItem} = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newItem = {
            id: props.id,
            name: props.name,
            img: props.img,
            price: props.price
        }

        addItem(newItem)
    }

    return (
        <div className={styles.container}>
            <Grid container spacing={2} justify="center" key={props.id}>
                <Grid item xs={5} md={3}>
                    <Card>
                        <CardContent>
                            <Grid container justify="center">
                                <Grid item xs={12}>
                                    <Typography variant="h5">{props.name}</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <img className={styles.productImage} src={props.img} alt={props.name} />
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography className={styles.price}>{`$${props.price}.00`}</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button color="primary" variant="outlined" onClick={onSubmit}>Add To Cart</Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}
