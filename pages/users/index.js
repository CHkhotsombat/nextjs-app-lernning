function UserList({ users }) {
  return (
    <div>
      <h1>List of users.</h1>
      {
        users.map((item, index) => (
          <div key={index}>
            <h3>{item.email} : {item.name}</h3>
          </div>
        ))
      }
    </div>
  )
}

export default UserList

export async function getStaticProps() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    return {
      props: {
        users: data,
      },
    }
  } catch (error) {
    return {
      props: {
        error,
      },
    }
  }
}