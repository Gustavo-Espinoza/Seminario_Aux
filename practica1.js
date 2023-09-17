//PREGUNTA 4 ARRAYS AND ARRAYS METHODS
let transformarATipos=[1,"casa",{}];
let tiposDeArray=[];
for(let i=0; i<transformarATipos.length;i++){
    tiposDeArray.push(typeof(transformarATipos[i]));
}
console.log(transformarATipos);
console.log(tiposDeArray);