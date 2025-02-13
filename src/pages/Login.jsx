import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const storedEmail = localStorage.getItem("email");
        const storedPassword = localStorage.getItem("password");

        if (email.trim() === "" || password.trim() === "") {
            alert("Please fill in all fields");
            return;
        }

        if (
            storedEmail &&
            storedEmail.trim() === email.trim() &&
            storedPassword &&
            storedPassword.trim() === password.trim()
        ) {
            setTimeout(() => {
                localStorage.setItem("isLoggedIn", JSON.stringify(true));

                navigate("/");
            }, 1500);
        } else {
            alert("Invalid email or password");
        }
    };

    return (
        <>
            <Navbar />

            <div className="container">
                <div className="row align-items-center min-vh-100">

                    <div className="col-lg-6 col-md-6 col-sm-12 text-center">
                        <img src="/assets/Side image.png" alt="Login Visual" className="img-fluid w-100" />
                    </div>


                    <div className="col-lg-6 col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-center">
                        <h2 className="display-4 mb-3">Login</h2>
                        <form className="w-75">
                            <div className="form-group my-3">
                                <label htmlFor="Email">Email address</label>
                                <input
                                    type="email"
                                    className="form-control mt-1"
                                    id="Email"
                                    placeholder="name@example.com"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="form-group my-3">
                                <label htmlFor="Password">Password</label>
                                <input
                                    type="password"
                                    className="form-control mt-1"
                                    id="Password"
                                    placeholder="Password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="my-3 text-center">
                                <p>
                                    Don't have an account?{" "}
                                    <Link to="/register" className="text-decoration-underline text-info">
                                        Register
                                    </Link>
                                </p>
                            </div>
                            <div className="text-center">
                                <button className="my-2 btn btn-dark w-100" type="submit" onClick={handleLogin}>
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
