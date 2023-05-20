import { useEffect } from "react";
import LoginForm from "../components/LoginForm";
import "../css/login.css";

export default function Login({ updateHeader }) {
  useEffect(() => {
    updateHeader({ showHeader: false, showBackButton: false });
  }, []);

  return (
    <>
      <div className="container">
        <div className="">
          <h1>User Login!</h1>
          <div className="form-container">
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
}
