import React from 'react'
import MainContent from './MainContent';
import NavBar from './NavBar';
import PageHeader from './PageHeader';
import Footer from './Footer';
import { Outlet } from 'react-router-dom'



function Portal() {
    return (
        <>
            <NavBar></NavBar>
            <PageHeader></PageHeader>
            <MainContent></MainContent>
            <Footer></Footer>

            <Outlet />

        </>
    )
}

export default Portal