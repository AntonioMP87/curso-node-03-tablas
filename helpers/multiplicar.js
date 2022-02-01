
import { writeFileSync as fs } from 'fs';
import { colors } from '../config/colors.js';

const multiplicar = async(base, opcion, hasta)=>{
    let cabecera = `=======================\nTABLA DEL ${base}\n=======================\n`;
    let cabeceraConsola = colors.yellow(`=======================\nTABLA DEL ${base}\n=======================\n`);
    let salida = cabecera;
    let consola = cabeceraConsola;
    for(let x = 1; x <= hasta; x++){
        consola += `${colors.blue(base)} ${colors.red('x')} ${colors.blue(x)} ${colors.red('=')} ${colors.bold(base*x)}\n`; 
        salida += `${base} x ${x} = ${base*x}\n`; 
    }
    if(opcion){
        return consola
    }else{
        return salida;
    }
    
    
};

const crearArchivo = async(base, opcion, hasta)=>{
    try{
        fs(`./salida/tabla_del_${base}.txt`, await multiplicar(base, opcion, hasta));
        const msg = `table_del_${base} creado con exito`
        return colors.green(msg);
    }catch(error){
        throw error;
       
    }
}


const getSalida = async (base, opcion=false, hasta)=>{
    if(opcion){
        return await multiplicar(base,opcion, hasta);
    }else{
        return await crearArchivo(base,opcion, hasta);
    }
    

};


export {getSalida}