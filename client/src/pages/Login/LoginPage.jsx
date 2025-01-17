import React, { useState } from 'react'
import styles from './Login.module.css'


const LoginPage = () => {

    const [signup, setSignup] = useState(false);
    const [userData, setUserData] = useState({ name: "", email: "", password: "" })
    console.log(userData)

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <div className={styles.mainContainer}>
            <div className={styles.registerContainer}>
                <h1>Register your self</h1>
                <div><input type="text" name='name' placeholder=' Enter your name' onChange={handleInputChange} className={styles.raninbow} /></div>
                <div><input type="text" name='email' placeholder='Enter your email' onChange={handleInputChange} className={styles.raninbow} /></div>
                <div><input type="password" name='password' placeholder='Enter Unique password' onChange={handleInputChange} className={styles.raninbow} /></div>
                <button type='submit'>SUBMIT</button>

                <p className={styles.txt}>
                    Already registered? <span className={styles.signup}>Sign up</span>
                </p>

            </div>
        </div>
    )
}

export default LoginPage



//https://meet.google.com/wgh-taho-xgi