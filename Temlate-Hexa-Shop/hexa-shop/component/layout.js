import React from 'react'
import Header from '../pages/header'
import Footer from '../pages/footer'
import '../public/assets/js/shoppingCart'
import Loading from './loading'

const layout = ({ children }) => {
    return (
        <>
            <Header></Header>
            {children}
            <Footer></Footer>
            {/* <Loading /> */}
        </>
    )
}

export default layout