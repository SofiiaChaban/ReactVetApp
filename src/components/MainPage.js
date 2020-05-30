import React from "react";
import "../styles/MainPage.scss"
import SearchBar from "../components/SearchBar";
import { Form, Button, FormControl } from "react-bootstrap";
import Advertisements from "../components/Advertisements.js";
import { fetchAdvertisements } from "../api/advertisements";
import { getAdvertisements } from "../reducers/advertisements";
import { connect } from 'react-redux'
import FilterBar from "../components/FilterBar.js"




class MainPage extends React.Component{
    constructor(props){
        super(props);
    
        this.onChangeFilter = this.onChangeFilter.bind(this);
    
    
        this.state={
          filter:"",
          advertisements:[]
        }
      }
    
    
      onChangeFilter(ev){
        this.setState({
          filter: ev.target.value
         });
      }

      componentDidMount(){
        fetchAdvertisements()
        .then(
          (result) =>{
            this.setState({
              isLoaded:true,
              advertisements:result
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )

      }

    render(){
        const filter = this.state.filter
        return(
            <section>
                <div className="MainPage">
                        <div className="maintext">
                            <h1 className="welcome">Welcome</h1>
                            <p className="lea">Here you can find all for your pet</p>
                        </div>
                        <Form className="SearchBar">
                            <FormControl value={filter} type="text" className="input mr-sm-2" onChange={this.onChangeFilter} placeholder="Search..." />
                        </Form>
            </div>
            <div className="recents"><span>Recent searches</span></div>
            <Advertisements data={this.state.advertisements.filter(appointment=>
            appointment.title.toLowerCase().includes(filter.toLowerCase()))}/>
            <FilterBar advertisements = {this.state.advertisements.filter(appointment=>
            appointment.title.toLowerCase().includes(filter.toLowerCase()))} />
           </section>
        );
    }
}



export default MainPage;