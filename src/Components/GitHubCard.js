import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import profilePhoto from '../images/profile-photo.jpeg';


function GHCard (props) {
    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={profilePhoto} style={{width: '400px'}} />
        <Card.Body>
          <Card.Title>RockyIbarra96</Card.Title>
          <Card.Text>
            Hi, I'm Rocky and I like to party and code. 
          </Card.Text>
          <Button variant="primary">Go to GitHub Profile</Button>
        </Card.Body>
      </Card>
    )
  }

  export default GHCard