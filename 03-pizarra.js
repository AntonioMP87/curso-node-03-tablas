const crearArchivo = async(base, listar)=>{

    if(listar){
        await multiplicar(base);
    }else{
        try{
            fs(`tabla_del_${base}.txt`, await multiplicar(base));
            return `table_del_${base} creado con exito`;
        }catch(error){
            throw error;
           
        }
    }
    
    
}

//console.log(`Base: ${opciones['base']}`);
//console.log(`Limite: ${opciones['limite']}`);

//console.log(`Listar: ${opciones['l']}`);

/*
crearArchivo(opciones['b'], opciones['l'])
.then(msg => console.log(msg))
.catch(error=>console.log(error));
*/
