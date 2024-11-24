import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPizzaSlice,
  faUser,
  faLock,
  faUnlock,
  faRightFromBracket,
  faRightToBracket,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons"; // Importa el ícono de pizza

const Fn_Navbar = () => {
  const total = 25000;
  const token = false;
  return (
    <div className="Navbar">
      <Navbar bg="dark" data-bs-theme="white" className="d-flex">
        <Container className="d-flex w-100">
          <Navbar.Brand href="#home" className="texto_brand text-white">
            <h4> ¡Pizzería Mamma Mia!</h4>
          </Navbar.Brand>
          <Nav className=" d-flex">
            <button
              type="button"
              className=" ms-auto boton_esatdo_home btn btn-primary"
            >
              <FontAwesomeIcon
                icon={faPizzaSlice}
                style={{ marginRight: "5px", color: "yellow" }}
              />
              Home
            </button>
            <button
              type="button"
              className={token ? "boton_esatdo btn btn-primary" : "d-none"}
            >
              <FontAwesomeIcon icon={faUser} style={{ marginRight: "5px" }} />{" "}
              Profile
            </button>
            <button
              type="button"
              className={token ? "boton_esatdo btn btn-primary" : "d-none"}
            >
              <FontAwesomeIcon
                icon={faRightFromBracket}
                style={{ marginRight: "5px" }}
              />{" "}
              Logout
            </button>
            <button
              type="button"
              className={token ? "d-none" : "boton_esatdo btn btn-primary"}
            >
              <FontAwesomeIcon
                icon={faRightToBracket}
                style={{ marginRight: "5px" }}
              />{" "}
              Login
            </button>
            <button
              type="button"
              className={token ? "d-none" : "boton_esatdo btn btn-primary"}
            >
              <FontAwesomeIcon icon={faUnlock} style={{ marginRight: "5px" }} />{" "}
              Register
            </button>
          </Nav>
          <Nav className="d-flex ms-auto">
            <button
              type="button"
              className=" boton_total
             btn btn-primary "
            >
              <FontAwesomeIcon
                icon={faCartShopping}
                style={{ marginRight: "5px" }}
              />{" "}
              Total: ${total.toLocaleString("es-ES")}
            </button>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Fn_Navbar;
