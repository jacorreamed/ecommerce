import React from "react";

const UserOptionDropdown = props => {
    return(
        <div className="dropdown text-end">
            <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                <img src={props.session.picture} alt="mdo" width="32" height="32" className="rounded-circle"/>
            </a>
            <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1">
                
                <li><a className="dropdown-item" href="#">Configuración</a></li>
                <li><a className="dropdown-item" href="#">Perfil</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="#" onClick={props.handleSignOut}>Cerrar Session</a></li>
            </ul>
        </div>
    );
}

export default UserOptionDropdown;