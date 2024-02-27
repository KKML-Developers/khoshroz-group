// import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
// import { EffectFade, Pagination, Autoplay } from 'swiper/modules';

import './hero.scss';
import Banner from '../Banner/Banner';

const Hero = () => {
    // const heroData = [
    //     {
    //         img: 'https://res.cloudinary.com/dfaw271y6/image/upload/v1708407192/office_landscape_qllcxf.png',
    //         alt: 'Khoshroz Group of Company',
    //         title: 'Khoshroz Group of Company',
    //         description: 'We are in publication business since 84 years'
    //     },
    //     {
    //         img: 'https://res.cloudinary.com/dfaw271y6/image/upload/v1708407190/group_logo_uwfakr.png',
    //         alt: 'Khoshroz Group of Company',
    //         title: 'Khoshroz Group Limited',
    //         description: 'We are in publication business since 84 years'
    //     }
    // ];

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="home__hero rounded overflow-hidden">
                        <Banner />
                        {/* <Swiper
                            spaceBetween={30}
                            effect={'fade'}
                            loop={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Autoplay, EffectFade, Pagination]}
                            className="home__swiper"
                        >
                            {heroData.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <img src={item.img} alt={item.alt} />
                                </SwiperSlide>
                            ))}
                        </Swiper> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
