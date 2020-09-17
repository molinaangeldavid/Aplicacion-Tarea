const argv = require('./config/yargs.js').argv;

const { crear, listar, actualizar } = require('./por-hacer/por-hacer.js');
const porHacer = require('./por-hacer/por-hacer.js');



let comando = argv._[0];

switch(comando){
    case 'crear':
        let tarea =  porHacer.crear( argv.descripcion);
        console.log(tarea);
    break;
    case 'listar':

        let lista = porHacer.listar();
        
        for(let tarea of lista){
            console.log('==========Por hacer ========='.brightMagenta);
            console.log(tarea.descripcion.green);
            console.log('Estado:'+ tarea.completado);
            console.log('-----------------------------'.brightMagenta);
        }
        
        
    break;
    case 'actualizar':

        let actualizado = porHacer.actualizar(argv.descripcion,argv.completado)
        console.log(actualizado);

    break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion)
        console.log(borrado);
        break;
    default: 
        console.log('Comando no reconocido');
    break;


}

