import React, { Fragment } from 'react'
import {Row, Col} from 'reactstrap'
import './air-condition.scss'

const AirCondition = ({currentWeather}) => {
  return (
    <Fragment>
        <div className="wrapper-airCondition">
            <div className="wrapper-airCondition-inner">
                <div className="title mb-3">Air Conditions</div>
                <Row>
                    <Col>
                        <div className=" item real__feel mb-3">
                            <div className="item-title mb-2"><i className="fa-solid fa-temperature-three-quarters me-2"></i>Real Feel</div>
                            <div className='ms-4 item-content'>{currentWeather.feelslike_c} °</div>
                        </div>
                    </Col>
                    <Col>
                        <div className="item wind">
                            <div className="item-title mb-2"><i className="fa-solid fa-wind me-2"></i>Wind</div>
                            <div className='ms-4 item-content'>{currentWeather.wind_kph} km/h</div>
                        </div>
                    </Col>
                </Row>
                    
                <Row>
                    <Col>
                        <div className="item cloud">
                            <div className="item-title mb-2"><i className="fa-solid fa-cloud me-2"></i>Cloud cover</div>
                            <div className='ms-4 item-content'>{currentWeather.cloud}%</div>
                        </div>
                    </Col>

                    <Col>
                        <div className="item UV">
                            <div className="item-title mb-2"><i className="fa-solid fa-sun me-2"></i>UV Index</div>
                            <div className='ms-4 item-content'>{currentWeather.uv}</div>
                        </div>
                    </Col>
                </Row>

                <button className='see-more-btn'>See more</button>

            </div>
        

        </div>
    </Fragment>
  )
}

export default AirCondition