import {useEffect, useState} from 'react';
import {Form, Col} from 'react-bootstrap';

const Contact = ({ header }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

    return (
      <div className='contenedor'>
        <h1>Don't hesitate to contact us</h1>
      <p>You can send to us your projects, creative processes, all what you think that it will be cool to show to the world :)</p>
        <Form.Row>
        <Col>
          <Form.Control placeholder="First name" />
         </Col>
          <Col>
            <Form.Control placeholder="Last name" />
          </Col>
          </Form.Row>
          <Form.Row>
          <Form.File id="uploader" label="Upload your files" />
          </Form.Row>
          <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Control as="textarea" rows={3} placeholder="Feel free to contact us!" />
          </Form.Group>
        
      </div>     
      )    
  };
  
  export default Contact