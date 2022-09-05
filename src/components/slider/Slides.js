import React from 'react'
import './Slider.css'

const slidesinfo =[
    {
        src: 'https://cdn.pixabay.com/photo/2016/03/27/18/54/technology-1283624_960_720.jpg',
        alt: "Proyecto 1",
        desc: "Automatization",
    },
    {
        src: 'https://cdn.pixabay.com/photo/2015/05/15/01/48/computer-767776_960_720.jpg',
        alt: "Proyecto 2",
        desc: "Data analitics",
    },
    {
        src: 'https://cdn.pixabay.com/photo/2013/11/28/09/50/albert-einstein-219675_960_720.jpg',
        alt: "Proyecto 3",
        desc: "Problem resolution",
    }
]


const slides = slidesinfo.map(slides => (
    <div className='slide-container'>
        <img src={slides.src} alt={slides.alt}/>
        <div className='slide-desc'>
            <span>{slides.desc}</span>
        </div>
    </div>
))

export default slides;