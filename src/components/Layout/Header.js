import React from 'react';
import HeaderCartButton from '../Cart/HeaderCartButton'

import styles from './Styles.module.css'
import foodImage from '../../assests/meals.jpg'

const Header = props => {

    return (
        <React.Fragment>
            <header className={styles.header}> 
                <h1>Lettuce Eat</h1>
                <HeaderCartButton />
            </header>
            <div className={styles['main-image']}>
                <img src={foodImage} alt="" />
            </div>
        </React.Fragment>
    )
};

export default Header;