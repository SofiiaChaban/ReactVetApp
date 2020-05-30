import React from "react";
import {Modal, Button, Form} from 'react-bootstrap';
import { getAdvertisement, updateAdvertisement,deleteAdvertisement } from '../api/advertisements.js';
import { getAdvertisements } from "../reducers/advertisements.js";
class UpdateAdvertisementModal extends React.Component {

  constructor(props){
    super(props);

    this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeFreetime = this.onChangeFreetime.bind(this);
        this.onChangeDoctor = this.onChangeDoctor.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
    
        this.get = this.get.bind(this);
        this.update = this.update.bind(this);


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

componentDidMount(){
  this.get(this.props.activeId)
}

onChangeTitle(ev){
  const title = ev.target.value;

  this.setState(function(prevState){
    return {
          title: title,
      ...prevState.doctor,
      ...prevState.phone,
      ...prevState.email,
      ...prevState.freetime,
      ...prevState.city,
      ...prevState.type

    };
  });
}

onChangeDoctor(ev){
  const doctor = ev.target.value;

  this.setState(function(prevState){
    return {
      ...prevState.title,
         doctor: doctor,
      ...prevState.phone,
      ...prevState.email,
      ...prevState.freetime,
      ...prevState.city,
      ...prevState.type

    };
  });
}


onChangePhone(ev){
  const phone = ev.target.value;

  this.setState(function(prevState){
    return {
      ...prevState.title,
      ...prevState.doctor,
         phone: phone,
      ...prevState.email,
      ...prevState.freetime,
      ...prevState.city,
      ...prevState.type

    };
  });
}

onChangeEmail(ev){
  const email = ev.target.value;

  this.setState(function(prevState){
    return {
      ...prevState.title,
      ...prevState.doctor,
      ...prevState.phone,
          email: email,
      ...prevState.freetime,
      ...prevState.city,
      ...prevState.type

    };
  });
}

onChangeFreetime(ev){
  const freetime = ev.target.value;

  this.setState(function(prevState){
    return {
      ...prevState.title,
      ...prevState.doctor,
      ...prevState.phone,
      ...prevState.email,
          freetime: freetime,
      ...prevState.city,
      ...prevState.type

    };
  });
}

onChangeCity(ev){
  const city = ev.target.value;

  this.setState(function(prevState){
    return {
      ...prevState.title,
      ...prevState.doctor,
      ...prevState.phone,
      ...prevState.email,
      ...prevState.freetime,
          city: city,
      ...prevState.type
    };
  });
}

onChangeType(ev){
  const type = ev.target.value;

  this.setState(function(prevState){
    return {
      ...prevState.title,
      ...prevState.doctor,
      ...prevState.phone,
      ...prevState.email,
      ...prevState.freetime,
      ...prevState.city,
      type: type,

    };
  });
}


update(ev) {
  console.log("in update");
  ev.preventDefault();
  const { title,doctor,phone,email,freetime,city,type } = this.state;
  if (title && doctor && phone && email && freetime && city && type) {
    updateAdvertisement(this.props.activeId,title,doctor,phone,email,freetime,city,type);
    this.setState({ error: false });
  } else this.setState({ error: true });
  window.location.href="/";
}

 get(id){
  getAdvertisement(id)
    .then( response=>{
      this.setState({
        id: response.id,
        title: response.title,
        doctor: response.doctor,
        phone: response.phone,
        email: response.email,
        freetime: response.freetime,
        city: response.city,
        type: response.type
      })
    })

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
            Edit Advertisement
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
            <Button variant="success" onClick={(ev) => this.update(ev)}>Submit</Button>
            <Button variant="danger" onClick={() => deleteAdvertisement(this.props.activeId)}>Delete</Button>
        </Modal.Footer>
      </Modal>
      );
  }
}

export default UpdateAdvertisementModal;
