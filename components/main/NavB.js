import React from "react";
import { userState } from "context/User/UserState";
import User from "./user";
import Image from "next/image";
import Link from "next/link";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Form, FormControl, InputGroup, Row } from "react-bootstrap";
import { FiShoppingCart } from "react-icons/fi";
import { BiSearchAlt } from "react-icons/bi";

export default function NavB({}) {
  const user = userState((state) => state.user); // User state

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      sticky="top"
      className="hover-custom shadow-sm w-100"
    >
      <Container>
        {/* Logo */}
        <Link href="/">
          <Image
            src="/recycling.png"
            width="60"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Link>
        {/* End Logo */}

        {/* NavBar */}
        <div className="d-lg-none d-flex col align-items-baseline mx-2">
          {/* Search */}
          <Form.Control
            className="d-flex flex-grow-1"
            type="search"
            placeholder="Buscar..."
            style={{ borderRadius: "0.375rem" }}
          />

          {/* Cart */}
          <Link href="#deets" className="nav-link ms-2">
            <FiShoppingCart size={24} />
          </Link>
        </div>

        {/* NavBar Toggle */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto flex-fill"></Nav>

          <Nav className="me-auto flex-fill">
            <Link href="/compra" className="nav-link">Comprar</Link>
            <Link href="/vender" className="nav-link">Vender y avaluó</Link>

            {/*             <Nav.Link href="/avaluador">Avaluador</Nav.Link>
             */}

            <Nav.Link href="#"/* "/espera" */  disabled>Lista de espera</Nav.Link>

            <Nav.Link href="#features" disabled>
              Otros servicios
            </Nav.Link>
          </Nav>

          <Nav>
            <Link href="#deets" className="nav-link d-none d-lg-block">
              <BiSearchAlt size={23} />{" "}
            </Link>
            <Link href="#deets" className="nav-link  d-none d-lg-block">
              <FiShoppingCart size={22} />{" "}
            </Link>
            <User />
          </Nav>
        </Navbar.Collapse>
        {/* End NavBar Toggle */}
      </Container>
    </Navbar>
  );
}