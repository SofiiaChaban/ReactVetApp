import React from "react";
import {Modal, Button, Form} from 'react-bootstrap';
import { addAdvertisement } from '../api/advertisements.js';

class AddAdvertisementModal extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      title: "",
      doctor: "",
      phone: "",
      email: "",
      freetime: "",
      city: "",
      type: "",
    };
}

add(ev) {
  ev.preventDefault();
  const { title,doctor,phone,email,freetime,city,type } = this.state;
  if (title && doctor && phone && email && freetime && city && type) {
    addAdvertisement(title,doctor,phone,email,freetime,city,type);
    this.setState({ error: false });
  } else this.setState({ error: true });
  window.location.reload(false);
}
  render() {
    const { title,doctor,phone,email,freetime,city,type } = this.state
    return (
        <Modal
        {...this.props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Advertisement
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group controlId = "title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="title" placeholder="Enter title" value={title} onChange={(ev) => this.setState({ title: ev.target.value })}/>
                </Form.Group>
            </Form>
            <Form>
                <Form.Group controlId = "freetime">
                    <Form.Label>Freetime</Form.Label>
                    <Form.Control type="freetime" placeholder="Enter freetime" value={freetime} onChange={(ev) => this.setState({ freetime: ev.target.value })} />
                </Form.Group>
            </Form>
            <Form>
                <Form.Group controlId = "doctor">
                    <Form.Label>Doctor</Form.Label>
                    <Form.Control type="doctor" placeholder="Enter doctor" value={doctor} onChange={(ev) => this.setState({ doctor: ev.target.value })}/>
                </Form.Group>
            </Form>
            <Form>
                <Form.Group controlId = "phone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="phone" placeholder="Enter phone" value={phone} onChange={(ev) => this.setState({ phone: ev.target.value })}/>
                </Form.Group>
            </Form>
            <Form>
                <Form.Group controlId = "email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(ev) => this.setState({ email: ev.target.value })}/>
                </Form.Group>
            </Form>
            <Form>
                <Form.Group controlId = "city">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="Enter city" value={city} onChange={(ev) => this.setState({ city: ev.target.value })}/>
                </Form.Group>
            </Form>
            <Form>
                <Form.Group controlId = "email">
                    <Form.Label>Type</Form.Label>
                    <Form.Control type="type" placeholder="Enter type" value={type} onChange={(ev) => this.setState({ type: ev.target.value })}/>
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="success" onClick={(ev) => this.add(ev)}>Submit</Button>
            <Button variant="danger" onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
      );
  }
}

export default AddAdvertisementModal;
