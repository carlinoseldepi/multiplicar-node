const argv = require('./config/yargs').argv;
let { crearArchivo, listarTabla } = require('./multiplicar.js');


console.log(argv);

let comando = argv._[0];
let base = argv.base;
let limite = argv.limite;

switch (comando) {
    case 'listar':
        listarTabla(base, limite)
            .then(data => console.log(data))
            .catch((err) => console.log(err));
        break;

    case 'crear':
        crearArchivo(base, limite)
            .then(archivo => console.log(`Archivo creado con la tabla del ${archivo}`))
            .catch((err) => console.log(err));
        break;

    default:
        console.log('Comando no permitido');
}