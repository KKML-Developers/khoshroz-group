import { useEffect, useRef } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import Banner from '../Banner/Banner';
import './products.scss';
import HelmetComponent from '../HelmetComponent';
const Companies = () => {
    const ref = useRef([]);
    ref.current = [];

    useEffect(() => {
        ref.current.forEach((el) => {
            gsap.fromTo(el, { autoAlpha: 0 }, {
                autoAlpha: 1, left: 0,
                duration: 1, scrollTrigger: {
                    trigger: el,
                    start: "top bottom-=100",
                    toggleActions: "play none none reverse"
                }
            })
        })
    }, [])

    const addtoRefs = (el) => {
        if (el && !ref.current.includes(el)) {
            ref.current.push(el);
        }
    }


    const productMessage = ["The expansion and diversification have indeed opened new opportunities for the Khoshroz Group, with the management focusing on providing a range of benevolent services beyond mere profit-making. The rising Khoshroz Group adheres to the principle of conducting business operations for the betterment of society. Through years of dedication and hard work, the Khoshroz Group has evolved into a multi-faceted entity, covering essential sectors such as food, clothing, housing, education, and healthcare.", "The Khoshroz Group has been instrumental in enhancing the lifestyle of the Bangladeshi people. Each subsidiary of the Khoshroz Group plays a significant role in the economic development of the country, by establishing industries, plants, and engaging in various activities across multiple sectors.", "The Khoshroz Group is dedicated to shaping the future of the nation. The various concerns under the Khoshroz Group are as follows:"]

    const productList = [
        {
            image: 'https://res.cloudinary.com/dfaw271y6/image/upload/v1705831179/cld-sample-5.jpg',
            url: 'https://khoshrozltd.com/',
            title: 'Khoshroz Kitab Mahal'
        },
        {
            image: 'https://res.cloudinary.com/dfaw271y6/image/upload/v1705831150/samples/food/fish-vegetables.jpg',
            url: 'https://www.ndcautobrick.com/',
            title: 'National Development Company'
        },
        {
            image: 'https://res.cloudinary.com/dfaw271y6/image/upload/v1705831178/cld-sample-2.jpg',
            url: 'https://www.jatiyamudran.com/',
            title: 'Jatiyo Mudran & Packaging Limited'
        },
        {
            image: 'https://res.cloudinary.com/dfaw271y6/image/upload/v1705831175/samples/dessert-on-a-plate.jpg',
            url: 'https://maguraagriculture.com/',
            title: 'Magura Agriculture Park Limited'
        },
        {
            image: 'https://res.cloudinary.com/dfaw271y6/image/upload/v1705831172/samples/breakfast.jpg',
            url: 'https://www.estylzefashion.com/',
            title: 'Estylze Fashion Limited'
        },
        {
            image: 'https://res.cloudinary.com/dfaw271y6/image/upload/v1705831154/samples/animals/three-dogs.jpg',
            url: 'https://www.dreaminternationallimited.com/',
            title: 'Dream International Limited'
        },
    ]
    return (
        <section className="products">
            <HelmetComponent
                title="Products | Khoshroz Group"
                description="Leading family business specializing in publications exports, with multiple companies including Khoshroz Kitab Mahal, National Development Company Limited, Jatiya Mudran Limited, Magura Agriculture Park Limited, E-Stylze Fashion Limited, and Dream International Limited"
                keywords="Khoshroz Group, Khoshroz Kitab Mahal, National Development Company Limited, Jatiya Mudran, Magura Agriculture Park Limited, E-Stylze fashion e-commerce, Dream International Limited, company group, conglomerate, business group, diversified company, investment company, corporate group, Khoshroz, Kitab Mahal, development company, agriculture park, fashion e-commerce, international company, business concerns, company portfolio, group of companies, enterprise group, investment group, corporate entity, business conglomerate, company holdings, business portfolio, company subsidiaries, Khoshroz Group, benevolent services, profit-making, society, multi-faceted entity, food sector, clothing sector, housing sector, education sector, healthcare sector, Bangladeshi people, economic development, industries, plants, future of the nation, business operations, management, diversification, opportunities, dedication, hard work, subsidiaries, economic development, industries, plants, activities, sectors, lifestyle enhancement, Bangladesh, Khoshroz Group concerns"
                author="Khoshroz Group Developers"
                ogTitle="Khoshroz Group of Company"
                ogDescription="Leading family business specializing in publications exports, with multiple companies including Khoshroz Kitab Mahal, National Development Company Limited, Jatiya Mudran Limited, Magura Agriculture Park Limited, E-Stylze Fashion Limited, and Dream International Limited"
                ogUrl="https://www.khoshrozltd.com"
                ogImage="https://res.cloudinary.com/dfaw271y6/image/upload/v1706095346/logos/b1z8dxf7cvrkqugkr5io.png"
                twitterTitle="Khoshroz Group of Company"
                twitterDescription="Leading family business specializing in publications exports, with multiple companies including Khoshroz Kitab Mahal, National Development Company Limited, Jatiya Mudran Limited, Magura Agriculture Park Limited, E-Stylze Fashion Limited, and Dream International Limited"
                twitterImage="https://res.cloudinary.com/dfaw271y6/image/upload/v1706095346/logos/b1z8dxf7cvrkqugkr5io.png"
            />
            <div className="products__content py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="mb-4">
                                <Banner />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="products__description mb-4">
                                {productMessage.map((item, index) => (
                                    <p key={index}>{item}</p>
                                ))}
                            </div>
                        </div>
                        {productList.map((item, index) => (
                            <div className="col-xl-4 col-md-6" key={index} ref={addtoRefs}>
                                <a href={item.url} target='/_blank' className='d-block'>
                                    <figure className='figure rounded' title={item.title} >
                                        <img src={item.image} alt={item.title} className='figure-img img-fluid ' />
                                        <figcaption className='text-center'>
                                            {item.title}
                                        </figcaption>
                                    </figure>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Companies