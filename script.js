        function validarNombre(){
            let valor=document.getElementById("nombreApellido").value;

            if(valor===""){
                document.getElementById("errorNom").innerHTML="El nombre no puede estar vacio";
                return false;
            }
            if(valor.length < 3){
                document.getElementById("errorNom").innerHTML="El nombre debe tener mas de 3 caracteres";
                return false;
            }
            let caracteresValidos="qwertyuiopasdfghjklñzxcvbnmQWERTYUIOPASDFGHJKLÑZXCVBNM1234567890 "
            let caracteresInvalidos=false
            for (let i = 0; i < valor.length; i++) {
                    let letraActual = valor[i];
        
                    if (caracteresValidos.indexOf(letraActual) === -1) {
                        caracterInvalido = true;
                        break;
                        }
            }
            if(caracteresInvalidos){
                document.getElementById("errorNom").innerHTML="El nombre no puede tener caracteres especiales";
                return false;
            }
            document.getElementById("errorNom").innerHTML = "";
            return true;
        }
        function validarDNI(){
            let valor = document.getElementById("dni").value;

            if (valor === "") {
                document.getElementById("errorDni").innerHTML = "El DNI no puede estar vacio.";
                return false;
            }
            if (isNaN(valor)) {
                document.getElementById("errorDni").innerHTML = "El DNI solo debe contener numeros.";
                return false;
            }
            if (valor.length !== 8) {
                document.getElementById("errorDni").innerHTML = "El DNI debe tener exactamente 8 digitos.";
                return false;
            }
            document.getElementById("errorDni").innerHTML = "";
            return true;
        }
        function validarFecha(){
            let valor= document.getElementById("fechaNac").value;
            if (valor === "") {
                document.getElementById("errorFecha").innerHTML = "Debes ingresar tu fecha de nacimiento.";
                return false;
            }

            let fechaNac = new Date(valor);
            let hoy = new Date();
            let añoNac = fechaNac.getFullYear();
            let mesNac = fechaNac.getMonth();
            let diaNac = fechaNac.getDate();

            let añoActual = hoy.getFullYear();
            let mesActual = hoy.getMonth();
            let diaActual = hoy.getDate();

            let edad= añoActual - añoNac
            if (mesActual<mesNac){
                edad = edad - 1;
            }
            if(edad<18){
                document.getElementById("errorFecha").innerHTML="Debes ser mayor de 18";
                return false;
            }
            document.getElementById("errorFecha").innerHTML="";
            return true;
        }
        function enviarFormulario(){
            let nomVal=validarNombre();
            let dniVal=validarDNI();
            let fechaVal=validarFecha();

            let envFormExi= document.getElementById("mensajeExito");
            if(nomVal && dniVal && fechaVal){
                envFormExi.innerHTML="Formulario enviado con éxito";
                envFormExi.className="exito";
            }else{
                envFormExi.innerHTML="";
                envFormExi.className="";
            }
        }
        function hacerPreguntas() {
            let divLista = document.getElementById("respuestasPreguntas");

            let p1 = prompt("¿Cuál es tu nacionalidad?");
            if (p1 === null ) p1 = "No respondió";

            let p2 = prompt("¿Cuál es tu nivel de conocimiento en programación? (Básico / Intermedio / Avanzado)");
            if (p2 === null ) p2 = "No respondió";

            let p3 = prompt("¿Por qué elegiste esta carrera?");
            if (p3 === null) p3 = "No respondió";

            let html = `Nacionalidad: ${p1} <br><br>`;
            html += `Nivel de programación: ${p2} <br><br>`;
            html += `Motivo de elección: ${p3}`;

            divLista.innerHTML = html;
            divLista.style.display = "block";
        }