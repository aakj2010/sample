import React from 'react'
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function MainContent() {


    const [products, setProducts] = useState([]);
    // const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        loadData()
    }, [])

    let loadData = async () => {
        try {
            // setLoading(true)
            let products = await axios.get("https://5cdd0a92b22718001417c19d.mockapi.io/api/blog");
            // console.log(products);
            setProducts(products.data)
            // setLoading(false)
        } catch (error) {
            console.log(error);
        }
    };



    return (
        <>

            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        {/* <!-- Post preview--> */}

                        {
                            products.map((product) => {
                                return <>
                                    <div class="post-preview">
                                        <Link to={`/post/${product.id}`}>
                                            <h2 class="post-title">{product.title}</h2>
                                            <h3 class="post-subtitle">{product.description}</h3>
                                        </Link>
                                        <p class="post-meta">
                                            Posted by
                                            <a href="#!"> Start Bootstrap </a>
                                            On {product.createdAt}
                                        </p>
                                    </div>
                                </>

                            })
                        }

                        {/* <!-- Divider--> */}
                        <hr class="my-4" />

                        {/* <!-- Pager--> */}
                        <div class="d-flex justify-content-end mb-4"><a class="btn btn-primary text-uppercase" href="#!">Older Posts →</a></div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default MainContent