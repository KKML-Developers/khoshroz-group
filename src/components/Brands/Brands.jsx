import { useEffect, useRef } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import './brands.scss'
import Title from '../Title/Title';
const Brands = ({ title, brandList, description }) => {
    const ref = useRef([]);
    ref.current = [];

    useEffect(() => {
        ref.current.forEach((el) => {
            gsap.fromTo(el, { autoAlpha: 0 }, {
                autoAlpha: 1, left: 0,
                duration: .5, scrollTrigger: {
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

    const companies = [
        {
            "logo": "https://res.cloudinary.com/dfaw271y6/image/upload/v1706007093/icons/Khoshros_group_jsb3lt.png",
            "alt": "Khoshroz Group",
            "url": "https://www.khoshrozltd.com/",
            "text": "Khoshroz Group Limited"
        },
        {
            "logo": "https://res.cloudinary.com/dfaw271y6/image/upload/v1706007093/icons/KKML_sdoumt.png",
            "alt": "Khoshroz Kitab Mahal",
            "url": "https://www.khoshrozltd.com/",
            "text": "Khoshroz Kitab Mahal Limited"
        },
        {
            "logo": "https://res.cloudinary.com/dfaw271y6/image/upload/v1706007093/icons/NDCL_euianh.png",
            "alt": "National Development Company Limited",
            "url": "https://www.ndcautobrick.com/",
            "text": "National Development Company Limited"
        },
        {
            "logo": "https://res.cloudinary.com/dfaw271y6/image/upload/v1706007093/icons/JMPL_sbaoch.png",
            "alt": "Jatiya Mudran",
            "url": "https://www.jatiyamudran.com/",
            "text": "Jatiya Mudran Limited"
        },
        {
            "logo": "https://res.cloudinary.com/dfaw271y6/image/upload/v1706094599/icons/fycwtgnwwvvhe2hbxfc7.png",
            "alt": "Magura Agriculture Park Limited",
            "url": "https://maguraagriculture.com/",
            "text": "Magura Agriculture Park Limited"
        },
        {
            "logo": "https://res.cloudinary.com/dfaw271y6/image/upload/v1706007093/icons/e-stylze_kqda99.png",
            "alt": "E-Stylze fashion e-commerce",
            "url": "https://www.estylzefashion.com/",
            "text": "E-stylze Fashion Limited"
        },
        {
            "logo": "https://res.cloudinary.com/dfaw271y6/image/upload/v1706007093/icons/DIL_vf8tcz.png",
            "alt": "Dream International Limited",
            "url": "https://www.dreaminternationallimited.com/",
            "text": "Dream International Limited"
        }
    ]
    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <Title titleOuter={'Our'} titleInner={'Companies'} />
                        <div className="companies__message">
                            <p>{description}</p>
                        </div>
                    </div>
                    {companies?.map((item, index) => (
                        <div className="col-lg-5" key={index} ref={addtoRefs}>
                            <div className="companies__container">
                                <a href={item.url} target="/_blank">
                                    <div className="companies__logo">
                                        <img src={item.logo} alt={item.alt} />
                                    </div>
                                    <div className="companies__text">
                                        <p>{item.text}</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Brands