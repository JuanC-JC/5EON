export default () => {

    const view = `  <div class="header__logo"></div>
                    <div class="c-icon c-icon--big" id="icon"><i  class="fas fa-bars" ></i></div>        
                    <nav class="header__menu">
                        <ul class="menu-container">
                            <li ><a href="#home">Home</a></li>
                            <li ><a href="#intro">Intro</a></li>
                            <li ><a href="#proceso">Proceso</a></li>
                            <li ><a href="#productos">Productos</a></li>
                        </ul>
                    </nav>`

    const header = document.createElement('header');
    header.setAttribute("id","header");
    header.classList.add("header")
    header.innerHTML = view;

   

    return header

}
