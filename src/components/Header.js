import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "../styles/Header.scss";
import AddAdvertisementModal from "./AddAdvertisementModal"
import LogOutModal from "./LogOutModal"


class Header extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          loggedIn:false,
          AddModalShow: false,
          LogOutModalShow: false,
        }
      }
      componentDidMount(){
        if(localStorage.getItem("key")){
         this.setState({ 
          loggedIn:true
         });
    
        }
      }
    render(){
      let AddModalClose =() => this.setState({AddModalShow:false}); 
      let LogOutModalClose=() => this.setState({LogOutModalShow:false});

        return(
            <Navbar className="color-nav navBar" collapseOnSellect expand="lg" variant="dark">
                <Navbar.Brand className="logo" href="/">VetFinder</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
             <Navbar.Collapse id="responsive-navbar-nav">
                 <Nav className="mr-auto"/>
                <Nav>
                    <Nav.Link href = "/">HOME</Nav.Link>
                    <Nav.Link hidden={!(this.state.loggedIn)} href="/info">INFO</Nav.Link>
                    <Nav.Link hidden={this.state.loggedIn} href = "/login">LOG IN</Nav.Link>
                    <Nav.Link hidden={this.state.loggedIn} href = "/signup">SIGN UP</Nav.Link>
                    <Nav.Link hidden={!(this.state.loggedIn)} onClick={()=>this.setState({AddModalShow:true})} >ADD</Nav.Link>
                    <Nav.Link hidden={!(this.state.loggedIn)} onClick={()=>this.setState({LogOutModalShow:true})}>LOG OUT</Nav.Link>
                    <AddAdvertisementModal
                    show={this.state.AddModalShow}
                    onHide = {AddModalClose}
                    />
                    <LogOutModal
                    show = {this.state.LogOutModalShow}
                    onHide = {LogOutModalClose}
                    />

                </Nav>
             </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Header;