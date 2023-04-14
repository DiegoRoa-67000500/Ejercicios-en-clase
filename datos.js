/* import Dao from '/DAO.js' */

let nom = document.getElementById("name");
let ape = document.getElementById("lastname");
let cod = document.getElementById("codigo_estudiante");
let fec = document.querySelector("input[type=date]");
let prog = document.getElementById("programa_universidad");
let gen = document.querySelectorAll('[name=seleccion_genero]');
let hob = document.querySelectorAll('[name=hobbies]');

class Estudiante {

    constructor(nombre, apellidos, codigo, fechaNacimiento, programa, genero, hobbies) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.codigo = codigo;
        this.fechaNacimiento = fechaNacimiento;
        this.programa = programa;
        this.genero = genero;
        this.hobbies = hobbies;

    }
}

const dao = {
    "estudiantes": [],
    "create": function (estudiante) 
    {
        this.estudiantes.push(estudiante);

    },
    "update": function(estudiante)
    {
        for(let i; i<this.estudiante.length; i++){
            if(this.estudiantes[i].codigo==estudiante.id){
                this.estudiantes[i]=estudiante;

            }
        }
        this.estudiantes.push(estudiante);
    },
    "delete": function(estudiante)
    {
        this.estudiantes.push(estudiante);
    }
}
//por cada elemento que encuentre, retorna mas de una opcion
let arreglohobbies = [];
hob.forEach(Element => Element.checked ? arreglohobbies.push(Element.value) : null);

boton.onclick = function()
{
    var estudiante1 = new Estudiante(nom.value, ape.value, cod.value, fec.value, prog.value, "gen.value", arreglohobbies);
    console.log(estudiantes);
    
}