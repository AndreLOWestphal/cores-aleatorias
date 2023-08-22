
    // definindo variaveis e 
const cores = ['Red','Blue','Yellow','purple', 'green', 'black']
const btn = document.getElementById('btn')
const cor = document.querySelector('.color')

    // no click se ativa
btn.addEventListener('click', function(){
    const corAleatoria = getCorAleatoria()
    document.body.style.background = cores [corAleatoria]
    cor.textContent = cores[corAleatoria]
    
    //console.log(corAleatoria)
})

    // gera numeros aleatorios
function getCorAleatoria () {
    return Math.floor(Math.random() * cores.length)
}

    //console.log(cores)