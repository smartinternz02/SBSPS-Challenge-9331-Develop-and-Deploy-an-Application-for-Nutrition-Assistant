import React, { useState } from "react";
import styles from "./app.module.css";
import { useNavigate } from "react-router-dom";

import axios from 'axios'

const SignupForm = ({ submitForm }) => {
    const [values, setvalues] = useState({
        fullname: "",
        email: "",
        password: "",
        age: "",
        weight: "",
        height: "",
    });
    const [err, seterr] = useState(null)

    const navigate = useNavigate()
    const handleFormSubmit = (e) => {
        e.preventDefault()
        axios
            .post("http://localhost:5000/signup", { username: values.fullname, email: values.email, password: values.password, age: values.age, weight: values.weight, height: values.height })
            .then((res) => {
                console.log("successfully signed up");
                navigate('/login')
            })
            .catch((err) => {
                console.log(err);
                seterr(err.response.data.msg)
            });
    };
    return (
        <div
            className={styles.container}
            style={{
                backgroundImage: "url(/static/background3.jpg)",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
                backgroundSize: "cover",
            }}
        >
            
            <div className={styles.appwrapper}>
                {err ? <div style={{display:'flex',justifyContent:'center',color:'red',border:'1px solid red',padding:'1rem',fontSize:'17px',fontWeight:500,textTransform:'capitalize'}}>{err}</div>:""}
                <div>
                    <h2 className="title">Create Account</h2>
                </div>
                <form className="form-wrapper">
                    <div className={styles.name}>
                        <laber className="label">Full Name</laber>
                        <input
                            className={styles.input}
                            type="text"
                            name="fullname"
                            onChange={(e) => {
                                setvalues({ ...values, fullname: e.target.value });
                            }}
                        />
                    </div>
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
                    <div className={styles.name}>
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
                    <div className={styles.name}>
                        <laber className="label">age</laber>
                        <input
                            className={styles.input}
                            type="text"
                            name="fullname"
                            onChange={(e) => {
                                setvalues({ ...values, age: e.target.value });
                            }}
                        />
                    </div>
                    <div className={styles.name}>
                        <laber className="label">Weight</laber>
                        <input
                            className={styles.input}
                            type="text"
                            name="fullname"
                            onChange={(e) => {
                                setvalues({ ...values, weight: e.target.value });
                            }}
                        />
                    </div>
                    <div className={styles.name}>
                        <laber className="label">Height</laber>
                        <input
                            className={styles.input}
                            type="text"
                            name="fullname"
                            onChange={(e) => {
                                setvalues({ ...values, height: e.target.value });
                            }}
                        />
                    </div>
                    <div>
                        <button className={styles.submit} onClick={handleFormSubmit}>
                            Sign Up
                        </button>
                    </div>
                    <a
                        href="/login"
                        style={{ marginTop: "20px", display: "inline-block" }}
                    >
                        Already have an account?  Login
                    </a>
                </form>
            </div>
        </div>
    );
};

export default SignupForm;
