import { getSalida } from './helpers/multiplicar.js';
import {opciones} from './config/yargs.js';


console.clear();

getSalida(opciones['b'], opciones['l'], opciones['h'])
.then(msg=>console.log(msg))
.catch(error=>console.log(error));





