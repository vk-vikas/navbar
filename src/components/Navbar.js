import React from 'react'
import styles from './Navbar.module.css'
const Navbar = () => {
    return (
        <>
        <div className={styles.navbarcontainer}>
        
        <h2>website name</h2>
    
            <ul>
                <li>Treatments</li>
                <li>India</li>
                <li>Why Us</li>
                <li>Hospitals</li>
                <li>contact us</li>
            </ul>
    
        </div>
        
        </>
    )
}

export default Navbar
