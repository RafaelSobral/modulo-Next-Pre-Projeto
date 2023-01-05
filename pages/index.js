import Link from 'next/link'


const Index = () => {
  return (
    <div>
      <h1>HELLO WORLD</h1>
      <h2>HOME</h2>
      <ul>
        <li>
          <Link href="/category/products">Produtos</Link>
        </li>
        <li>
          <Link href="/about">Sobre</Link>
        </li>
      </ul>
    </div>
  )
}

export default Index