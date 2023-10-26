import React from 'react'
import { Button, Container } from '@mui/material'
import { Link } from 'react-router-dom'
import { useUserAuth } from '../context/UserAuthContext'


function LoginSuccess() {
  const { user, logOut } = useUserAuth();
  console.log(user)
  const handleLogOut = async () => {
    try{
      await logOut();
    } catch (err) {
      console.log(err.message);
    }
  }
  return (
    <>
      <Container sx={{my:15}}>
        <div className='text-4xl flex justify-center'>
        <h1>Successfully Logged in as
           {user && user.email} </h1>
        </div><br/>
        
        <div className='text-4xl flex justify-center'>
          <Link to="/">
            <Button variant='contained' onClick={handleLogOut}>Home</Button>
          </Link><br/>
          <Link to="/login">
            <Button variant='contained' onClick={handleLogOut}>Log Out</Button>
          </Link>
        </div>
      </Container>
    </>
  )
}

export default LoginSuccess