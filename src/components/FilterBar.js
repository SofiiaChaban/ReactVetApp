import React from "react"
import { Card, ToggleButton, Row } from "react-bootstrap";
import "../styles/FilterBar.scss"
import {setFilter} from "../actions/filters.js"
import { connect } from 'react-redux'
import { getFilter, getAdvertisements } from "../reducers"
import Select from 'react-select';


class FilterBar extends React.Component {

    render() {
      const { filter, advertisements } = this.props

      const cities = advertisements.map(el => el.city).filter((city, i, arr) => arr.indexOf(city) === i).map(el => ({value: el, label: el}));
      return (
        <Card className="FilterBar">
          <Card.Header className="bg-dark header"><b>Filters</b></Card.Header>
         <Card.Body classname="cardBody">
        <div className="filterText">Choose type</div>
        <ToggleButton className="toggleButton" type="checkbox" variant="light" checked={filter.vet} onChange={(ev) => this.props.setNewFilter({vet:ev.target.checked})}>Vet</ToggleButton>
        <ToggleButton className="toggleButton" type="checkbox" variant="light" checked={filter.groomer} onChange={(ev) => this.props.setNewFilter({groomer:ev.target.checked})}>Groomer</ToggleButton>
        <div className="cityText filterText">Choose city</div>
       <Select className="selectCity" options={[{value: "All", label: "All"}, ...cities]} value={{value: filter.city, label: filter.city}} onChange={(val) => this.props.setNewFilter({city: val.value})} />
       </Card.Body>
        </Card>
      );
    }
  }


  const mapDispatchToProps = dispatch => {
    return {
      setNewFilter: (filter) => {
        dispatch(setFilter(filter))
      }
    }
  }

  function mapStateToProps(state) {
    return { filter: getFilter(state)}
  }

  const FilterBarConnected = connect(mapStateToProps, mapDispatchToProps)(FilterBar)

export default FilterBarConnected
