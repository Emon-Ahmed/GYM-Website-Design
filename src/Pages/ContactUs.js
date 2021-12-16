import React from 'react'
import SubHeader from '../Components/SubHeader'
import Footer from '../Components/Footer'
import AboutUs from '../Components/AboutUs'

export default function ContactUs() {
    return (
        <div>
            <SubHeader PageName="CONTACT US"></SubHeader>
            <div className='my-5'>
                <AboutUs></AboutUs>
            </div>
            <Footer></Footer>
        </div>
    )
}
