import React from 'react'
import { Link } from 'react-router-dom'

import styles from './NotFoundPage.module.css'
import notFound from '../../../assets/images/notfoundbanner.jpg'

import DefaultButton from '../../ui/DefaultButton/DefaultButton'

const NotFoundPage = () => {
  return (
    <div className={styles.Wrapper}>
        <div className={styles.NotFoundBanner}>
            <img src="" alt=""/>
        </div>

        <div className={styles.errorWrapper}>
            <h1 className={styles.errorCode}>404</h1>
            <h3 className={styles.errorMessage}>
                Sorry, but the page you are looking for does not exist
            </h3>

            <div className={styles.buttons}>
                <DefaultButton buttonText={"Back"}/>
                
                <Link to="/">
                    <DefaultButton buttonText={"Home"}/>
                </Link>

            </div>

        </div>
    </div>
    )
}

export default NotFoundPage