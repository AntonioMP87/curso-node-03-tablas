import yargs from 'yargs';

const opciones = yargs(process.argv)
    .option({
        'b': {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Es la base de la tabla de Multiplicar'
          },
        'l': {
            alias: 'listar',
            type: 'boolean',
            default:false,
            describe: 'Muestra la salida por consola'
        },
        'h': {
            alias: 'hasta',
            type: 'number',
            default: 10,
            describe: 'Establece limite final de tabla de multiplicar'
        }
    })
    .check((argv, options)=>{
        if(isNaN(argv.b)){
            throw `El parametro base no es un valor númerico`;
        }else if(isNaN(argv.h)){
            throw `El parametro hasta no es un valor númerico`;
        }else{
            return true;
        }
    })
    .argv;

export {opciones};