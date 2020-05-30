import React from "react"
import { Card, Col,Pagination, Row, Button } from "react-bootstrap";
import Vet from "../images/vet.jpg"
import "../styles/Advertisements.scss"
import { connect } from 'react-redux'
import { getFilter } from "../reducers"
import {fetchAdvertisements} from "../api/advertisements"
import UpdateAdvertisementModal from "./UpdateAdvertisementModal.js"

class Advertisements extends React.Component{
    constructor(props){
        super(props)
        this.state = {
         currentPage: 1,
         isLogged:false,
         UpdateModalShow:false,
         currId:null,
        }
      }
      
      componentDidMount(){
        if(localStorage.getItem("key")){
          this.setState({
            isLogged:true
          })
        }
      }

      
      passModalItem(id){
        this.setState({currId:id})
        this.setState({UpdateModalShow:true})
      }

      renderModal = () =>{
        let UpdateModalClose =() => this.setState({UpdateModalShow:false}); 
        const UpdateModalShow = this.state.UpdateModalShow;
        const currId = this.state.currId;
        return(
        <UpdateAdvertisementModal
        activeId = {currId}
        show={UpdateModalShow}
        onHide = {UpdateModalClose}
        />
        );
      }
    render(){
      const{data,features} = this.props;
      const{currentPage} = this.state;
      const appNum = 3;
      const pages = Math.round((data.length)/appNum);
      const start = currentPage * appNum - appNum;

      const filteredApps = data.filter(el => features[el.type.toLowerCase()] && (features.city === "All" || el.city === features.city))
      const advertisementsFiltered = filteredApps.slice(start, start + appNum);
      


        return(
            <div>
            <section className="Advertisements">
            {advertisementsFiltered.map((el, i) => (
            <Card className="deck m-3 item grow bg-light" key={i}>
            <Card.Header>
            <Card.Title className="item-title"><b>{el.title}</b></Card.Title>
              <span className="item-details"><i>{el.city}</i>,</span>
              <span className="item-dateails">{el.freetime}</span>
            </Card.Header>
            <Card.Body>
              {/* <span className="item-details">
                {el.timeStart}-{el.timeEnd}
              </span> */}
              <div className="item-body">
              <Col>
                <div className="item-leftside">
                <span className="item-desc">{el.doctor}</span>
                  <span className="item-desc">{el.type}</span>
                </div>
                </Col>
                <Col>
                <div className="item-leftside">
                  <span className="item-desc">{el.phone}</span>
                  <span className="item-desc">{el.email}</span>
                </div>
                </Col>
                <Button onClick={()=>this.setState({currId:el.id,UpdateModalShow:true})} hidden={!(this.state.isLogged)} className="myButton" variant="info">View</Button>
              </div>
            </Card.Body>
          </Card>
        ))}
          <Row className="buttons justify-content-center">{new Array(pages).fill(0).map((e, i) => (<Pagination.Item  onClick={() => this.setState({currentPage: i+1})} key={i+1} active={i+1 === currentPage}><div>{i+1}</div></Pagination.Item>))}</Row>
          </section>
          {this.state.UpdateModalShow && this.renderModal()}
            </div>
         
        )
    }
  

}
function mapStateToProps(state) {
  return { features: getFilter(state) }
}

const AdvertisementsConnected = connect(mapStateToProps, null)(Advertisements)

export default AdvertisementsConnected;