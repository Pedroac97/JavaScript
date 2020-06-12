function ano(){
    var msg = document.getElementById('ano')
    var agora = new Date()
    var ano = agora.getFullYear()
    msg.innerHTML = `©${ano}, Projetos Pedro Cordeiro `
    console.log(`©${ano}, Projetos Pedro Cordeiro `)
}