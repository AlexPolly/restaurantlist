import React from 'react'
import { Card } from 'react-bootstrap'

function RestCard() {
  return (
    <>
         <Card style={{width:'250px'}} >
      <Card.Img style={{height:'250px'}} className='rounded p-2' variant="top" src="" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    </>
  )
}

export default RestCard