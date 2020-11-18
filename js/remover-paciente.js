// Atribui o evento à classe "pai", assim, ela fica "escutando" tudo o que acontece dentro 
//dela esperando pelo evento indicado, nesse caso o Double Click

var tabela = document.querySelector("#tabela-paciente");

tabela.addEventListener("dblclick", function(event){
	if (event.target.className == "remover") {
		event.target.parentNode.classList.add("fadeOut");

		setTimeout(function(){
			event.target.parentNode.remove();	
		}, 535);
	}
});

/***********************************************************************************************
*     - Lê as <tr> com a classe paciente e atribui o evento à cada um                         *
**********************************************************************************************

var pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(function(paciente){
	paciente.addEventListener("dblclick", function(){
		console.log("Fui clicado com um duplo clique!\nPaciente: "+paciente.textContent);
		this.remove();
	});
});

*/