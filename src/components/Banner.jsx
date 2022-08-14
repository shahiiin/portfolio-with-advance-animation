import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import {FiArrowRightCircle} from 'react-icons/fi'
const Banner = () => {
    return (
        <selection className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className='tagline'>
                            Welcome to my portfolio
                        </span>
                        <h1>{'Hi i am shahin'}<span className='wrap'>Web developer</span></h1>
                        <button onClick={() => console.log('connect')}>Let’s Connect <FiArrowRightCircle size={25} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                    </Col>
                </Row>
            </Container>
        </selection>
    )
}

export default Banner