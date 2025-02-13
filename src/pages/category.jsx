import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar'
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action/actionTypes";

const Category = () => {
  const { category } = useParams();  // Get category from the URL
  const [data, setData] = useState([]);  // Store all products
  const [filter, setFilter] = useState([]);  // Store filtered products based on category
  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products/");
      const products = await response.json();
      setData(products);
      setFilter(products); // Initially show all products
    };

    getProducts();
  }, []);

  useEffect(() => {
    // Filter products when category changes
    if (category) {
      const filteredProducts = data.filter(item => 
        item.category=== category.trim().toLowerCase()  
      );
      setFilter(filteredProducts);
    }
  }, [category, data]);  
  // console.log("Category from URL:", category); 


  return (
    <>
    <Navbar/>
    <div className="container py-3">
      <h1 className="text-center py-3 my-3">
      Products in {category} category
      </h1>
      <div className="row">
        {filter.length > 0 ? (
          filter.map(product => (
            <div
            id={product.id}
            key={product.id}
            className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4"
          >
            <div className="card text-center h-100" key={product.id}>
              <img
                className="card-img-top p-3"
                src={product.image}
                alt="Card"
                height={300}
              />
              <div className="card-body">
                <h5 className="card-title">
                  {product.title.substring(0, 12)}...
                </h5>
                <p className="card-text">
                  {product.description.substring(0, 90)}...
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item lead">$ {product.price}</li>
        
              </ul>
              <div className="card-body">
                <Link
                  to={"/product/" + product.id}
                  className="btn btn-dark m-1"
                >
                  Buy Now
                </Link>
                <button
                  className="btn btn-dark m-1"
                  onClick={() => {
                    toast.success("Added to cart");
                    addProduct(product);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </div>
    </>
  );
};

export default Category;
