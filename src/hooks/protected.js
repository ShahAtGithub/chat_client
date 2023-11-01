import Router from 'next/router'
import React, { useEffect } from 'react'

export default function Protected({children }) {
    useEffect(() => {
      if(!localStorage.getItem("Token")) Router.push("/login")
      
    
     
    }, [])
    
  return (
    <div>{children }</div>
  )
}
