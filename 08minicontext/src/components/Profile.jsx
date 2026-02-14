import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
    const {user} = useContext(UserContext)
  if(!user){
    return <div>Please login</div>
  }
  return (
    <div>
        <h1>Profile</h1>
        <p>Username: {user.username}</p>
        <p>Password: {user.password}</p>
    </div>
  )
}

export default Profile