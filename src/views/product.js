import {seon} from '../../dataBase/data.js'
import header from '../views/header.js'

export default (id) =>{

    //inyectar header
    window.document.body.prepend(header())

    const productItem = seon.findProductById(id)

    const shopPage = document.createElement('div')
    shopPage.setAttribute('id','shoop')
    shopPage.classList.add('l-shop')
    const test = ""

    const producto = {nombre:"set portavasos chavita", id:'1'}
    
    const view = `
    <div id="shooping-cart" class="l-shooping-cart">

        <div class="c-shooping__header">
            <h3 class="c-shooping__title">Carrito de compra</h3>
            <div id="shooping-cart__close" class="c-shooping__close c-button c-button--flat c-button--small"><i class="fas fa-times"></i></div>
        </div>
    
        <div class="l-shooping__products c-scroll">
    
            <div class="c-product-cart">
    
                <div class="c-product-cart__img">
                    <img src="" alt="">
                </div>
    
                <div class="l-product-cart__information">
                    <div class="c-txt-16">producto ${test}</div>
                    <div class="c-txt-l-14">units and color${test}</div>
    
                    <div class="c-increment">
                        <div class="c-increment__button c-button c-button--flat"><i class="fas fa-plus"></i></div>
                        <div class="c-increment__text">3</div>
                        <div class="c-increment__button c-button c-button--flat"><i class="fas fa-minus"></i></div>
                    </div>
    
                    <div class="c-txt-l-16">${15000}</div>
                </div>
    
            </div>
    
            <div class="c-product-cart">
    
                <div class="c-product-cart__img">
                    <img src="" alt="">
                </div>
    
                <div class="l-product-cart__information">
                    <div class="c-txt-16">producto${test}</div>
                    <div class="c-txt-l-14">units and color${test}</div>
    
                    <div class="c-increment">
                        <div class="c-increment__button c-button c-button--flat"><i class="fas fa-plus"></i></div>
                        <div class="c-increment__text">3</div>
                        <div class="c-increment__button c-button c-button--flat"><i class="fas fa-minus"></i></div>
                    </div>
    
                    <div class="c-txt-l-16"> 15000${test}</div>
                </div>
    
            </div>
    
            <div class="c-product-cart">
    
                <div class="c-product-cart__img">
                    <img src="" alt="">
                </div>
    
                <div class="l-product-cart__information">
                    <div class="c-txt-16">producto${test}</div>
                    <div class="c-txt-l-14">units and color${test}</div>
    
                    <div class="c-increment">
                        <div class="c-increment__button c-button c-button--flat"><i class="fas fa-plus"></i></div>
                        <div class="c-increment__text">3</div>
                        <div class="c-increment__button c-button c-button--flat"><i class="fas fa-minus"></i></div>
                    </div>
    
                    <div class="c-txt-l-16"> 15000${test}</div>
                </div>
    
            </div>
            
            <div class="c-product-cart">
    
                <div class="c-product-cart__img">
                    <img src="" alt="">
                </div>
    
                <div class="l-product-cart__information">
                    <div class="c-txt-16">producto${test}</div>
                    <div class="c-txt-l-14">units and color${test}</div>
    
                    <div class="c-increment">
                        <div class="c-increment__button c-button c-button--flat"><i class="fas fa-plus"></i></div>
                        <div class="c-increment__text">3</div>
                        <div class="c-increment__button c-button c-button--flat"><i class="fas fa-minus"></i></div>
                    </div>
    
                    <div class="c-txt-l-16"> 15000${test}</div>
                </div>
    
            </div>
            <div class="c-product-cart">
    
                <div class="c-product-cart__img">
                    <img src="" alt="">
                </div>
    
                <div class="l-product-cart__information">
                    <div class="c-txt-16">producto${test}</div>
                    <div class="c-txt-l-14">units and color${test}</div>
    
                    <div class="c-increment">
                        <div class="c-increment__button c-button c-button--flat"><i class="fas fa-plus"></i></div>
                        <div class="c-increment__text">3</div>
                        <div class="c-increment__button c-button c-button--flat"><i class="fas fa-minus"></i></div>
                    </div>
    
                    <div class="c-txt-l-16"> 15000${test}</div>
                </div>
    
            </div>
        </div>
        
        <div class="l-shooping__sell">
    
            <div class="c-container c-shooping__discount">
                <div class="c-two-thirds">
                    <p>descuento</p> 
                </div>
                <div class="c-one-third c-txt-right">
                    <p>${0}</p> 
                </div>
            </div>
    
            <div class="c-container c-shooping__value">
                <div class="c-two-thirds">
                    <p>Total</p> 
                </div>
                <div class="c-one-third c-txt-right">
                    <p>${52000}</p> 
                </div>
            </div>
    
            <div class="c-shooping__text-condition c-txt-l-16">
                Los códigos de descuento, los costes de envío y los impuestos se añaden durante el pago.
            </div>
    
            <div class="c-shooping__acept-condition c-checkbox-option">
                <input type="checkbox" id="shopping-condition">
                <label for="shopping-condition"> Acepto los terminos y condiciones</label>
            </div>
    
            <div class="c-button c-button--green">Finalizar pedido</div>
    
    
        </div>
    
    </div>

    <div class="c-product">

        <div class="l-product__header">
            
            <h2 class="c-product__title">${productItem.name}</h2>
            <div class="c-product__id">codigo: 000${productItem.id}</div>

            <div class="c-product__feedback">
                <div class="c-feedback__txt">feedback<span class="c-txt-l-14">(${productItem.feedback})</span> </div>
                <div class="c-feedback__qualification-img"></div>
            </div>
        </div>

        <div class="l-product__representation">
            <div class="c-product__img">
                <div>
                    <img src="../assets/producto_1.png" alt="producto xxx${test}" width="520" height="520">
                    <div class="c-product__price">
                        <h3>13k${test}</h3>
                        <p>15k${test}</p>
                    </div>
                </div>


            </div>
        </div>

        <div class="l-product__information">

            <div class="l-product__descriptions">
                <div class="c-description-item c-description-item--right">250 <br> Gramos</div>
                <div class="c-description-item c-description-item--right">+3 <br>  Semillas</div>
                <div class="c-description-item">+3 <br> colores</div>
            </div>

            <div class="l-product__units">
                <div class="c-button c-button--small c-button--flat">4 Und.</div>
                <div class="c-button c-button--small c-button--flat">6 Und.</div>
                <div class="c-button c-button--small c-button--flat">12 Und.</div>
            </div>

            <div class="l-product__colors">
                <div class="c-txt-16">color:blue${test}</div>

                <div class="l-product__colors-items">
                    <div class="c-color c-color--blue"></div>
                    <div class="c-color c-color--gold"></div>
                    <div class="c-color c-color--red"></div>
                </div>
            </div>

            <div class="l-product__quantity-total">

                <div class="l-product__quantity-increment">
                    <div class="c-txt-16">cantidad</div>
                    <div class="c-increment">
                        <div class="c-increment__button c-button c-button--flat"><i class="fas fa-plus"></i></div>
                        <div class="c-increment__text">3</div>
                        <div class="c-increment__button c-button c-button--flat"><i class="fas fa-minus"></i></div>
                    </div>

            
                </div>
                

                <div class="l-product__value-total">
                    <div class="c-txt-16">valor</div>
                    <div class="c-button c-button--flat">$ 13000</div>
                </div>
            </div>

            <div id="product__button" class="c-button c-button--green">Agregar al carrito</div>

        </div>

    </div>

    <div class="c-separation-line"></div>

    <p class="c-condition">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas pariatur beatae pedit quasi. Alias, nam repudiandae! Harum.</p>

    <div class="c-get-back c-button c-button--green">Volver</div>`

    shopPage.innerHTML = view


    let shoopButton = shopPage.querySelector('#product__button')

    let shoopingCartClose = shopPage.querySelector('#shooping-cart__close');

    shoopingCartClose.addEventListener('click', modal )
    shoopButton.addEventListener("click",modal)



    return shopPage

}


function incrementCart(){

}


function modal(){  

    const cart = document.getElementById('shooping-cart')

    cart.classList.toggle('l-show-modal')

    document.body.classList.toggle('showing-modal')

}

