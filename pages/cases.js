import React from 'react'
import Iframe from 'react-iframe'
import styles from './index.module.scss'

//Components
import Header from '../components/header/header'

export default function Cases() {
    return (
        <>
            <Header />
            <div className={styles.background} />
            <div className={styles.iframe_container} >
                <Iframe url="https://my.spline.design/librarydevicemodel-46ed2047dd7dba7234ec7b6773512a97/"
                    width="800px"
                    height="800px"
                    id="myId"
                    className={styles.iframe}
                    display="initial"
                    position="relative" />
            </div>

        </>
    )
}