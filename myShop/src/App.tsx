
import './App.css'
import { sampleProducts } from './Data'

function App() {
  return (
    <>
      <header><h1>My webshop</h1></header>
      <main>
        {sampleProducts.map(product => (
          <li key={product.slug}>
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
          </li>
        )) }
      </main>
      <footer></footer>
    </>
  )
}

export default App
