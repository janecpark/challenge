import React, {useState} from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink
  } from 'reactstrap';

const NavMenu = () =>{
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () =>{
        setIsOpen(!isOpen)
    }
    return(
        <div>
           <Navbar color="white" light expand="md">
              <NavbarToggler onClick={toggle} />
              <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                  <NavItem>
                    <NavLink className="active" href="#">Link 1</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">Link 2</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">Link 3</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">Link 4</NavLink>
                  </NavItem>
                </Nav>
        <button href="/" className='btn btn-primary nav-btn'>Lorem Ipsum</button>
        </Collapse>
      </Navbar>
        </div>
    )
}

export default NavMenu;