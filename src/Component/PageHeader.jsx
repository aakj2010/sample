import React from 'react'

function PageHeader() {
    return (
        <header class="masthead" style={{backgroundImage: 'assets/img/home-bg.jpg'}}>
        {/* <header class="masthead" style={{ backgroundImage: `url("https://via.placeholder.com/500")` }}> */}
            <div class="container position-relative px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <div class="site-heading">
                            <h1>Clean Blog</h1>
                            <span class="subheading">A Blog Theme by Start Bootstrap</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default PageHeader