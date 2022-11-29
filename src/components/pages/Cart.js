import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const navigate=useNavigate()
  return (
    <div><Button variant="warning" onClick={()=>navigate("/address")}>Next</Button></div>
  )
}

export default Cart