var btn = document.querySelector("#adicionar-paciente");
btn.addEventListener("click", function (event){
    event.preventDefault(); // previne que o padramento padrão seja feito( no caso recaregar a pagina)

    var form = document.querySelector("#form");
    // Extrai dados do form
    //Cria TR e TD
    var pacientex = montaTr(form);

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacientex);
    form.reset();// paga os campos do form

});
function extraiDados(form){
    var paciente = {
        nome:form.nome.value,// pegando pelo name do input
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcularImc(form.peso.value, form.altura.value)
    };
    return paciente;
};

function montaTr(pacientes){
    
    var paciente = extraiDados(pacientes);
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
function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    
    return td;
}