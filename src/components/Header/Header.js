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
                <Link to={'/'}>
                    Home
                </Link>
            </li>
            <li className={styles.li}>
                <Link to={'/'}>
                    Events
                </Link>
            </li>
            <li className={styles.li}>
                <Link to={'/'}>
                    Menu
                </Link>
            </li>
            <li className={styles.li}>
                <Link to={'/'}>
                    Gallery
                </Link>
            </li>
            <li className={styles.li}>
                <Link to={'/'}>
                    About Us
                </Link>
            </li>
            <li className={styles.li}>
                <Link to={'/'}>
                    Contacts
                </Link>
            </li>
        </ul>
        
    </div>
  )
}

export default Header
