import React from 'react'
import {Link} from 'react-router-dom';
import default_user from '../../img/default-user.svg'

const Header = ({amount})=>{

  return(<header className="p-3 bg-dark text-white sticky-top">

      <div className="container ">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><Link to="/" className="nav-link px-2 text-secondary"><i className="bi bi-bag"></i> Productos</Link></li>
              <li><Link to="/buy" className="nav-link px-2 text-white"><i className="bi bi-cart"></i> Carrito de compras ({amount})</Link></li>
            </ul>
            
            <div className="text-end">
              <div className="dropdown text-end">
                <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle"/>
                </a>
                <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1">
                  <li><a className="dropdown-item" href="#">New project...</a></li>
                  <li><a className="dropdown-item" href="#">Settings</a></li>
                  <li><a className="dropdown-item" href="#">Profile</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="#">Sign out</a></li>
                </ul>
              </div>
              <Link to="/auth" type="button" className="g-signin2 btn btn-outline-light me-2">Login</Link>
              <Link to="/auth" type="button" className="btn btn-warning">Sign-up</Link>
            </div>
          </div>
      </div>
  </header>)
}

export default Header