function verificarUsuario(usuario) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (usuario === 'admin') {
                resolve('Acceso concedido');
            } else {
                reject('Acceso denegado');
            }
        }, 1000);
    });
}

let usuario = false

verificarUsuario('admin')
    .then(res => { 
        if (!usuario) { 
            (console.log(res))
            usuario = true
        }
    })
    .catch(error => {
        if (!usuario) { 
            console.error(error)
            usuario = true
    } 
});
        
verificarUsuario('Ivan')
    .then(res => {
        if (!usuario) {
            console.log(res)
            usuario = true
        }
    })
     
    .catch(error => {
        if (!usuario) {
            console.error(error)
            usuario = true;
        }
    });