// import React from 'react'
// import './Hero.css'


// function Hero() {
//   return (
//     <div className={'hero'}>
//         <div className={'card'}>
//             <img className={'image'} src={'./images/aigen/logos/aigen-logo-1.png'} alt=''></img> 
//             <div className={'desc'}>
//                 <h3>Title...</h3>
//                 <date>Date: 12 july 2023</date>
//                 <h5>Short Description about the event...</h5>
//             </div>
//         </div>
//         <div className={'card'}>
//             <img className={'image'} src={'./images/aigen/logos/aigen-logo-2.png'} alt=''></img> 
//             <div className={'desc'}>
//                 <h3>Title...</h3>
//                 <date>Date: 12 july 2023</date>
//                 <h5>Short Description about the event...</h5>
//             </div>
//         </div>
//         <div className={'card'}>
//             <img className={'image'} src={'./images/aigen/logos/aigen-logo-3.png'} alt=''></img> 
//             <div className={'desc'}>
//                 <h3>Title...</h3>
//                 <date>Date: 12 july 2023</date>
//                 <h5>Short Description about the event...</h5>
//             </div>
//         </div>
//         <div className={'card'}>
//             <img className={'image'} src={'./images/aigen/logos/aigen-logo-4.png'} alt=''></img> 
//             <div className={'desc'}>
//                 <h3>Title...</h3>
//                 <date>Date: 12 july 2023</date>
//                 <h5>Short Description about the event...</h5>
//             </div>
//         </div>  
//         <div className={'card'}>
//             <img className={'image'} src={'./images/aigen/logos/aigen-logo-5.png'} alt=''></img> 
//             <div className={'desc'}>
//                 <h3>Title...</h3>
//                 <date>Date: 12 july 2023</date>
//                 <h5>Short Description about the event...</h5>
//             </div>
//         </div>  
//         <div className={'card'}>
//             <img className={'image'} src={'./images/aigen/logos/aigen-logo-6.png'} alt=''></img> 
//             <div className={'desc'}>
//                 <h3>Title...</h3>
//                 <date>Date: 12 july 2023</date>
//                 <h5>Short Description about the event...</h5>
//             </div>
//         </div>      
//     </div>
//   )
// }



import React from 'react'
import styles from './Hero.module.css'


function Hero() {
  return (
    <div className={styles.hero}>
        <div className={`${styles.cardOne} ${styles.card}`}>

            <img className={styles.image} src={'./images/aigen/logos/aigen-logo-2.png'} alt=''></img> 
            <div className={styles.desc}>
                <h3>Title...</h3>
                <date>Date: 12 july 2023</date>
                <h5>Short Description about the event...</h5>
            </div>
        </div>
        <div className={`${styles.cardTwo} ${styles.card}`}>

            <img className={styles.image} src={'./images/aigen/logos/aigen-logo-3.png'} alt=''></img> 
            <div className={styles.desc}>
                <h3>Title...</h3>
                <date>Date: 12 july 2023</date>
                <h5>Short Description about the event...</h5>
            </div>
        </div>
        <div className={`${styles.cardThree} ${styles.card}`}>

            <img className={styles.image} src={'./images/aigen/logos/aigen-logo-1.png'} alt=''></img> 
            <div className={styles.desc}>
                <h3>Title...</h3>
                <date>Date: 12 july 2023</date>
                <h5>Short Description about the event...</h5>
            </div>
        </div>
        <div className={`${styles.cardFour} ${styles.card}`}>

            <img className={styles.image} src={'./images/aigen/logos/aigen-logo-4.png'} alt=''></img> 
            <div className={styles.desc}>
                <h3>Title...</h3>
                <date>Date: 12 july 2023</date>
                <h5>Short Description about the event...</h5>
            </div>
        </div>  
        <div className={`${styles.cardFive} ${styles.card}`}>
            <img className={styles.image} src={'./images/aigen/logos/aigen-logo-4.png'} alt=''></img> 
            <div className={styles.desc}>
                <h3>Title...</h3>
                <date>Date: 12 july 2023</date>
                <h5>Short Description about the event...</h5>
            </div>
        </div>  
        <div className={`${styles.cardSix} ${styles.card}`}>
            <img className={styles.image} src={'./images/aigen/logos/aigen-logo-4.png'} alt=''></img> 
            <div className={styles.desc}>
                <h3>Title...</h3>
                <date>Date: 12 july 2023</date>
                <h5>Short Description about the event...</h5>
            </div>
        </div>      
    </div>
  )
}


export default Hero
