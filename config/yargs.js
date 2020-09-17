const options = {
    descripcion:{
        alias: 'd',
        demand: true,
    },
    completado:{
        alias: 'c',
        default: true,
    }

}
const argv = require('yargs')


.command('crear','crea una nueva tarea por hacer',options)
.command('listar','Muestra lista de tareas por hacer')
.command('actualizar', 'Actualiza la tarea completada', options)
.command('borrar','Borra todas las tareas', options)
.help()
.argv


module.exports = {

    argv,
}
