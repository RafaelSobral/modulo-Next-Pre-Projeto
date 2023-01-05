import { useRouter } from 'next/router'
import Link from 'next/link'

const Products = () => {
  const router = useRouter()
  console.log(router)
  return (
    <div>
      <h1>Produtos</h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
      </ul>
    </div>
  )
}
export default Products