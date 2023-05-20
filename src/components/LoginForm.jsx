import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/loginForm.css";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const errorSpan = document.getElementById("error");
    const regex = /^[a-zA-Z\s]*$/;

    if (username) {
      console.log(username);
      if (username.match(regex)) {
        localStorage.setItem("username", username);
        navigate("/home");
      } else {
        errorSpan.innerText = "Name must only contain letters and spaces.";
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Please enter your name</label>
      <input
        type="text"
        id="username"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <span id="error"></span>
      <button type="submit">Submit</button>
    </form>
  );
}

// import { useState, useEffect } from "react";

// export default function loginForm() {
//   const [userName, setUserName] = useState("");

//   useEffect(() => {
//     const storedName = localStorage.getItem("userName");
//     if (!storedName) {
//       const name = prompt("Please enter your name:");
//       if (name) {
//         localStorage.setItem("userName", name);
//         setUserName(name);
//       }
//     } else {
//       setUserName(storedName);
//     }
//   }, []);

//   return (
//     <>
//       <h1>User Login</h1>
//       <div>
//         <h1>Welcome, {userName}!</h1>
//       </div>
//     </>
//   );
// }
