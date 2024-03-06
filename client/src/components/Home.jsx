import React from 'react';
import axios from 'axios';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import ProductTile from "../components/product-tile";
import Header from './header'


const Home = () => {
    const navigate = useNavigate();
    const LogoutButton = () => {
        axios.post('http://localhost:8000/api/user/logout', {}, {withCredentials: true})
        .then(res => {
            console.log(res);
            console.log('Logged out Successful');
            navigate("/")
        })
        .catch(error => {
            // Handle the error
            console.log('Logout failed:', error);
        });
    }

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    async function fetchListOfProducts() {
        setLoading(true);
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();

        if (data) {
        setLoading(false);
        setProducts(data);
        }
    }

    useEffect(() => {
        fetchListOfProducts();
    }, []);

    return (
        <div>
            <Header />
            <Button
                onClick={LogoutButton}
                variant="contained"
                sx={{ margin: 0, marginLeft: 160, position: 'relative', bottom: 60 }}
                
            >
                Logout
            </Button>
            {loading ? (
        <div className="min-h-screen w-full flex justify-center items-center">
            <Circles
                height={"120"}
                width={"120"}
                color="rgb(127,29,29)"
                visible={true}
            />
            </div>
        ) : (
            <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 max-w-6xl mx-auto p-3">
            {products && products.length
                ? products.map((productItem) => (
                    <ProductTile product={productItem} />
                ))
                : null}
            </div>
        )}
        </div>
    )
}

export default Home;
