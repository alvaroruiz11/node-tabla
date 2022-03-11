const fs = require('fs');
const colors = require('colors');

const crearArchivo = async ( base = 5, listar, hasta = 10 ) => {


    try {
        
        let salida = '';
        let consola = '';

        for (let i = 1; i <= hasta; i++) {
        
            salida += `${ base } x ${ i } = ${ base * i }\n` ;
            consola += `${ base } ${'x'.cyan} ${ i } ${'='.cyan} ${ colors.green(base * i) }\n` ;
            
        }
    
       if( listar ){
            console.log("================================".blue)
            console.log(`        Tabla del:${base}        `.bold.cyan);
            console.log("================================".yellow)           
            console.log( consola );
       } 
    
        fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida);
    
        return (`tabala-${ base }.txt`);

    } catch (err) {
        
        throw err;

    }

   

}

module.exports = {
    crearArchivo
}


