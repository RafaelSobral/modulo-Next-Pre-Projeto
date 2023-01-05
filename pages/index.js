import Link from 'next/link'


const Index = () => {
  return (
    <div>
      <h1>HELLO WORLD NEXT APP</h1>
      <ul>
        <li>
          <Link href="/about">Sobre</Link>
        </li>
        <li>
          <Link href="/category/products">Produtos</Link>
        </li>
      </ul>
    </div>
  )
}

export default Index