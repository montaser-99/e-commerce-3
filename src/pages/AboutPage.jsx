import React from 'react';
import Navbar from "../components/Navbar";
import { useNavigate } from 'react-router-dom';

const AboutPage = () => {
    const navigate = useNavigate();

    const handleCategoryClick = (category) => {
        // Navigate to the Products page with the selected category
        navigate(`/products/${category}`);
    };

    return (
    <>
            <Navbar />
            <div className="container py-3 my-3">
                <h1 className="text-center">About Us</h1>
                <hr />
                <p className="lead text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                    facere doloremque veritatis odit similique sequi. Odit amet fuga nam
                    quam quasi facilis sed doloremque saepe sint perspiciatis explicabo
                    totam vero quas provident ipsam, veritatis nostrum velit quos
                    recusandae est mollitia esse fugit dolore laudantium...
                </p>

                <h2 className="text-center py-4">Our Products</h2>
                <div className="row">
                    <div className="col-md-3 col-sm-6 mb-3 px-3">
                        <div className="card h-100">
                            <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
                            <div className="card-body">
                                <button
                                    className="btn btn-outline-dark m-2 w-100"
                                    onClick={() => handleCategoryClick("Mens's Clothing")}
                                >
                                    Mens's Clothing
                                </button>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-3 col-sm-6 mb-3 px-3">
                        <div className="card h-100">
                            <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
                            <div className="card-body">
                                <button
                                    className="btn btn-outline-dark m-2 w-100"
                                    onClick={() => handleCategoryClick("Women's Clothing")}
                                >
                                    Women's Clothing
                                </button>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-3 col-sm-6 mb-3 px-3">
                        <div className="card h-100">
                            <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
                            <div className="card-body">
                                <button
                                    className="btn btn-outline-dark m-2 w-100"
                                    onClick={() => handleCategoryClick("Jewelery")}
                                >
                                   Jewelery
                                </button>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-3 col-sm-6 mb-3 px-3">
                        <div className="card h-100">
                            <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
                            <div className="card-body">
                                <button
                                    className="btn btn-outline-dark m-2 w-100"
                                    onClick={() => handleCategoryClick("Electronics")}
                                >
                                   Electronics
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            </>)}


                export default AboutPage
