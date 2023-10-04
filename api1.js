//declarando a funcao
async function fetchAPI () {
    try{
        const requisicao = await fetch('https://restcountries.com/v3.1/all')
        const requisicaoConvertida = await requisicao.json()
        console.log(requisicaoConvertida)
        //retornando o array
        const arrayPaises = requisicaoConvertida
        return arrayPaises
    }catch (erro){
        console.log(erro)
    }
}


async function renderizaPaises (){
    const arrayPaises = await fetchAPI()
    const cardPais = arrayPaises.map(item => {
        return  `
        <div class ="card">
            <img src="${item.flags.png}"alt"bandeira de ${item.name.common}">        
            <h2>${item.name.common} </h2>
        </div>`    
                
    })
    const container = document.getElementById('container')
    container.innerHTML = cardPais.join('')

}

renderizaPaises()

async function renderizaPaises (){
    const arrayPaises = await requisicaoApiRestCountries()
    console.log(arrayPaises)
    const cardPaises = arrayPaises.map((pais) => {
      return  
                <div class="card-container ${">
                    <img src="${pais.flags.png}" alt="">
                    <div class="card-texto">
                        <h2>${pais.name.common}</h2>   
                    <div>
                            <h3>populacao:</h3>
                            <p>${pais.name.common}</p>
                   
                </div>

;
    }
})
