var title = document.querySelector(".title");
title.textContent = "Aparecida Nutricionista";

var paciente = document.querySelectorAll(".paciente");
console.log(paciente);

for(var i = 0; i < paciente.length; i++){
	var altura = paciente[i].querySelector(".info-altura").textContent;
	var peso = paciente[i].querySelector(".info-peso").textContent;
	
	if(validaPeso(peso) && validaAltura(altura)){
		paciente[i].querySelector(".info-imc").textContent = calculaIMC(peso, altura);	
	}else{
		if (!validaPeso(peso)) {
			paciente[i].querySelector(".info-imc").textContent = "Peso inválido!";
			paciente[i].classList.add("paciente-invalido");
		}else{
			paciente[i].querySelector(".info-imc").textContent = "Altura inválida!";
			paciente[i].classList.add("paciente-invalido");
		}
	}
}

function calculaIMC(peso, altura){
	var imc = 0;
	imc =peso / (altura * altura);

	return imc.toFixed(2);
}

function validaPeso(peso){
	if(peso <= 0 || peso >= 1000){
		return false;
	}else{
		return true;
	}
}

function validaAltura(altura){
	if(altura <= 0 || altura >= 3.00){
		return false;
	}else{
		return true;
	}
}