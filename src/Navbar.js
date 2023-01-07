import React from "react";

const Navbar = (props) => {
    
        return (
            <div style={styles.nav}>
                <div style={styles.cartIconCntainer}>
                    <img style={styles.cartIcon} src="https://t3.ftcdn.net/jpg/03/13/36/92/240_F_313369233_w50qr2zvY2wGOsV9suFcoifB1JRfZK5M.jpg" alt="cart-icon" />
                    <span style={styles.cartCount}>{props.count}</span>
                </div>
            </div>
        )
    }


const styles = {
    cartIcon: {
        height: 32,
        marginRight: 20
    },
    nav: {
        height: 70,
        background: '#4267b2',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    cartIconCntainer: {
        position: 'relative'
    },
    cartCount: {
        background: 'yellow',
        borderRadius: '50%',
        padding: '4px 8px',
        position: 'absolute',
        right: 0,
        top: -9

    }
};

export default Navbar;