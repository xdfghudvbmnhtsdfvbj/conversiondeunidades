  function grD(value) {
         document.getElementById("tonelada").innerHTML =
                  value / 1000000;
         document.getElementById("kilogramo").innerHTML =
                  value / 1000;
         document.getElementById("piedra").innerHTML =
                  value / 6350;
         document.getElementById("libra").innerHTML =
                  value / 453.6;
		 document.getElementById("onza").innerHTML =
                  value / 28.35;
         document.getElementById("miligramo").innerHTML =
                  value * 1000;
			document.getElementById("Stones").rsize = 4; //#Buscar como arreglar este comando para que funcione en este proyecto.
  }