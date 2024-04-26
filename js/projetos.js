function projetos() {
        let box = document.createElement('div')
        box.className = 'box'
        document.querySelector('.container').appendChild(box)

        box.innerHTML = `
        
            <span class="icon"> <img src="${' materiais/icon/simbolo-musidot-dark.svg '}" alt="${' simbolo '}"> </span>
            <div>
                <h3>${'Encontros Que Mudam Destinos - Joaquim Araújo'}</h3>
                <p>${'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore sit neque omnis magni iste, laudantium nostrum eum consectetur eveniet recusandae at asperiores .'}</p>
                <div class="adc">
                    <span class="marca">${'Talk METANÓIA'} </span>
                    <span class="data">${'há 6 meses'}</span>
                </div>
            </div>
        
        `
        

}

for (let i = 0; i < 10; i++) {
    projetos()
    
}

/*
<div class="container">
    <div class="box">
        <span class="icon"> <img src="materiais/icon/simbolo-musidot-dark.svg" alt="simbolo"> </span>
        <div>
            <h3>Encontros Que Mudam Destinos - Joaquim Araújo</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore sit neque omnis magni iste, laudantium
                nostrum eum consectetur eveniet recusandae at asperiores .</p>
            <div class="adc">
                <span class="marca">Talk METANÓIA </span>
                <span class="data">há 6 meses</span>
            </div>
        </div>
    </div>
</div>
*/