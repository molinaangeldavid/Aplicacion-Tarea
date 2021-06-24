const fs = require('fs');
const colors = require ('colors');

let listado = [];
const guardadatos = () => {

    let data = JSON.stringify(listado)

    fs.writeFile(`basededatos/data.json`,data,(error) => {

        if(error)  throw new error('No se pudo grabar!!!');
        
    });
}
const crear  = (descripcion) => {

    cargarData();
    
    let porHacer = {
        descripcion,
        completado: false,
    };

    listado.push (porHacer)
    guardadatos();
    return porHacer;

}



const cargarData = (descripcion) => {

    try{
        listado = require('../basededatos/data.json');
    }catch(error){
        listado = [];
    }
}
const listar = () => {
    
    cargarData();
    return listado;

}



const actualizar = (descripcion, completado = true) => {

    cargarData();
    /*
        Le digo a JavaScript es que me dé el Index o la posición de esta tarea, si la descripción de la tarea coincide. Si no coincide esto me va a regresar un menos uno. Un menos uno va a indicar que no lo encontró y cualquier número ya sea el cero para arriba cualquier número superior me va a decir cuál es esa posición.
    */
    let index = listado.findIndex ( tarea  => {
        return tarea.descripcion == descripcion;
    });
     if (index>=0){
            listado[index].completado = completado;
            guardadatos();
            return true;
     }else{
         return false;
     }
}

const borrar = (descripcion) => {

    cargarData();

    let nuevoListado = listado.filter(tarea => tarea.descripcion !==descripcion);

    if(listado.length == nuevoListado.length){
        return false;
    

    }else{
        listado =nuevoListado;
        guardadatos();
        return true;
    }
    

}

module.exports = {
    crear,
    listar,
    actualizar,
    borrar,
}
