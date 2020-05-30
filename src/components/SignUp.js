import React from "react";
import "../styles/Auth.scss";
import { registerUser } from "../api/auth.js";
import { Card, Button, Form, Col, FormGroup, Row } from "react-bootstrap";


class SignUp extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
          username: "",
          email: "",
          password: "",
          passwordDup: "",
          error: "",
        };
      }
      register(ev) {
        ev.preventDefault();
        const { username, email, password, passwordDup } = this.state;
        if (username && email && password && passwordDup) {
          registerUser(username, email, password, passwordDup)
            .then(response=>{
              if(response.key!==undefined){
                localStorage.setItem("key",response.key)
              }
            })
          this.setState({ error: false });
        } else this.setState({ error: true });
        window.location.href="/";
      }
    render(){
            const { username, email, password, passwordDup, error } = this.state;
            return (
            <Card className="cardup">
                <Card.Header className="header bg-dark"> <h3>Sign Up</h3></Card.Header>
                <Form>
                <FormGroup className="field">

                    <Form.Control
                        placeholder="Enter username"
                        type="text"
                        value={username}
                        onChange={(ev) => this.setState({ username: ev.target.value })}
                    ></Form.Control>
                </FormGroup>

                <FormGroup className="field">
                    <Form.Control
                        placeholder="Enter email"
                        type="email"
                        value={email}
                        onChange={(ev) => this.setState({ email: ev.target.value })}
                    ></Form.Control>
                </FormGroup>

                <FormGroup className="field">
                    <Form.Control
                        placeholder="Enter password"
                        type="password"
                        value={password}
                        onChange={(ev) => this.setState({ password: ev.target.value })}
                    ></Form.Control>
                </FormGroup>

                <FormGroup className="field">
                    <Form.Control
                        placeholder="Confirm password"
                        type="password"
                        value={passwordDup}
                        onChange={(ev) =>
                        this.setState({ passwordDup: ev.target.value })
                        }
                    ></Form.Control>
                </FormGroup>

                {error && <span>Oops! All form fields should be filled.</span>}
                <Button
                    variant="success"
                    type="submit"
                    value="Sign up"
                    onClick={(ev) => this.register(ev)}
                >
                    Sign up
                </Button>
                <Button
                    variant="danger"
                    href="/"
                >
                    Cancel
                </Button>
                </Form>
            </Card>
            );  
    }
}
export default SignUp;