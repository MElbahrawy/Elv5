import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function CrudBtns() {
  return (
    <div className='d-flex gap-3'>
      <Button variant='success'> <Link to={""} style={{color:"white"}}>عرض</Link> </Button>
      <Button variant='warning'><Link to={"id"} style={{color:"black"}}>تعديل</Link> </Button>
      <Button variant='danger'> حذف</Button>
    </div>
  )
}
