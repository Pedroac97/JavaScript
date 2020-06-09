function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')    
    var agora = new Date()
    var horas = agora.getHours()
    var min = agora.getMinutes()
    if (horas>= 6 && horas < 12){
        msg.innerHTML = `São: <b>${horas}:${min}</b> Bom dia `
        img.src = 'img/manha.jpg'
        document.body.style.background = 'rgb(249, 195, 139)'
    }else if(horas>=12 && horas<18){
        msg.innerHTML = `São: <b>${horas}:${min}</b> Boa tarde`
        img.src = 'img/tarde.jpg'
        document.body.style.background = 'rgb(221, 156, 126)'
    }else if(horas<=24 && horas >=18){
        msg.innerHTML = '<h2><b>Boa noite</b></h2>'
        img.src = 'img/noite.jpg'
        document.body.style.background = 'rgb(17, 33, 42)'
    }else{
        msg.innerHTML = 'Boa madrugada'
        img.src = 'img/madrugada.jpg'
        document.body.style.background = '#000'
    }
    console.log(`${horas} ${status}`)
}