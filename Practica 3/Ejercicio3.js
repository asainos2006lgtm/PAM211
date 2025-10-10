function simularPeticionAPI () {
    return new Promise (resolve => {
        setTimeout(()=> {
            resolve("Datos rercibidos correctamente");
        }, 5000);
    });
}

async function obtenerDatos() {
    
    const datos = await simularPeticionAPI();
    console.log(datos);
}

obtenerDatos();