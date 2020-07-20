import React, { Component } from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import sstk_logo from './sstk_viewfinder_rgb.png';


const Navig = () => {
      return (
        <>
          <Navbar bg="light">
            <Navbar.Brand href="http://localhost:3000/">
              <img src={sstk_logo} width="30" height="30" className="ml-5"/>
            </Navbar.Brand>
            {/* <Navbar.Collapse className="justify-content-end">
              <NavDropdown title="Library" id="basic-nav-dropdown" className="mr-5">
                <NavDropdown.Item href="#home">Shutterstock</NavDropdown.Item>
                <NavDropdown.Item href="#home">Offset</NavDropdown.Item>
              </NavDropdown>
            </Navbar.Collapse> */}
          </Navbar>
        </>
      )
    }
  

  export default Navig;