import React from "react"
import fetchUsers from "../api/users"
import {Table, Button} from 'react-bootstrap';
import UserUpdateModal from "./UserUpdateModal"
import "../styles/UserList.scss"
import {deleteUser} from  "../api/users"

class UserList extends React.Component{
    constructor(props){
        super(props);
    

    
        this.state={
          users:[],
          UpdateModalShow: false,
          currId:null,
        }
      }
      componentDidMount(){
          fetchUsers()
          .then(
              (result) =>{
                  this.setState({
                      users: result,
                  })
              });
      }

      removeUser(id){
        console.log(id)
        deleteUser(id)
          .then(
            window.location.reload()
          )
      }

      renderModal = () =>{
        let UpdateModalClose =() => this.setState({UpdateModalShow:false}); 
        const UpdateModalShow = this.state.UpdateModalShow;
        const currId = this.state.currId;
        return(
        <UserUpdateModal
        activeId = {currId}
        show={UpdateModalShow}
        onHide = {UpdateModalClose}
        />
        );
        }

      render(){
          const users = this.state.users
          return(
            <div className="UserList">
            <Table className="table"   striped bordered hover className="table-light" responsive>
            <thead className="thead-dark">
              <th>Username</th>
              <th>Email</th>
              <th></th>
              <th></th>
            </thead>
            <tbody className=" align-middle ">
              {users.map((el, i) => (
              <tr className="">
                  <th>{el.username}</th>
                  <th>{el.email}</th>
                  <th><Button variant="secondary"  onClick={()=>this.setState({currId:el.id,UpdateModalShow:true})}>Edit</Button></th>
                  <th> <Button variant="danger" onClick={()=>deleteUser(el.id)}>Delete</Button></th>
                  
          </tr>
          ))}
      </tbody>
      </Table>
      {this.state.UpdateModalShow && this.renderModal()}
      </div>
          );
      }
}
export default UserList;