import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'


function Header() {
  return (
    <div className={styles.header}>
        <i></i>
        <h1 className={styles.logo}>Beach Bar</h1>
        <ul className={styles.ul}>
            <li className={styles.li}>
                <Link to={'/'} className={styles.navbar_li}>
                    Home
                </Link>
            </li>
            <li className={styles.li}>
                <Link to={'/events'} className={styles.navbar_li}>
                    Events
                </Link>
            </li>
            <li className={styles.li}>
                <Link to={'/'} className={styles.navbar_li}>
                    Menu
                </Link>
            </li>
            <li className={styles.li}>
                <Link to={'/'} className={styles.navbar_li}>
                    Gallery
                </Link>
            </li>
            <li className={styles.li}>
                <Link to={'/'} className={styles.navbar_li}>
                    About Us
                </Link>
            </li>
            <li className={styles.li}>
                <Link to={'/'} className={styles.navbar_li}>
                    Contacts
                </Link>
            </li>
        </ul>
        
    </div>
  )
}

export default Header
