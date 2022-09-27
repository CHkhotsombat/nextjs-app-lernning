// // Redirect to home page
// import { useEffect } from 'react'
// import { useRouter } from 'next/router'

// function PageNotFound() {
//   const router = useRouter()

//   useEffect(() => {
//     router.replace('/')
//   })

//   return null
// }

// Custom not found page
function PageNotFound() {
  return (
    <h1>404 Page Not Found!!!</h1>
  )
}

export default PageNotFound
