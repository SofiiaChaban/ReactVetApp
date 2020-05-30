import React from "react";
import { Card, Button, Form, Col, FormGroup, Row } from "react-bootstrap";
import "../styles/Auth.scss";
import { loginUser } from "../api/auth.js";


class Login extends React.Component{

    constructor(props) {
        super(props);
    
        this.state = {
          username: "",
          email: "",
          password: "",
          error: "",
        };
      }

      login(ev) {
        ev.preventDefault();
        const { username, email, password } = this.state;
        if (username && email && password) {
          loginUser(username, email, password)
            .then(response=>{
              if(response.key!==undefined){
                localStorage.setItem("key",response.key)
                window.location.href="/";
              }else{localStorage.setItem("key",null)}
            })
          this.setState({ error: false });
        } else this.setState({ error: true });
      }

    render(){
        const { username, email, password, error } = this.state;
        return(
            <div className="auth">
            <Card className="card ">
                <Card.Header className="header bg-dark"><h3 >Log in</h3></Card.Header>
                <Form>
                <Form.Group className="field">
                    <Form.Control  
                    type="text"
                    value={username}
                    placeholder="Enter username"
                    onChange={(ev) => this.setState({ username: ev.target.value })}
                    ></Form.Control>
                </Form.Group>
                <FormGroup>
                    <Form.Control
                        placeholder="Enter email"
                        type="email"
                        value={email}
                        onChange={(ev) => this.setState({ email: ev.target.value })}        
                    ></Form.Control>
                </FormGroup>

                <FormGroup>

                    <Form.Control
                         placeholder="Enter password"
                        type="password"
                        value={password}
                        onChange={(ev) => this.setState({ password: ev.target.value })}
                    ></Form.Control>
                </FormGroup>
                <Button
                    variant="success"
                    type="submit"
                    value="Login"
                    onClick={(ev) => this.login(ev)}
                >
                    Log in
                </Button>
                <Button
                    variant="danger"
                    href="/"
                >
                    Cancel
                </Button>
                </Form>
            </Card>
        </div>
        );
    }
}
export default Login;