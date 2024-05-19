import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import styles from "./HeaderNav.module.css";

function HeaderNav() {
  const CustomTitle = () => (
    <div className={styles["offcanvas-header-nav_title"]}>Portfolio</div>
  );

  return (
    <>
      {[false].map((expand) => (
        <Navbar
          fixed="top"
          expand={expand}
          className={`mb-3 ${styles["header-nav_bg-color"]}`}
        >
          <Container fluid>
            <Navbar.Brand
              className={`navbar-brand ${styles["header-nav_brand"]}`}
              href="#"
            >
              Portfolio
            </Navbar.Brand>

            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              className={`navbar-toggler ${styles["header-nav_toggler"]}`}
            />

            <Navbar.Offcanvas
              scroll
              className={`offcanvas ${styles["offcanvas-container"]}`}
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header
                className={`offcanvas-header  ${styles["offcanvas_header"]}`}
                closeButton
              >
                <Offcanvas.Title
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                  as={CustomTitle}
                ></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav
                  className={`justify-content-end flex-grow-1 pe-3 ${styles["offcanvas_nav-content-container"]}`}
                >
                  <Nav.Link href="#Home">Home</Nav.Link>
                  <Nav.Link href="#About">About</Nav.Link>
                  <Nav.Link href="#Qualifications">Qualifications</Nav.Link>
                  <Nav.Link href="#Expertise">Expertise</Nav.Link>
                  <Nav.Link href="#Resume">Resume</Nav.Link>
                  <Nav.Link href="#Contact">Contact</Nav.Link>
                </Nav>
                <div className={styles["offcanvas_copyright-container"]}>
                  <p>
                    &copy; 2024 GBS <br />
                    Created by 4E6F
                  </p>
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default HeaderNav;
