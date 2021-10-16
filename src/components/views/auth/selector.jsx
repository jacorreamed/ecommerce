import React from "react";

const Selector = props => (
    <div className="cover-container text-center d-flex w-100 h-100 p-3 mx-auto flex-column">
        <main className="px-3 pt-5">
        <h4 className="mb-4">Antes de Comprar, registrate ó ingresar a tu cuenta</h4>
        <p className="lead"></p>
        <p className="lead  gap-3">
            <button onClick={()=>{props.handleClick("signin")}} href="#" className="btn btn-lg btn-primary fw-bold me-1">Tengo una Cuenta</button>
            <button onClick={()=>{props.handleClick("signup")}} href="#" className="btn btn-lg btn-light border border-secondary fw-bold">Crear Cuenta</button>
        </p>
        </main>
    </div>
)

export default Selector;