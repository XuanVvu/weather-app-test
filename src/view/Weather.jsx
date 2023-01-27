import axios from 'axios'
import React, { Fragment } from 'react'
import { useEffect, useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import './weather.scss';

import ForeCast from './ForeCast/ForeCast';
import AirCondition from './AirConditions/AirCondition';

const Weather = ({isLoading, locationData, currentWeather, forecastWeather}) => {

  return (
    <Fragment>
      <Container>
        {isLoading &&
          <div className='loading'>Loading ....</div>
        }
        {!isLoading &&
          <div className='display__weather'>
            <Row className='mt-4 mb-4'>
              <Col>
                <div className="display__weather-left ms-5">
                  <h2>{locationData}</h2>
                  <div>Cloud cover: {currentWeather.cloud} %</div>
                  <img className='weather-img' src={currentWeather.condition.icon} alt="" />
                  <h1 className='mt-5 '>{currentWeather.temp_c} °C</h1>
                </div>
              </Col>

              <Col>
                  <AirCondition
                    currentWeather = {currentWeather}
                  />
              </Col>

            </Row>      
            <ForeCast 
                forecastWeather={forecastWeather}
            />
          </div>
          
        }

      </Container>



    </Fragment>
  )
}

export default Weather