class EstudianteDAO {
    constructor() {
      // Aquí se puede inicializar cualquier conexión o configuración necesaria para acceder a la base de datos
    }
  
    // Métodos de acceso a datos
    getEstudiantes() {
      // Código para obtener una lista de usuarios de la base de datos
      console.log("Obteniendo lista de Estudiantes...");
    }
  
    guardarEstudiante(Estudiante) {
      // Código para guardar un usuario en la base de datos
      console.log(`Guardando Estudiante: ${Estudiante.nombre}`);
    }
  
    actualizarEstudiante(Estudiante) {
      // Código para actualizar un usuario en la base de datos
      console.log(`Actualizando Estudiante: ${Estudiante.nombre}`);
    }
  
    eliminarEstudiante(Estudiante) {
      // Código para eliminar un usuario de la base de datos
      console.log(`Eliminando Estudiante: ${Estudiante.nombre}`);
    }
  }
  
  // Ejemplo de uso del DAO
  const dao = new EstudianteDAO();
  
  dao.getEstudiantes(); // Obtener lista de usuarios
  dao.guardarEstudiante({ nombre: "Juan", correo: "juan@example.com" }); // Guardar usuario: Juan
  dao.actualizarEstudiante({ nombre: "Juan", correo: "juan@example.com" }); // Actualizar usuario: Juan
  dao.eliminarEstudiante({ nombre: "Juan", correo: "juan@example.com" }); // Eliminar usuario: Juan
  