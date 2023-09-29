import { Col, Row } from 'react-bootstrap'
import { sampleProducts } from '../Data'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <>
        <Row>
              {sampleProducts.map(product => (
                <Col key={product.slug} sm={6} md={4} lg={3}>
                    <Link to={`/product/${product.slug}`}>
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
                    </Link>
                </Col>
              )) }
        </Row>
    </>
  )
}
