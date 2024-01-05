import React from 'react'
import styles from './nav.module.css'

const SecondNav = () => {
  return (
    <div className={styles.secMain}>
        <div className={styles.secInner}>
            <div className={styles.secItems}>
                English
            </div>
            <div className={styles.secItems}>
                French
            </div>
            <div className={styles.secItems}>
                German
            </div>
            <div className={styles.secItems}>
                Arabic
            </div>
            <div className={styles.secItems}>
                Spanish
            </div>
            <div className={styles.secItems}>
                Russian
            </div>
        </div>
    </div>
  )
}

export default SecondNav