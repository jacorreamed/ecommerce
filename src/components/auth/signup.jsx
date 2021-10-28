import React from "react";
//no se usa
const SignUp = ()=>{

    return(
        <div className="modal modal-signin position-static d-block py-5" tabIndex="-1" role="dialog" id="modalSignin">
            <div className="modal-dialog">
                <div className="modal-content rounded-5 shadow">
                <div className="modal-header p-5 pb-4 border-bottom-0">
                    <h2 className="fw-bold mb-0">Registrarse Gratis</h2>
                </div>
                <div className="modal-body p-5 pt-0">
                    <form className="">
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control rounded-4" id="floatingInput" placeholder="name@example.com"/>
                            <label htmlFor="floatingInput">Email</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" className="form-control rounded-4" id="floatingPassword" placeholder="Password"/>
                            <label htmlFor="floatingPassword">Contraseña</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control rounded-4" id="floatingName" placeholder="Nombres"/>
                            <label htmlFor="floatingName">Nombres y Apellidos</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="number" className="form-control rounded-4" id="floatingPhone" placeholder="teléfono"/>
                            <label htmlFor="floatingPhone">Teléfono</label>
                        </div>
                        <button className="w-100 mb-2 btn btn-lg rounded-4 btn-primary" type="submit">Registrarse</button>
                        <small className="text-muted">Al registrarse, acepta nuestros términos y condiciones</small>
                        <hr className="my-4"/>
                        <h2 className="fs-5 fw-bold mb-3">O use un tercero</h2>
                        <button className="w-100 py-2 mb-2 btn btn-outline-dark rounded-4" type="submit">
                            <i className="bi bi-google"></i> Ingresar con Google
                        </button>
                        <button className="w-100 py-2 mb-2 btn btn-outline-primary rounded-4" type="submit">
                            <i className="bi bi-facebook"></i> Ingresar con Facebook
                        </button>
                        <button className="w-100 py-2 mb-2 btn btn-outline-secondary rounded-4" type="submit">
                            <i className="bi bi-github"></i> Ingresar con GitHub (tentativo)
                        </button>
                    </form>
                </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp