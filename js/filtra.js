var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
	var pacientes = document.querySelectorAll(".paciente");
	var contador = document.querySelector("#numero-caracteres");

	if(this.value.length > 0) {
		for(var i = 0; i < pacientes.length; i++){
			var paciente = pacientes[i];
			var nome = paciente.querySelector(".info-nome").textContent;

			var expressao = new RegExp(this.value, "i");
			if(!expressao.test(nome)){
				paciente.classList.add("invisivel");
			}else{
				paciente.classList.remove("invisivel");
			}

			contador.innerHTML = this.value.length;
		}
	}else{
		for (var i = 0; i < pacientes.length; i++) {
			var paciente = pacientes[i];
			paciente.classList.remove("invisivel");
		}
		contador.innerHTML = "0";
	}
});