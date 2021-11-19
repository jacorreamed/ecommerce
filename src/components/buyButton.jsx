import React from 'react'
import {Link} from 'react-router-dom'

const BuyButton = ({id_prod,cantidad}) =>(<div className="d-grid gap-2 mt-5">
                        <Link
                            to={`/buy/${id_prod}?cant=${cantidad}`}
                            className="btn btn-primary"
                            type="button"
                            >
                                Comprar ahora
                            </Link>
                    </div>)

export default BuyButton;

