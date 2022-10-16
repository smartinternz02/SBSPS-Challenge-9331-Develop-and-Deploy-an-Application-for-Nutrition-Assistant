import React, { useState } from 'react'
import styles from './app.module.css'
import { useNavigate } from "react-router-dom";
import axios from 'axios'


const Login = ({ submitForm }) => {
    const [values, setvalues] = useState({
        email: '',
        password: ''
    }
    );
    const [err, seterr] = useState(null)
    
    const navigate = useNavigate()
    const handleFormSubmit = (e) => {
        e.preventDefault()
        axios
            .post("http://localhost:5000/login", { email:values.email,password:values.password })
            .then((res) => {
                console.log("successfully loged in");
                navigate('/dashboard')
            })
            .catch((err) => {
                console.log(err);
                seterr(err.response.data.msg)
            });
    };
    return (
        <div className={styles.container} style={{
            backgroundImage: 'url(/static/background3.jpg)', backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover'
        }}>
            <div style={{ height: '50%',background:'#EAF6F6' }} className={styles.appwrapper}>
            {err ? <div style={{display:'flex',justifyContent:'center',color:'red',border:'1px solid red',padding:'1rem',fontSize:'17px',fontWeight:500,textTransform:'capitalize'}}>{err}</div>:""}
                
                <form style={{ height: '60%' }} >
                    <div className={styles.email}>
                        <laber className="label">Email</laber>
                        <input
                            className={styles.input}
                            type="email"
                            name="email"
                             onChange={(e) => {
                                setvalues({ ...values, email: e.target.value });
                            }}
                        />

                    </div>
                    <div className={styles.password}>
                        <laber className="label">Password</laber>
                        <input
                            className={styles.input}
                            type="password"
                            name="password"
                             onChange={(e) => {
                                setvalues({ ...values, password: e.target.value });
                            }}
                        />

                    </div>
                    <div>
                        <button className={styles.submit} onClick={handleFormSubmit}>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login