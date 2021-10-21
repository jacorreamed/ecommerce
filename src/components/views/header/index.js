import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom';
import UserOptionDropdown from './userOptionDropdown'
import UserLoginButton from './useLoginButton'

import {getSession,deleteSession} from '../../../utils/localStorage'

const Header = ({amount})=>{

  //esto debe ser un componente statefull

  const [session,setSession] = useState(false)


  const handleSignOut = (e)=>{
    e.preventDefault();
    deleteSession();
    window.location.href = "/"
  }

  useEffect(()=>{
    setSession(getSession())
  },[]);

  return(<header className="p-3 bg-dark text-white sticky-top">

      <div className="container ">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><Link to="/" className="nav-link px-2 text-secondary"><i className="bi bi-bag"></i> Productos</Link></li>
              <li><Link to="/buy" className="nav-link px-2 text-white"><i className="bi bi-cart"></i> Carrito de compras ({amount})</Link></li>
            </ul>
            
            <div className="text-end">
              {session?
              <UserOptionDropdown session={session} handleSignOut={handleSignOut}/>:
              <UserLoginButton/>}
            </div>
          </div>
      </div>
  </header>)
}

export default Header