var pesquisa = document.querySelector("#filtrar-tabela");

pesquisa.addEventListener("input", function(){//input pega o valor digitado
    console.log(pesquisa.value);
    var pacientes = document.querySelectorAll(".paciente");
    for (let i = 0; i < pacientes.length; i++) {
        var paciente = pacientes[i] ;
        var tdNome = paciente.querySelector(".info-nome");
        var nome = tdNome.textContent;
        var expressao = new RegExp(this.value, "i"); // busca o valor podendo ser maiusca ou minuscula 

        if(this.value.length > 0){
            if(expressao.test(nome)){// copara com o item que ta sendo pasado no caso o texto
                paciente.classList.remove('invisivel')// remove a class
            }else{
                paciente.classList.add("invisivel");// add class
            };
        }else{
            paciente.classList.remove('invisivel')
        };
    };
    // pacientes.forEach(function(i,pesquisa){
    //     var paciente = pacientes[i] 
    //     if(pesquisa == paciente){
    //         console.log(paciente)
    //         console.log('ok')
    //     }
    // });
});