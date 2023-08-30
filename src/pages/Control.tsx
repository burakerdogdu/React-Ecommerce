import React from 'react'
import { Navigate } from 'react-router-dom'

function Control(props: {item : JSX.Element}) {

  const stSession = sessionStorage.getItem('admin')

  return (
    <>
    {stSession === null
        ?
        <Navigate to='/UserLogin' replace/>
        :
        props.item
    }
    </>
  )
}

export default Control