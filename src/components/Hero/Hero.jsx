// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Pagination, Autoplay } from 'swiper/modules';

import './hero.scss'
const Hero = () => {
    let heroData = [
        {
            img: 'https://res.cloudinary.com/dfaw271y6/image/upload/v1708407192/office_landscape_qllcxf.png',
            alt: 'Khoshroz Group of Company',
            title: 'Khoshroz Group of Company',
            description: 'We are in publication business sicne 84 years'
        },
        {
            img: 'https://res.cloudinary.com/dfaw271y6/image/upload/v1708407190/group_logo_uwfakr.png',
            alt: 'Khoshroz Group of Company',
            title: 'Khoshroz Group Limited',
            description: 'We are in publication business sicne 84 years'
        }
    ]
    return (
        <div className="home__hero">
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, EffectFade, Pagination]}
                className="home__swiper"
            >
                {heroData.map((item) => (
                    <SwiperSlide key={item.img}>
                        {/* <div className="home__hero--content">
                            <h1 className='h1 big-title'>
                                {item.title}
                            </h1>
                            <p>{item.description}</p>
                        </div> */}
                        <img src={item.img} alt={item.alt} />
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    )
}

export default Hero