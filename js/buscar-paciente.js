var buton = document.querySelector("#buscar-paciente");

buton.addEventListener("click", function(){
	var xhr = new XMLHttpRequest();
	var erroAjax = document.querySelector("#erro-ajax");

	xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
	xhr.addEventListener("load", function(){
		if(xhr.status == 200){
			var resposta = xhr.responseText;
			var pacientes = JSON.parse(resposta);

			erroAjax.classList.add("invisivel");
			pacientes.forEach(function(paciente){
				adicionaPacienteTabela(paciente);	
			});
		}else{
			console.log(xhr.status);
			console.log(xhr.responseText);
			
			erroAjax.classList.remove("invisivel");
		}
	});

	xhr.send();
});