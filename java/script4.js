  function grD(value) {
         document.getElementById("Minutos").innerHTML =
                  value / 60;
         document.getElementById("Horas").innerHTML =
                  value / 3600;
         document.getElementById("Dias").innerHTML =
                  value / 86400;
		 document.getElementById("Semanas").innerHTML =
                  value / 604800;
         document.getElementById("Meses").innerHTML =
                  value / 2.628000000;
			document.getElementById("Stones").rsize = 4; //#Buscar como arreglar este comando para que funcione en este proyecto.
  }