import React, { useContext } from "react"
import { Navbar, Nav, NavDropdown, Container, Badge } from "react-bootstrap"
import { Link } from "react-router-dom"
import Git from "../../images/contentGit.gif"
import { UserContext } from "../../userContext"
import { userTypes } from "../../userContext/userTypes"

const Header = () => {
  const [{ userInfo, currentUser }, dispatch] = useContext(UserContext)
  console.log(userInfo)
  return (
    <Navbar bg="" expand="md">
      <Container>
        <Navbar.Brand>
          {" "}
          <Link to="/home" className="nav-link">
            {" "}
            {/* <h1>
              {" "}
              <Badge bg="dark">Content.</Badge>
            </h1> */}
            <img src={Git} width="160px" height="100px" alt="" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Link to="/home" className="nav-link">
                {" "}
                Home
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/about" className="nav-link">
                {" "}
                About
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/blog" className="nav-link">
                {" "}
                Blog
              </Link>
            </Nav.Item>

            {!currentUser ? (
              <NavDropdown title="Account" id="basic-nav-dropdown">
                <NavDropdown.ItemText>
                  <Link to="/login"> Login</Link>
                </NavDropdown.ItemText>
                <NavDropdown.ItemText>
                  <Link to="/register"> Sign Up</Link>
                </NavDropdown.ItemText>
                <NavDropdown.ItemText></NavDropdown.ItemText>
              </NavDropdown>
            ) : (
              <NavDropdown title="Account" id="basic-nav-dropdown">
                <NavDropdown.ItemText>
                  <Link to="/account/newpost"> Create a Post</Link>
                </NavDropdown.ItemText>
                <NavDropdown.ItemText>
                  <Link to="/account/myposts"> My All Posts </Link>
                </NavDropdown.ItemText>
                <NavDropdown.ItemText
                  onClick={() => {
                    dispatch({
                      type: userTypes.USER_LOGOUT,
                    })
                  }}
                >
                  <Link to="/">Logout</Link>
                </NavDropdown.ItemText>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
