let body = document.querySelector('body')
let header = document.createElement('header')
header.innerHTML = 
`
    <div class="margem">
        <div class="logo"><a href="./index.html"><img src="materiais/icon/logo.svg" alt=""></a></div>

        <nav>
            <a href="index.html">HOME</a>
            <a href="marcas.html">MARCAS</a>
            <a href="novidades.html">NOVIDADES</a>
            <a href="sobre.html">SOBRE NOS</a>
        </nav>
    </div>
`

body.appendChild(header)