import React from 'react'

const Select = ({prop_ref,handleSelectChange,value})=>(
                        <select
                            className="form-select"
                            onChange={handleSelectChange}
                            aria-label="Default select example"
                            ref={prop_ref}
                            value={value}
                        >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                    )

export default Select;