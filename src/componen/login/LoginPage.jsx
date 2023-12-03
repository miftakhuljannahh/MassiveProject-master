import React from "react";
import Bgimage from "/public/img/LOGIN.png";
import imglogin from "/public/img/login_gambar.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import {FaFacebook} from 'react-icons/fa'
import "./LoginPage.css";

export const LoginPage = () => {
  return (
    <div>
      <div className="login  h-vh-100">
        <div
          className="bg-image"
          style={{
            backgroundImage: `url(${Bgimage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            height: "100vh",
          }}
        >
          {" "}
          <div className="body">
            <div className="login-container">
              <div className="form-left">
                <Form className="login-form">
                  <h2>Login</h2>

                  <div className="lgn-btn">
                    <Button variant="outline">
                    <svg class="icon" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  ></path>
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  ></path>
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  ></path>
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  ></path>
                  <path d="M1 1h22v22H1z" fill="none"></path></svg>
                   Login with Google
                    </Button>
                  </div>

                  <div className="lgn-btn">
                    <Button variant="outline">
                    <FaFacebook style={{ width:"1.5rem", height:"1.5rem", marginRight:"5px", color: "rgb(30, 144, 255)"}}/> Login with Facebook
                    </Button>
                  </div>
                  
                  <div className="form-group">
                    <Form.Label>Email</Form.Label>
                    <Form.Text className="text-muted"></Form.Text>
                    <Form.Control
                      type="email"
                      placeholder="Masukkan Email" required=""
                      style={{
                        border: "none",
                        borderBottom: "2px solid #333",
                        marginBottom: "20px",
                        padding: "5px",
                        fontSize: "14px",
                      }}
                    />
                  </div>

                  <div className="form-group">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Masukkan Password" required=""
                      style={{
                        border: "none",
                        borderBottom: "2px solid #333",
                        marginBottom: "20px",
                        padding: "5px",
                        fontSize: "14px",
                        width: "100%",
                        boxSizing: "border-box",
                      }}
                    />
                  </div>

                  <div className="checkbox">
                    <Form.Check type="checkbox" label="Ingat Saya" />
                  </div>

                  <div className="login-btn">
                    <Link to={"/home"}>
                      <Button type="submit">Login</Button>
                    </Link>
                  </div>

                  <h6 className="text-black text-start w-100">
                    Belum punya akun?{" "}
                    <Link to={"/regis"} className="text-decoration-none ">
                      Daftar di sini
                    </Link>
                  </h6>
                </Form>
              </div>
              <div className="img-right">
                <img src={imglogin} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
