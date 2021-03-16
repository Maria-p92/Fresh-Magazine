import {useEffect, useState} from 'react';
import {Form, Col, Button} from 'react-bootstrap';

const Contact = ({ header }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

    return (
      <div className='container'>
        <h1 className='titleSec'>Don't hesitate to contact us!</h1>
        <p className='philoText'>You can send to us your projects, creative processes, all what you think that it will be cool to show to the world :)</p>
        <p style={{marginBottom:'3rem'}}>If you have any questions or just want to tell us something, please fill in the form below.</p>
        <Form>
        <Form.Row>
        <Col>
          <Form.Control placeholder="Name" />
         </Col>
          <Col>
            <Form.Control placeholder="Email" />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
          </Col>
          </Form.Row>
          <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Control as="textarea" rows={3} placeholder="Feel free to contact us!" />
          </Form.Group>
          <Form.Row>
            <Form.File id="uploader" label="Upload your files" />
          </Form.Row>
          <Form.Row style={{justifyContent:'center'}}>
          <Button id='bcontact' variant="primary" type="submit"> Submit</Button>
          </Form.Row>
        </Form>
        
      </div>     
      )    
  };
  
  export default Contact