const argv = require('yargs')
                .option({
                    'b':{
                            alias: 'base',
                            type:'number',
                            demandOption: true,
                            describe:'Es la base de la tabla de multiplicar'
                        },
                    'l':{
                            alias:'listar',
                            type: 'boolean',
                            default: false,
                            describe:'Muestra la tabla en la consola'
                        },
                    'h':{
                            alias: 'hasta',
                            type: 'number',
                            default: 10,
                            describe: 'Hasta la cantidad de multiplicar'

                        }
                    })
                .check( (argv, option) => {
                    if( isNaN( argv.b ) ){
                        throw 'La base tiene que ser un number';
                    }

                    return true;
                })   
                .argv;

module.exports = argv;