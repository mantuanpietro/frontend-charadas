// Capturando os elementos HTML
const cardInner = document.getElementById('card-inner')
const campoPergunta = document.getElementById('pergunta')
const campoResposta = document.getElementById('resposta')
const btnNova = document.getElementById('btn-nova')

// Evento que faz o card girar
cardInner.addEventListener('click',() => {
    cardInner.classList.toggle('[transform:rotateY(180deg)]')
})

// Função que irá buscar as charadas no backend
async function buscaCharada() {
    try {
        const baseUrl = 'https://api-charadas-eight.vercel.app'
        const endPoint = '/charadas/aleatoria'
        // Impressão no console log para verificação da rota concatenada
        // console.log(baseUrl+endPoint)
        // Busca assíncrona da rota concatenada
        const respostaApi = await fetch(`${baseUrl}${endPoint}`)
        // console.log(respostaApi)
        const dados = await respostaApi.json()
        // console.log(dados)
        // console.log(dados.pergunta)
        // console.log(dados.resposta)
        campoPergunta.textContent = dados.pergunta
        campoResposta.textContent = dados.resposta

        cardInner.classList.remove('[transform:rotateY(180deg)]')
        

    } catch (erro) {
        campoPergunta.textContent = "Erro ao conectar com o servidor backend.";
        console.error("Erro na busca:", erro);
    }
}

buscaCharada()

// 
btnNova.addEventListener('click',() => {
    buscaCharada()
})

btnNova.addEventListener("click", buscaCharada)