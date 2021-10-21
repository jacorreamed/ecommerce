
export const setItemToShoppingCart = (item)=>{

    let data_shopping_cart_customer = getCustomer()

    if(!data_shopping_cart_customer){
        addCustomer([item])
        return
    }

    data_shopping_cart_customer = JSON.parse(data_shopping_cart_customer)

    data_shopping_cart_customer.push(item)

    addCustomer(data_shopping_cart_customer)

}

export const countItems = ()=> {
    
    let data = getCustomer()

    if(!data)
    return 0

    return JSON.parse(data).length
}

export const getItems = () => {

    let data_shopping_cart_customer = getCustomer()

    if(!data_shopping_cart_customer){
        return []
    }

    return JSON.parse(data_shopping_cart_customer)
}

export const getSession = () => {

    let data = sessionStorage.getItem("auth");

    if(data)
    return JSON.parse(data)
    
    return false
};

export const setSession = data => {

    sessionStorage.setItem("auth",JSON.stringify(data))

}
export const deleteSession =   ()  => sessionStorage.removeItem("auth")

export const deleteCustomer =   ()  => localStorage.removeItem("customer")

export const addCustomer    =   tem => localStorage.setItem("customer",JSON.stringify(tem))

export const getCustomer    =   ()  => localStorage.getItem("customer")||false
