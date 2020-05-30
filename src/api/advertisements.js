export async function fetchAdvertisements() {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
  
    const response = await fetch(`http://127.0.0.1:8000/backend/advertisments`, {
      method: "GET",
      headers
    });
  
    if (response === null) {
      console.log("FETCH ERROR!!!");
      return "Fetch error!";
    }
  
    return response.json();
  }

export async function addAdvertisement(title,doctor,phone,email,freetime,city,type){
  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  const response = await fetch(`http://127.0.0.1:8000/backend/advertisments/add`, {
    method: "POST",
    headers,
    body: JSON.stringify({
        title: title,
        doctor: doctor,
        phone: phone,
        email: email,
        freetime: freetime,
        city: city,
        type: type
    }
    )
  });

  if (response === null) {
    console.log("ADD ERROR!!!");
    return "ADD error!";
  }

  return response.json();

}

export async function getAdvertisement(id){
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  
  const response = await fetch('http://127.0.0.1:8000/backend/advertisments/' + id,{
    method: "GET",
    headers
  })
  if (response === null) {
    console.log("FETCH ERROR!!!");
    return "Fetch error!";
  }
  return response.json();
}

export async function updateAdvertisement(id,title,doctor,phone,email,freetime,city,type){
  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  const response = await fetch(`http://127.0.0.1:8000/backend/advertisments/`+id, {
    method: "PUT",
    headers,
    body: JSON.stringify({
        title: title,
        doctor: doctor,
        phone: phone,
        email: email,
        freetime: freetime,
        city: city,
        type: type
    }
    )
  });

  if (response === null) {
    console.log("PUT ERROR!!!");
    return "PUT error!";
  }

  return response.json();

}


export async function deleteAdvertisement(id){
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  
  const response = await fetch('http://127.0.0.1:8000/backend/advertisments/' + id,{
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

export default addAdvertisement;
  