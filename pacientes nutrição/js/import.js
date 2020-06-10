var btn = document.querySelector("#buscar-paciente");

btn.addEventListener("click", function(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");// fala que quer usar o XMLHttp... para usar o metodo get e pegar os dados do site...

    xhr.addEventListener("load", function(){
        
        if(xhr.status == 200){
            
            var resosta = xhr.responseText;
            var pacientes = JSON.parse(resosta);
    
            pacientes.forEach(function(pacientes) {
    
                
                //Cria TR e TD
                var pacientex = montaTr2(pacientes);
                function montaTr2(paciente){
                    var pacienteTr = document.createElement("tr");
                    pacienteTr.classList.add("paciente");// adiciona classe
                
                    var alturaTd = montaTd(paciente.altura, "info-altura");// modelo 1
                    var gorduraTd = montaTd(paciente.gordura, "info-gordura");
                    var imcTd = montaTd(paciente.imc, "info-imc");
                    
                    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));// modelo 2
                    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
                    pacienteTr.appendChild(alturaTd);// coloca altura TD como filho de pacienteTr
                    pacienteTr.appendChild(gorduraTd);
                    pacienteTr.appendChild(imcTd);
                
                    return pacienteTr;
                };
    
                
                var tabela = document.querySelector("#tabela-pacientes");
                tabela.appendChild(pacientex);
    
            });
        }else{
            console.log(xhr.status);
            console.log(xhr.responseText);
        };

    });

    xhr.send();
    

    
});