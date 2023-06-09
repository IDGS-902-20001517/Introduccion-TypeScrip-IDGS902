//objetos, arreglos, interfaces Archivo1
let mascotas=['perro','gato',100,true]
let tem1:(boolean|number|string)[]=['aaa',100]
let nombres:string[]=['Juan','Pedro','Mario']
//Se le puede colocar ';' o ',' como separadores
interface Persona1{nombre:string,
                    grupo:string,
                    edad:number,
                    materias:string[],
                    activo?:string
                }
const alumno1:Persona1={
    nombre:'Mario',
    grupo:'IDGS902',
    edad:23,
    materias:['Español'],
}
alumno1.activo='Inscrito'
console.log(alumno1)
//any 
let vector1:Array<number>=[9,8,7,6];
vector1.push(10)
vector1[1]=22
for(let tem of vector1)
    console.log(tem)
let tem:(number|string)[]=[]
tem.push('Mario')
tem.push(123)
interface Alumno{
    matricula?:number;
    nombre:string;
    edad:number;
    email:string;
}
const alumno:Alumno={
    matricula:1234,
    nombre:'mario',
    edad:23,
    email:'mario@gmail'
}
console.table(alumno)