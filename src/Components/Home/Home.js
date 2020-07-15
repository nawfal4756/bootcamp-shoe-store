import React from 'react'
import styles from './Home.module.css'
import {Paper, Button} from '@material-ui/core';
import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <div className={styles.container}>
            <Paper elevation={3} className={styles.paper}>
                <h1 className={styles.heading}>Welcome to Nawfal's Shoe Store</h1>
                <hr/>
                <img 
                    className={styles.image}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSwXtGf2XdlkkXHYVRQcAWFE6v8_ieWV3m63w&usqp=CAU"
                    alt="Shoes"
                />
                <br/>
                <br/>
                <Link className={styles.title} to="/store"><Button variant="outlined" fullWidth={true}>SHOP NOW!</Button></Link>
                <br/>
                <br/>
            </Paper>
        </div>
    )
}
