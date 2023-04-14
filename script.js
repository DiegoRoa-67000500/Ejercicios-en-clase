// Obtener el botón "Registrar"


var registrarBtn = document.getElementById("boton_registro");

// Asignar un evento "click" al botón "Registrar"
registrarBtn.addEventListener("click", function(){   
    
  // Obtener los valores de cada campo del formulario
  var nombre = document.getElementById("name").querySelector("input").value;
  var apellidos = document.getElementById("lastname").querySelector("input").value;
  var codigo = document.getElementById("codigo_estudiante").querySelector("input").value;
  var fechaNacimiento = document.getElementById("fechaNacimiento").querySelector("input").value;
  var programa = document.getElementById("seleccion_programa").value;
  var genero = document.querySelector('input[name="seleccion_genero"]:checked').value;
  var hobbies = document.querySelectorAll('input[name="hobbies"]:checked');

  // Crear un objeto con la información recogida del formulario
  var objetoEstudiante = {
    nombre: nombre,
    apellidos: apellidos,
    codigo: codigo,
    fechaNacimiento: fechaNacimiento,
    programa: programa,
    genero: genero,
    hobbies: []
  };

  // Agregar los hobbies seleccionados al arreglo de hobbies del objeto
  hobbies.forEach(function(hobby){
    objetoEstudiante.hobbies.push(hobby.value);
  });

  // Agregar el objeto al arreglo de estudiantes
  arregloEstudiantes.push(objetoEstudiante);

  // Mostrar en la consola el arreglo de estudiantes
  console.log(arregloEstudiantes);
});

// Declarar un arreglo vacío para almacenar los estudiantes
var arregloEstudiantes = [];
