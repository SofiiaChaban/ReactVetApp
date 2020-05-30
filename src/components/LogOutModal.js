import React from "react";
import {Modal, Button} from 'react-bootstrap';

class LogOutModal extends React.Component{


    yesButton(){
        localStorage.removeItem("key");
        window.location.href="/";
    }
    render(){
        return(
            <Modal
                {...this.props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                <Modal.Title>Log out</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to log out?</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={()=>this.yesButton()}>
                    Yes
                </Button>
                </Modal.Footer>
            </Modal>
        );
    }

}

export default LogOutModal;