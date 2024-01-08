import React from "react";
import Slider from 'react-slick';
import './slider.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slider_1_1 from '../../assets/images/slider/slider_1_1.png';
import slider_1_2 from '../../assets/images/slider/slider_1_2.png';
import slider_1_3 from '../../assets/images/slider/slider_1_3.png';
import slider_1_4 from '../../assets/images/slider/slider_1_4.png';


const SliderMain = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };
    return (
        <div className='slide-container'>
            <Slider {...settings}>
                <div>
                    <a href='/'>
                        <img className="slide-img" alt='' src={slider_1_1}/>
                    </a>
                </div>
                <div>
                    <a href='/'>
                        <img className="slide-img"alt='' src={slider_1_2}/>
                    </a>
                </div>
                <div>
                    <a href='/'>
                        <img className="slide-img"alt='' src={slider_1_3}/>
                    </a>
                </div>
                <div>
                    <a href='/'>
                        <img className="slide-img" alt='' src={slider_1_4}/>
                    </a>
                </div>
            </Slider>
        </div>
    );
}
  
export default SliderMain;













// import React from 'react';
// import './slider.scss';
// import slider_1_1 from '../../assets/images/slider/slider_1_1.png';
// import slider_1_2 from '../../assets/images/slider/slider_1_2.png';
// import slider_1_3 from '../../assets/images/slider/slider_1_3.png';
// import slider_1_4 from '../../assets/images/slider/slider_1_4.png';

// const Slider_1 = () => {
//     return (
//         <div className='slide-container'>
//             <div className='slider'>
//                 <div className='slides'>
//                     <input type='radio' id='radio_1'/>
//                     <input type='radio' id='radio_2'/>
//                     <input type='radio' id='radio_3'/>
//                     <input type='radio' id='radio_4'/>
//                     <div className='slide first'>
//                         <img alt='' src={slider_1_1}/> 
//                     </div>
//                     <div className='slide'>
//                         <img alt='' src={slider_1_2}/> 
//                     </div>
//                     <div className='slide'>
//                         <img alt='' src={slider_1_3}/> 
//                     </div>
//                     <div className='slide'>
//                         <img alt='' src={slider_1_4}/> 
//                     </div>
//                     <div className='nav-auto'>
//                         <div className='auto-btn1'></div>
//                         <div className='auto-btn2'></div>
//                         <div className='auto-btn3'></div>
//                         <div className='auto-btn4'></div>
//                     </div>
//                 </div>
//                 <div className='nav'>
//                     <label for='radio_1' className='nav-btn'></label>
//                     <label for='radio_2' className='nav-btn'></label>
//                     <label for='radio_3' className='nav-btn'></label>
//                     <label for='radio_4' className='nav-btn'></label>
//                 </div>
//             </div>
//         </div>
//     );
//   }
  
//   export default Slider_1;