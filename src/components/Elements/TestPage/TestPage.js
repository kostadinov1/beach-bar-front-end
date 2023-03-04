import React from 'react'
import styles from './TestPage.module.css'


function TestPage() {
  return (
    <div className={styles.div}>
      <button className={styles.button}>Test Button</button>
      <form className={styles.form}>
        <input placeholder='Enter Your Name'  className={styles.input}></input>
        <input placeholder='Enter Your Email' type={'email'} className={styles.input}></input>
        <textarea placeholder='Enter Your Message Here!' className={styles.textarea}></textarea>
        <button className={styles.button}>Send</button>
      </form>
    </div>
  )
}

export default TestPage
