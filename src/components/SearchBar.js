import React from "react";
import { Form, Button, FormControl, Row } from "react-bootstrap";
import "../styles/SearchBar.scss"

class SearchBar extends React.Component{

    render(){
        return(
        <Form className="SearchBar">
          <FormControl type="text" placeholder="Search" className="input mr-sm-2" />
          <Button className="searchButton" variant="secondary">Search</Button>
        </Form>
        );
    }
}
export default SearchBar;