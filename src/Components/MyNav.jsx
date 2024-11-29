import {Nav,Navbar,Container} from 'react-bootstrap';

function MyNav({logo,wanda}) {
  return (
    <Navbar expand="lg" className="bg-dark" fixed='top'>
      <Container fluid className='m-0'>
        <Navbar.Brand className=' me-0'>
        <img className='App-logo '
          src={logo}
          alt="logo"
        />
        </Navbar.Brand>
        <Navbar.Toggle  className="text-dark bg-white" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="text-white d-flex justify-content-center justify-content-lg-between " id="basic-navbar-nav">
          <Nav className="bg-dark text-white ">
            <Nav.Link className="color text-center" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="color text-center" href="#link">
              TV Shows
            </Nav.Link>
            <Nav.Link className="color text-center" href="#link">
              Movies
            </Nav.Link>
            <Nav.Link className="color text-center" href="#link">
              Recently Added
            </Nav.Link>
            <Nav.Link className="color text-center" href="#link">
              My List
            </Nav.Link>
          </Nav>
          <div className='me-1 d-flex align-items-center'>
          <i class="bi bi-search me-3"></i>
          <Nav.Link href="">
          <img src={wanda} alt="wanda" style={{width:"35px",height:"35px"}}/>
            </Nav.Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;