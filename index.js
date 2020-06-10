function ano(){
    var msg = document.getElementById('ano')
    var agora = new Date()
    var ano = agora.ano()
    msg.innerHTML = `São: <b>${ano} Projetos Pedro Cordeiro `
    document.body.style.background = 'rgb(249, 195, 139)'
}