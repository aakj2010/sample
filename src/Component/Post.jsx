import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

function Post() {

    const params = useParams()
    console.log(params);

    const [searchParams, setSearchParams] = useSearchParams()
    console.log(...searchParams);

    const [productData, setProductData] = useState({})

    useEffect(() => {
        loaduser()
    }, [])

    let loaduser = async () => {
        try {
            let product = await axios.get(`https://5cdd0a92b22718001417c19d.mockapi.io/api/blog/${params.id}`);
            setProductData(product.data)
            console.log(product.data);
        } catch (error) {

        }
    }

    return (
        <>
            <h1>{params.id}</h1>
            <header class="masthead" style={{backgroundImage: "assets/img/post-bg.jpg"}} >
                <div class="container position-relative px-4 px-lg-5">
                    <div class="row gx-4 gx-lg-5 justify-content-center">
                        <div class="col-md-10 col-lg-8 col-xl-7">
                            <div class="post-heading">
                                <h1>{productData.title}</h1>
                                <h2 class="subheading">{productData.description}</h2>
                                <span class="meta">
                                    Posted by
                                    <a href="#!">Start Bootstrap</a>
                                    on {productData.createdAt}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* <!-- Post Content--> */}
            <article class="mb-4">
                <div class="container px-4 px-lg-5">
                    <div class="row gx-4 gx-lg-5 justify-content-center">
                        <div class="col-md-10 col-lg-8 col-xl-7">
                            <p>{productData.content}</p>
                            <p>
                                Placeholder text by
                                <a href="http://spaceipsum.com/">Space Ipsum</a>
                                &middot; Images by
                                <a href="https://www.flickr.com/photos/nasacommons/">NASA on The Commons</a>
                            </p>
                        </div>
                    </div>
                </div>
            </article>

        </>
    )
}

export default Post