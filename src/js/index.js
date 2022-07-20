
const perguntas = document.querySelectorAll(".pergunta")

perguntas.forEach(pergunta => {

    pergunta.addEventListener('click',  () => {

        const perguntaAtivaAtual = document.querySelector('.ativo')

        if(perguntaAtivaAtual){
            perguntaAtivaAtual.classList.remove('ativo')
        }

        pergunta.classList.add('ativo')

    })

})
