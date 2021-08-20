
const c = React.createElement;

//debe ir en Mayuscula
const Header = (props)=>c('header',{className:"p-3 bg-dark text-white"},
                          c('div',{className:"container"},
                            c('div',{className:"d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"},
                              c('ul',{className:"nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0"},
                                c('li',null,
                                  c('a',{href:"/",className:"nav-link px-2 text-secondary"},"Productos")
                                ),
                                c('li',null,
                                  c('a',{href:"carrito",className:"nav-link px-2 text-secondary"},"Carrito de compras")
                                ),
                              ),
                              c('div',{className:'text-end'},
                                c('button',{type:'button',className:'btn btn-outline-light me-2'},"Login"),
                                c('button',{type:'button',className:'btn btn-warning'},"Sign-up"),
                              )
                            )
                          )
                        );

export default Header
/*
<header class="p-3 bg-dark text-white">
    <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          
          <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#" class="nav-link px-2 text-secondary">Home</a></li>
            <li><a href="#" class="nav-link px-2 text-white">Features</a></li>
          </ul>
          
          <div class="text-end">
            <button type="button" class="btn btn-outline-light me-2">Login</button>
            <button type="button" class="btn btn-warning">Sign-up</button>
          </div>
        </div>
    </div>
</header>
*/