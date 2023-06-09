//Genericos 
class PilaEnteros{
    private vec:number[]=[];
    insertar(x:number){
        this.vec.push(x);
    }
    extraer(){
        if(this.vec.length>0){
            return this.vec.pop();
        }else{
            return null;
        }
    }
}
class PilaString{
    private vec:string[]=[];
    insertar(x:string){
        this.vec.push(x);
    }
    extraer(){
        if(this.vec.length>0){
            return this.vec.pop();
        }else{
            return null;
        }
    }
}
//clase generica
class PilaGenerica<T>{
    private vec:T[]=[];
    insertar(x:T){
        this.vec.push(x);
    }
    extraer(){
        if(this.vec.length>0){
            return this.vec.pop();
        }else{
            return null;
        }
    }
}
//Numeros
let pila1=new PilaGenerica<number>();
pila1.insertar(23);
pila1.insertar(28);
pila1.insertar(2);
console.log(pila1.extraer());
//Cadenas
let pila2=new PilaGenerica<string>();
pila2.insertar('23');
pila2.insertar('28');
pila2.insertar('2');
console.log(pila1.extraer());
//Genericas
let pila3=new PilaGenerica;
pila3.insertar('23');
pila3.insertar(28);
pila3.insertar('2');
console.log(pila1.extraer());