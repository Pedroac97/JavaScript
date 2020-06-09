function verificar(){
    var agora = new Date()
    var ano = agora.getFullYear()
    var n2 = document.getElementById('ano')
    var img = document.querySelector('img#img')
    var tes = document.querySelector('p#tex')
    //var n1 = Number(ano)
    
    //var idade = n1 - 5

    if(n2.value.length == 0 || Number(n2.value) > ano){
        alert('[ERRO] Data invalida! Tente novamente')
    }else{
        var radio = document.getElementsByName('radsex')
        var idade = ano - Number(n2.value)
        var sex = (radio[0].checked) ? 'M' : 'F'
        if(sex == 'M'){
            if (idade >= 0 && idade <=5){
                tes.innerHTML =`Sua idade: ${idade}`
                img.src = 'img/baby.jpg'
                
            }else if(idade >=6 && idade <12 ){
                tes.innerHTML =`Sua idade: ${idade}`
                img.src = 'img/m5.jpg'
            }else if(idade >=12 && idade <20){
                tes.innerHTML =`Sua idade: ${idade}` 
                img.src = 'img/m12.jpg'
            }else if(idade >= 20 && idade <60){
                tes.innerHTML =`Sua idade: ${idade}`
                img.src = 'img/m20.jpg'
            }else{
                tes.innerHTML =`Sua idade: ${idade}`
                img.src = 'img/m60.jpg'
            }
        }else{
            if (idade >= 0 && idade <=5){
                tes.innerHTML =`Sua idade: ${idade}`
                img.src = 'img/baby.jpg'
            }else if(idade >=6 && idade <12 ){
                tes.innerHTML =`Sua idade: ${idade}`
                img.src = 'img/f5.jpg'
            }else if(idade >=12 && idade <20){
                tes.innerHTML =`Sua idade: ${idade}` 
                img.src = 'img/f12.jpg'
            }else if(idade >= 20 && idade <60){
                tes.innerHTML =`Sua idade: ${idade}`
                img.src = 'img/f20.jpg'
            }else{
                tes.innerHTML =`Sua idade: ${idade}`
                img.src = 'img/f60.jpg'
            }
        }
    }
}