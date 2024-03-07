import React, { useEffect, useRef, useState } from 'react'
import '../Service/style.css'
import data from "../../assets/data.json"


function Slider() {
    const sliders = data.slider

    const [currentSlide, setCurrentSlide] = useState(sliders[0]);

    // lưu slide hiện tại
    const carouselRef = useRef(null);
  
    useEffect(() => {
        carouselRef.current = setInterval(() => {
            setCurrentSlide(prevSlide => prevSlide + 1);
        }, 2000);
    
        return () => clearInterval(carouselRef.current);
      }, [sliders.length]);

    const handleNext = (index) =>{
       setCurrentSlide(index +1)
       clearInterval(carouselRef.current +1);
    }

    const handlePrev = (index) =>{
        setCurrentSlide(index -1)
       clearInterval(carouselRef.current -1);
    }

  return (
    <div>
       <div className="carousel">
        {/* <!-- list item --> */}
        <div className="list">  
            { sliders.map((item,index) =>(
                    <div className={` ${index === currentSlide ? "" : "item" }`} key={index} data-tab={item.id} >
                        <img src={item.image} />
                        <div className="content">
                            <div className="author">{item.author}</div>
                            <div className="topic">{item.member}</div>
                            <div className="des"> {item.description}
                                {/* <!-- lorem 50 --> */}
                                 </div>
                            
                        </div>
                    </div>
                ))}
        </div>
        {/* <!-- list thumnail --> */}
        <div className="thumbnail">
            {sliders.map(item =>(
                 <div className="item" key={item.id}>
                 <img src={item.image}/>
                 <div className="content">
                     <div className="title">
                        {item.member}
                     </div>
                     
                 </div>
             </div>
            ))}
           
        </div>
        {/* <!-- next prev --> */}

        <div className="arrows">
            <button id="prev" onClick={handlePrev}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mx-auto">
                <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clipRule="evenodd" />
                </svg>
            </button>
            <button id="next" onClick={handleNext}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mx-auto">
                <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                </svg>

            </button>
        </div>
        
    </div>
    </div>
  )
}

export default Slider
