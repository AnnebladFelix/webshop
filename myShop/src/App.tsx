import { sampleProducts } from './Data'
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap'

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
            <Row>
              {sampleProducts.map(product => (
                <Col key={product.slug} sm={6} md={4} lg={3}>
                  <h2>
                    {product.name}
                  </h2>
                  <p>
                    {product.category}
                  </p>
                  <p>
                    {product.brand}
                  </p>
                  <p>
                    {product.price} kr
                  </p>
                  <img className='product-image' src={product.image} alt={product.name} />
                </Col>
              )) }
            </Row>
          </Container>
        </main>
        <footer></footer>
      </div>
    </>
  )
}

export default App
