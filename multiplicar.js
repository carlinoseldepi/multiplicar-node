const fs = require('fs');

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {
        let data = '';

        if (!Number(base)) {
            reject(`${base} no es un número`);
            return;
        }

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }


        fs.writeFile(`tablas/tabla-del-${base}.txt`, data, (err) => {
            if (err) reject(err)

            resolve(`tabla-del-${base}.txt`);
        });
    });
}

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        let data = '';
        if (!Number(base)) {
            reject(`${base} no es un número`);
            return;
        }

        for (let i = 0; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i} \n`;
        }

        resolve(data);
    })
}

module.exports = {
    crearArchivo: crearArchivo,
    listarTabla: listarTabla
}