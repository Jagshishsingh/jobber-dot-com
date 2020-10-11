import React from 'react'
import './Reviews.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Review from './Review';

const tempMessage = 'I got sdrj dssrlkj fdkllj skfj riorj rj doj rj rjr osjpoj r';
function Reviews({margin,msg}) {
    return (
        <div className="Reviews">
        <div className="CompanyReviews" >
            <OwlCarousel
                className="owl-theme"
                responsive={{
                    0:{
                        items:1,
                        
                    },
                    400:{
                        items:2,
                    },
                    700:{
                        items:3
                    }
                }}
                loop
                margin={30}
                nav
            >
                <Review name="Harry" message={tempMessage} imgAddress=""></Review>
                <Review name="Tom" message={tempMessage} imgAddress=""></Review>
                <Review name="Potter" message={tempMessage} imgAddress=""></Review>
            </OwlCarousel>

        </div>
        <div className="IndividualReviews" style={{paddingBottom:"5rem"}}>
            <OwlCarousel
                className="owl-theme"
                loop
                margin={30}
                nav
            >
                <Review name="Harry" message={tempMessage} imgAddress=""></Review>
                <Review name="Tom" message={tempMessage} imgAddress=""></Review>
                <Review name="Potter" message={tempMessage} imgAddress=""></Review>
            </OwlCarousel>

        </div>
        </div>
    )
}

export default Reviews
