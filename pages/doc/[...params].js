import { useRouter } from "next/router";

function Doc() {
  const router = useRouter()
  const { params = [] } = router.query

  return (
    <div>
      {
        params.map((item, index) => {
          return (
            <h1 key={index}>Doc params info : {item} (index = {index})</h1>
          )
        })
      }
    </div>
  )
}

export default Doc