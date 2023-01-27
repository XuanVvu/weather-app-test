import React, { Fragment, useState } from 'react'
import './forecast.scss'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ForeCast = ({forecastWeather}) => {

  const forecastData = forecastWeather.forecastday[0].hour;

  for(let i = 0; i < forecastData.length; i++) {
       forecastData[i].time = new Date(forecastData[i].time)
      
  }

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows:false,
    
    slidesToShow: 8,
    slidesToScroll: 8,
  };

  
  return (
    <Fragment>
      <div className="wrapper__forecast">
        <div className="wrapper__forecast-inner">
          <div className='forecast-title mb-3'>Today's forecast</div>
          <div className="forecast-slider ">
            <Slider {...settings}>
                {forecastData.map((item, index) => (
                    <div className="forecast-slider-item" key={index}>
                      <div className="forecast-slider-item-inner d-flex flex-column align-items-center">
                          <div className="time mb-3">{item.time.getHours()}:00 AM</div>
                          <img src={item.condition.icon} alt="" />
                          <div className="temp_c">{item.temp_c} °C</div>

                      </div>
                    </div>

                ))}

            </Slider>
          </div>

        </div>
      </div>
    </Fragment>
  )
}

export default ForeCast