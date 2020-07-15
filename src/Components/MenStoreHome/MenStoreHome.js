import React, { useContext } from 'react'
import styles from './MenStoreHome.module.css';
import { GlobalContext } from '../../context/GlobalState';
import { Paper } from '@material-ui/core';
import { MenList } from './MenList';

export const MenStoreHome = () => {

    const {menShoes} = useContext(GlobalContext);

    return (
        <div className={styles.container}>
            <Paper elevation={3} className={styles.paper}>
                <h1>Men's Shoe Store</h1>
                
                {Object.entries(menShoes).map(([id, {name, img, price}]) => (
                    <MenList id={id} name={name} img={img} price={price} key={id} />
                ))}
                    
            </Paper>
        </div>
    )
}
