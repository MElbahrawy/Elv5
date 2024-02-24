import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { users } from "../../Data/users";

export default function CrudBtns({userId}) {
    const deleteUser = (id) => {
        let filteredUsers = users.filter(user => user.id !== id);
        // users = filteredUsers
        console.log(users);
        console.log(filteredUsers);
    }
  return (
    <div className='d-flex gap-3'>
      <Button variant='success'> <Link to={""} style={{color:"white"}}>عرض</Link> </Button>
      <Button variant='warning'><Link to={"id"} style={{color:"black"}}>تعديل</Link> </Button>
      <Button variant='danger' onClick={()=> {deleteUser(userId)}}> حذف</Button>
    </div>
  )
}
 