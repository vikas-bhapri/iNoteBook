import React, {useContext, useEffect} from 'react'
import userContext from '../Context/User/UserContext'

const UserDetails = () => {

  const context = useContext(userContext)
  let {users, showUser} = context
  console.log(users)
  useEffect(() => {
    showUser()
  }, [])
  
  return (
    <div>
        {/* {users.name} */}
    </div>
  )
}

export default UserDetails