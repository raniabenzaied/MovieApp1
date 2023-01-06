import React, { useState } from 'react';
import {Button,Modal} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

function Example({addHandler}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  //
const[Title,setTitle] = useState('')
const[description,setDescription] = useState('')
const[PosterUrl,setPosterUrl] = useState('')
const[rate,setRate] = useState('')

const addMovie = ()=>{
  const newMovie = {id : Math.random() , Title , rate , description , PosterUrl}
  addHandler(newMovie)
  handleClose()
}
  return (
    <div className='btn'>
    <>
      <Button  variant="dark" onClick={handleShow}>
        Add A New Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie Title</Form.Label>
        <Form.Control type="title" placeholder="Enter the name of the movie"   onChange={(e)=>setTitle(e.target.value)}  value = {Title}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie Description</Form.Label>
        <Form.Control type="text" placeholder="Description" onChange={(e)=>setDescription(e.target.value)}  value = {description}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Rate</Form.Label>
        <Form.Control type="email" placeholder="The movie Rate "  onChange={(e)=>setRate(e.target.value)}  value = {rate}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>PosterUrl</Form.Label>
        <Form.Control type="text" placeholder="the Poster URL "  onChange={(e)=>setPosterUrl(e.target.value)}  value = {PosterUrl} />
        </Form.Group>
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addMovie}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    
    </>
    </div>
  );
}

export default Example 