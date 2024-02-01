import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import UsersCrud from '../../components/Crud/UsersCrud'
import CrudCat from '../../components/Crud/CrudCat'

export default function AdminPage() {
  return (
    <Container className='my-4'>
      <Row>
        <Col sm="2"  >
            <CrudCat/>
        </Col>
        <Col sm="10" >
            <UsersCrud/>
        </Col>
      </Row>
      </Container>
  )
}
