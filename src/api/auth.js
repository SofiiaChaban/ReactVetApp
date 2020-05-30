export async function loginUser(username, email, password) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
  
    const response = await fetch(`http://127.0.0.1:8000/rest-auth/login/`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    });
  
    if (response === null) {
      console.log("LOGIN ERROR!!!");
      return "Login error!";
    }
  
    return response.json();
  }
  
  export async function registerUser(username, email, password, passwordDup) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
  
    const response = await fetch(`http://127.0.0.1:8000/rest-auth/registration/`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        username: username,
        email: email,
        password1: password,
        password2: passwordDup
      }),
    });
  
    if (response === null) {
      console.log("LOGIN ERROR!!!");
      return "Login error!";
    }
  
    return response.json();
  }
  