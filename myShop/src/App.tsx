import { Container, Nav, Navbar } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <div className='d-flex flex-column' id='app-container'>
        <header>
          <Navbar bg='dark' variant='dark' expand='lg' >
            <Container>
              <Navbar.Brand href='#home'>
                My Shop
              </Navbar.Brand>
            </Container>
              <Navbar.Toggle aria-controls='basic-navbar-nav' />
              <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='me-auto'>
                  <Nav.Link href='#home'>Home</Nav.Link>
                  <Nav.Link href='#link'>Link</Nav.Link>
                </Nav>
              </Navbar.Collapse>
          </Navbar>
        </header>
        <main>
          <Container className='mt-3'>
            <Outlet />
          </Container>
        </main>
        <footer></footer>
      </div>
    </>
  )
}

export default App
