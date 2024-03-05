// import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import './hero.scss';
import bannerDesktop from '../../assets/img/cover_desktop.jpg'
import bannerMobile from '../../assets/img/cover_mobile.jpg'
const Hero = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="home__hero rounded overflow-hidden">
                        <img src={bannerDesktop} alt="" className='d-md-block d-none' />
                        <img src={bannerMobile} alt="" className='d-md-none d-block' />
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
