import React from 'react'
import styles from './nav.module.css'

const NavBar = () => {

    function handleClick(){
        document.getElementById('myDropdown').classList.toggle('show')
    }

  return (
    <div className={styles.main}>
        <div className={styles.logo}>
            <div className={styles.innerLogo}>
                <img src="/t.png"/><img src="/n.png"/><img src="/n (1).png" />
            </div>
        </div>
        <div className={styles.center}>
            <div className={styles.categories}>
                General
            </div>
            <div className={styles.categories}>
                Business
            </div>
            <div className={styles.categories}>
                Entertainment
            </div>
            <div className={styles.categories}>
                Health
            </div>
            <div className={styles.categories}>
                Science
            </div>
            <div className={styles.categories}>
                Sports
            </div>
            <div className={styles.categories}>
                Technology
            </div>
            <div className={styles.categories}>
                Watch Live     
            </div>
            <div className={styles.categories}>
                <div className={styles.dropdown}>
                    <button className={styles.dropbtn} onClick={handleClick}>Dropdown
                    </button>
                    <div className={styles.dropdownContent} id="myDropdown">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div> 
            </div>
        </div>
        <div>
            <div className={styles.signup}>
                <button>SignUp/LogIn</button>
            </div>
        </div>        
    </div>
  )
}

export default NavBar