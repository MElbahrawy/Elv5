import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo1 from "../../img/logo.webp"
import Logo2 from "../../img/Logo-schindler.png"
import Logo3 from "../../img/pic4.png"
import Logo4 from "../../img/032120221626156238a727c4740.png"
export default function TopCompanies() {
  return (
    <div className='my-5'>
      <Container>
        <Row>
            <div className='d-flex justify-content-between'>
            <h3>أبرز شركائنا</h3>
            <Button className='more-btn'> <Link to={"/companies"}>المزيد</Link> </Button>
            </div>
        </Row>
        <Row className='my-5 justify-content-center d-flex align-items-center'>
            <Col lg="3" md="6" className='flex-center top-company'><img src={Logo1} alt="logo" className='img' /></Col>
            <Col lg="3" md="6" className='flex-center top-company'><img src={Logo2} alt="logo" className='img' /></Col>
            <Col lg="3" md="6" className='flex-center top-company'><img src={Logo3} alt="logo" className='img' /></Col>
            <Col lg="3" md="6" className='flex-center top-company'><img src={Logo4} alt="logo" className='img' /></Col>
        </Row>
      </Container>
    </div>
  )
}
