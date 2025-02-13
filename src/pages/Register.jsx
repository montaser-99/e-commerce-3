import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

function Register() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    //    ///////////////////

    const handlesubmit = async (e) => {
        e.preventDefault()
        if (!name || !email || !password) { alert("please enter data") }
        else {
            localStorage.setItem("email", email)
            localStorage.setItem("password", password)
            window.location = ("/login")
        }

    };


    return (
        <>
            <Navbar />
            <div className="container">


                <div className="row align-items-center min-vh-100">
                    <div className="col-lg-6 col-md-6 col-sm-12 text-center">
                        <img src="/assets/Side image.png" alt="" className='img-fluid w-100' />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12  d-flex  flex-column justify-content-center align-items-center">
                        <h2 className='display-1  mb-2'>sign up</h2>
                        <form className='w-50'>
                            <div class="form my-3">
                                <label for="Name">Full Name</label>
                                <input
                                    type="email"
                                    class="form-control mt-1"
                                    id="Name"
                                    placeholder="Enter Your Name"
                                    onChange={(e) => { setName(e.target.value) }}
                                />
                            </div>
                            <div class="form my-3">
                                <label for="Email">Email address</label>
                                <input
                                    type="email"
                                    class="form-control mt-1"
                                    id="Email"
                                    placeholder="name@example.com"
                                    onChange={(e) => { setEmail(e.target.value) }}
                                />
                            </div>
                            <div class="form  my-3">
                                <label for="Password">Password</label>
                                <input
                                    type="password"
                                    class="form-control mt-1"
                                    id="Password"
                                    placeholder="Password"
                                    onChange={(e) => { setPassword(e.target.value) }}
                                />
                            </div>
                            <div className="my-3">
                                <p>Already has an account? <Link to="/login" className="text-decoration-underline text-info">Login</Link> </p>
                            </div>
                            <div className="text-center">
                                <button class="my-2 mx-auto btn btn-dark" type="submit" onClick={handlesubmit}>
                                    Register
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

        </>

    )
}

export default Register
