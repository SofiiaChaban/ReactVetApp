import React from "react";
import {Modal, Button, Form} from 'react-bootstrap';

import { getUser, updateUser } from '../api/users.js';

class UserUpdateModal extends React.Component{
    constructor(props){
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);

        this.get = this.get.bind(this);
        this.update = this.update.bind(this);

        this.state = {
            username: "",
            email: "",
            password:""
        }

    }

    componentDidMount(){
        this.get(this.props.activeId)
      }
      

      onChangeUsername(ev){
        const username = ev.target.value;
      
        this.setState(function(prevState){
          return {
                username: username,
            ...prevState.email,
          };
        });
      }
      onChangeEmail(ev){
        const email = ev.target.value;
      
        this.setState(function(prevState){
          return {
            ...prevState.username,
                email : email,
          };
        });
      }

      update(ev) {
        ev.preventDefault();
        const { username,email,password } = this.state;
        if (username && email && password) {
        updateUser(this.props.activeId,username,email,password);
          this.setState({ error: false });
        } else this.setState({ error: true });
        window.location.href="/info";
      }

      get(id){
        getUser(id)
          .then( response=>{
            this.setState({
              username: response.username,
              email:response.email,
              password:response.password
            })
          })

      }

      render(){
        const {username,email} = this.state;
        return(
          <Modal
        {...this.props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit User
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group controlId = "username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="username" value={username} onChange={this.onChangeUsername}/>
                </Form.Group>
            </Form>
            <Form>
                <Form.Group controlId = "email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email"  value={email} onChange={this.onChangeEmail} />
                </Form.Group>
            </Form>
            
        </Modal.Body>
        <Modal.Footer>
            <Button variant="success" onClick={(ev) => this.update(ev)}>Submit</Button>
            <Button variant="danger" onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
        );
      }
}
export default UserUpdateModal;
