var button = document.querySelector("#adicionar-paciente");

button.addEventListener("click", function(event){
	event.preventDefault();

	var form = document.querySelector("#form-adiciona");

	// Recebe objeto com informações do paciente
	var paciente = obtemPacienteFormulario(form);

	var erro = "";
	erro = validaPaciente(paciente);
	if (erro.length == 0) {
		adicionaPacienteTabela(paciente);

		// Limpa formulário
		form.reset();
		var mensagensErro = document.querySelector("#mensagens-erro");
		mensagensErro.innerHTML = "";
	}else{
		exibeMensagemErro(erro);

		return;
	}
});

function adicionaPacienteTabela(paciente){
	// Cria <tr> do paciente
	var pacienteTR = montaTR(paciente);

	// Extrai estrutura da tabela
	var tabela =  document.querySelector("#tabela-paciente");

	// Atribui a <tr> na tabela
	tabela.appendChild(pacienteTR);
}

function exibeMensagemErro(erros){
	var ul = document.querySelector("#mensagens-erro");
	ul.innerHTML = "";

	erros.forEach(function(erro){
		var li = document.createElement("li");
		li.textContent = erro;
		ul.appendChild(li);
	});
}

function obtemPacienteFormulario(form){
	// Cria objeto paciente
	var paciente = { 
		nome: form.nome.value,
		peso: form.peso.value,
		altura: form.altura.value,
		gordura: form.gordura.value,
		imc: calculaIMC(form.peso.value, form.altura.value)
	};

	// retorna objeto
	return paciente;
}

function montaTR (paciente){
	var pacienteTR = document.createElement("tr");
	pacienteTR.classList.add("paciente");

	// Cria e atribui as <td>s na <tr>
	pacienteTR.appendChild(montaTD(paciente.nome, "info-nome"));
	pacienteTR.appendChild(montaTD(paciente.peso, "info-peso"));
	pacienteTR.appendChild(montaTD(paciente.altura, "info-altura"));
	pacienteTR.appendChild(montaTD(paciente.gordura, "info-gordura"));
	pacienteTR.appendChild(montaTD(paciente.imc, "info-imc"));
	pacienteTR.appendChild(montaTD("Remover Item", "remover"));

	return pacienteTR;
}

function montaTD(dado, classe){
	var td = document.createElement("td");
	td.classList.add(classe);
	td.textContent = dado;

	return td;
}

function validaPaciente(paciente){
	var erros = [];
	var campos = ["nome", "peso", "altura", "gordura"];
	removeVarios(campos);

	if(paciente.nome.length == 0){
		alteraCor("nome");
		erros.push("Nome não pode ser em branco!");
	}
	if (!validaPeso(paciente.peso)) {
		alteraCor("peso");
		erros.push("Peso inválido!");
	}
	if (!validaAltura(paciente.altura)) {
		alteraCor("altura");
		erros.push("Altura inválida!");
	}
	if(paciente.gordura.length == 0){
		alteraCor("gordura");
		erros.push("Gordura corporal não pode estar em branco!");
	}

	return erros;
}

function alteraCor(name){
	var element = document.querySelector("input#"+name);
	element.classList.add("paciente-invalido");
}

function removeCor(name){
	var element = document.querySelector("input#"+name);
	element.classList.remove("paciente-invalido");
}

function removeVarios(campos){
	campos.forEach(function(campo){
		removeCor(campo);
	});
}