import React from 'react'

const BuyButton = ({handleClickBuyButton}) =>(<div className="d-grid gap-2 mt-5">
                        <button
                            onClick = {handleClickBuyButton}
                            className="btn btn-primary"
                            type="button"
                            >
                                Comprar ahora
                            </button>
                    </div>)

export default BuyButton;

