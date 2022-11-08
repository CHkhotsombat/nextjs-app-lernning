import Link from 'next/link'
import { useRouter } from 'next/router'

function Home() {
  const router = useRouter()
  const handleClick = () => {
    console.log('handle click!!!')
    router.push('/product')
  }
  const onClickUserPage = () => {
    router.push('/users')
  }
  return (
    <div>
      <h1>Welcome to Home page !!!</h1>
      <Link href='/blog'>
        <a>Go to Blog</a>
      </Link>
      <br/>
      <button onClick={handleClick}>
        Place order
      </button>
      <br/>
      <button onClick={onClickUserPage}>
        Go to User List
      </button>
    </div>
  )
}

export default Home