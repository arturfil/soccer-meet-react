import React, { useState } from 'react';
import {Link, withRouter} from 'react-router-dom';
import { Navbar, NavbarToggler, NavItem, Collapse, Nav, NavLink, NavbarBrand, NavbarText, DropdownToggle } from 'reactstrap';

import './Navigation.css';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <div>
      <Navbar color="light" light expand="md">
        <div className="container">
          <NavbarBrand href="/">Soccer Meet</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink >
                  <Link to="/" className="links">
                    Home
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link to="/" className="links">
                    Games
                  </Link>
                </NavLink>
              </NavItem>
            </Nav>
            <NavbarText>
              <NavLink>
                <Link to="/">
                  Log Out
                </Link>
              </NavLink>
            </NavbarText>
          </Collapse>
        </div>
      </Navbar>
      </div>
    </>
  )
}

export default withRouter(Navigation);