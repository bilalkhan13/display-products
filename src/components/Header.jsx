import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "../css/header.css";

export default function Header({ headerControl }) {
  const [backHome, setBackHome] = useState(headerControl.showBackButton);
  const [showHeader, setShowHeader] = useState(headerControl.showHeader);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("username")) {
      return setUsername(false);
    }

    setUsername(localStorage.getItem("username"));
  }, [username]);

  function logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("selectedProduct");
    navigate("/");
  }

  return (
    <>
      {showHeader && (
        <header className="header">
          <h1 className="header-title">Welcome, {username}!</h1>
          <button onClick={() => logout()} className="logout">
            Logout
          </button>
        </header>
      )}
    </>
  );
}
