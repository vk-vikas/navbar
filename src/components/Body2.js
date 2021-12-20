import React from 'react'
import styles from './Body2.module.css'
import pic from './images/CtScan.png'

const Body = () => {
    return (
        <div className={styles.parts}>
            
            <div className={styles.right}>
                <h2>hi , best medical care</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl nisi scelerisque eu ultrices vitae auctor eu. Nunc sed augue lacus viverra. Lectus magna fringilla urna porttitor rhoncus dolor purus non enim. Aliquet lectus proin nibh nisl condimentum id venenatis. Nisl nunc mi ipsum faucibus vitae. Tincidunt tortor aliquam nulla facilisi cras. Massa enim nec dui nunc mattis enim ut tellus elementum. Id eu nisl nunc mi ipsum faucibus vitae aliquet. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed. Magna ac placerat vestibulum lectus mauris ultrices.</p>
            </div>
            <div className={styles.left}>
                <img src={pic} alt='ctscan'></img>
            </div>
        </div>
    )
}

export default Body
