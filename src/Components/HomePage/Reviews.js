import React from 'react'
import './Reviews.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Review from './Review';
function Reviews({margin,msg}) {
    return (
        <div className="Reviews">
        <div className="CompanyReviews" >
            <OwlCarousel
                className="owl-theme"
                loop
                margin={30}
                nav
            >
                <Review name="Harry" message="" imgAddress=""></Review>
                <Review name="Tom" message="" imgAddress=""></Review>
                <Review name="Potter" message="" imgAddress=""></Review>
            </OwlCarousel>

        </div>
        <div className="IndividualReviews" >
            <OwlCarousel
                className="owl-theme"
                loop
                margin={30}
                nav
            >
                <Review name="Harry" message="" imgAddress=""></Review>
                <Review name="Tom" message="" imgAddress=""></Review>
                <Review name="Potter" message="" imgAddress=""></Review>
            </OwlCarousel>

        </div>
        </div>
    )
}

export default Reviews
