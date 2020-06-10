var pacientes = document.querySelectorAll('.paciente');
for(var c= 0; c < pacientes.length; c++){
    var paciente = pacientes[c];
    var peso = paciente.querySelector('.info-peso').textContent;
    var altura = paciente.querySelector('.info-altura').textContent;
    var imc = paciente.querySelector('.info-imc');

    if(peso<=0 || peso >=1000){
        imc.textContent= 'Peso invalido';  // Alterra o texto 
        paciente.classList.add("paciente-invalido"); // Adiciona clace
    }else if(altura<=0 ||altura >=3){
            imc.textContent='Altura invalido'; // Alterra o texto 
            paciente.classList.add("paciente-invalido"); // Adiciona clace
    }else{   
        imc.textContent = calcularImc(peso,altura);
    };
};

function calcularImc(peso,altura){
    var imc = 0;
    imc = peso/(altura*altura);

    return imc.toFixed(2); // pega apenas (2) numeros apos a , 
}
