import React from 'react'
import {Navbar, Nav,NavDropdown} from 'react-bootstrap'
// import {LinkContainer} from 'react-router-bootstrap'



class header extends React.Component{
    constructor(props){
        super(props)
        this.Header=this.Header.bind(this)
    }
          Header=()=>{
        
        return (
            <div>
                  <Navbar bg="light" expand="lg">
                  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#link">Link</Nav.Link>
                  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                       <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                                   <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                          <NavDropdown.Divider />
                                              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                         </NavDropdown>
                  </Navbar.Collapse>
                  </Navbar>  
            </div>                                          )
           }

                render(){
                    return(
                        <this.Header/>
                    )
                }
    
}

export default header