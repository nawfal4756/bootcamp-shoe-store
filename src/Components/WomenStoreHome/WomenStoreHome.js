import React, { useContext } from 'react'
import styles from './WomenStoreHome.module.css';
import { GlobalContext } from '../../context/GlobalState';
import { Paper } from '@material-ui/core';
import { WomenList } from './WomenList';

export const WomenStoreHome = () => {

    const {womenShoes} = useContext(GlobalContext);

    return (
        <div className={styles.container}>
            <Paper elevation={3} className={styles.paper}>
                <h1>Women's Shoe Store</h1>
                
                {Object.entries(womenShoes).map(([id, {name, img, price}]) => (
                    <WomenList id={id} name={name} img={img} price={price} key={id} />
                ))}
                    
            </Paper>
        </div>
    )
}
