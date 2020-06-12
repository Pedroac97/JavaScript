var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
    var alvoEvento = event.target; // remove a TD do paciente
    var paiDoAlvo = alvoEvento.parentNode; // remove a TR paciente
    paiDoAlvo.classList.add("fadeOut")
    setTimeout(function(){
        paiDoAlvo.remove();
    },500);//500 mili segundos
    
});

// pacientes.forEach(function(paciente){
//     paciente.addEventListener("dblclick", function(){
//         this.remove();//remove o cara que foi clicado 
//     });
// });