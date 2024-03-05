import { useEffect, useRef } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import './slogan.scss'
const Slogan = () => {
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

    const sloganTitle = 'We Are'
    const slogans = [
        {
            id: 1,
            title: 'A family business',
            des: 'We put people before numbers'
        },
        {
            id: 2,
            title: 'Experts in the business of publication',
            des: 'Our more than 84 years of experience and our solid infrastructure are here to support you'
        },
        {
            id: 3,
            title: 'Home to brands',
            des: 'We work hand-in-hand with a wide range of brands'
        },
        {
            id: 4,
            title: 'Sustainably driven',
            des: 'We are a force in the drive towards a more sustainable Multi industry'
        },
    ]
    return (
        <section className="slogan py-5 text-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="slogan__inner">
                            <h2 className="slogan__title" ref={addtoRefs}>{sloganTitle}</h2>
                            <div className="lineDot"></div>
                            {slogans.map((item) => (
                                <div key={item.id} className='slogan__single' ref={addtoRefs}>
                                    <div className="slogan__item">
                                        <h4>{item.title}</h4>
                                        <p>{item.des}</p>
                                    </div>
                                    <div className="lineDot" ref={addtoRefs}></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Slogan