/*
    1- capturar as perguntas
    2- capturar a info
*/

const perguntas = document.getElementsByClassName('pergunta')

let pergunta = document.querySelectorAll(".pergunta")

let informacoes = document.getElementsByClassName('info')

const setaAtivada = document.getElementsByClassName('seta')
const escondido = document.querySelector('.escondido')


    pergunta.forEach(pergunta =>{

        pergunta.addEventListener('click', () =>{

            const idDaPerguntaClicada = pergunta.attributes.id.value
            
            const idDaRespostaParaAbrir = idDaPerguntaClicada + '-pergunta'
            
            const respostaParaAbrir = document.getElementById(idDaRespostaParaAbrir)

            respostaParaAbrir.classList.remove('escondido')

            console.log(informacoes != escondido)

            if(informacoes != escondido){
                informacoes.classList.add('escondido')
            }
         
        })

    })

   



// pergunta[0].addEventListener('click', () => {


//     informacoes[0].style.display = 'block'
//     setaAtivada[0].style.filter = 'opacity(0.5) drop-shadow(0 0 0 orange) contrast(2)'
//     setaAtivada[0].style.transform = 'rotate(0)'


//     setaAtivada[1].style.transform = 'rotate(-90deg)'
//     setaAtivada[2].style.transform = 'rotate(-90deg)'

//     setaAtivada[1].style.filter = 'none'
//     setaAtivada[2].style.filter = 'none'

//     informacoes[1].style.display = 'none'
//     informacoes[2].style.display = 'none'

// })

// pergunta[1].addEventListener('click', () => {


//     informacoes[1].style.display = 'block'
//     setaAtivada[1].style.filter = 'opacity(0.5) drop-shadow(0 0 0 orange) contrast(2)'
//     setaAtivada[1].style.transform = 'rotate(0)'

//     setaAtivada[0].style.transform = 'rotate(-90deg)'
//     setaAtivada[2].style.transform = 'rotate(-90deg)'

//     setaAtivada[0].style.filter = 'none'
//     setaAtivada[2].style.filter = 'none'

//     informacoes[0].style.display = 'none'
//     informacoes[2].style.display = 'none'

// })


// pergunta[2].addEventListener('click', () => {


//     informacoes[2].style.display = 'block'
//     setaAtivada[2].style.filter = 'opacity(0.5) drop-shadow(0 0 0 orange) contrast(2)'
//     setaAtivada[2].style.transform = 'rotate(0)'


//     setaAtivada[0].style.transform = 'rotate(-90deg)'
//     setaAtivada[1].style.transform = 'rotate(-90deg)'

//     setaAtivada[1].style.filter = 'none'
//     setaAtivada[0].style.filter = 'none'

//     informacoes[1].style.display = 'none'
//     informacoes[0].style.display = 'none'

// })
