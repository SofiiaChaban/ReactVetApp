export async function fetchUsers() {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
  
    const response = await fetch(`http://127.0.0.1:8000/users/`, {
      method: "GET",
      headers
    });
  
    if (response === null) {
      console.log("FETCH ERROR!!!");
      return "Fetch error!";
    }
  
    return response.json();
  }

export async function getUser(id){
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const response = await fetch("http://127.0.0.1:8000/users/"+id,{
       method:"GET",
       headers 
    });
    if (response === null) {
        console.log("FETCH ERROR!!!");
        return "Fetch error!";
      }
    
      return response.json();
    
}

export async function updateUser(id,username,email,password){
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
  
    const response = await fetch(`http://127.0.0.1:8000/users/`+id, {
      method: "PUT",
      headers,
      body: JSON.stringify({
          id:id,
          username: username,
          email: email,
          password:password
      }
      )
    });
  
    if (response === null) {
      console.log("PUT ERROR!!!");
      return "PUT error!";
    }
  
    return response.json();
  
  }
  
  
  export async function deleteUser(id){
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    
    const response = await fetch('http://127.0.0.1:8000/users/' + id,{
      method: "DELETE",
      headers
    })
    if (response === null) {
      console.log("FETCH ERROR!!!");
      return "Fetch error!";
    }
    window.location.reload();
    //return response.json();
  }


  export default fetchUsers
