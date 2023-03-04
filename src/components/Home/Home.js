import React from 'react'
import Cube from '../Elements/Cube/Cube'
import TestPage from '../Elements/TestPage/TestPage'
import Hero from './Hero'
import styles from './Home.module.css'
import Landing from './Landing'


function Home() {
    return (
        <div className={styles.home}>
            
            <Landing></Landing>
            <TestPage></TestPage>
            <Hero />
            <Cube></Cube>
        </div>
    )
}

export default Home
