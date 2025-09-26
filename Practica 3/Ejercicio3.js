function simularPeticionAPI () {
    return new Promise (resolve => {
        setTimeout(()=> {
            resolve("Datos rercibidos correctamente");
        }, 5000);
    });
}

async function obtenerDatos() {
    console.log("Esperando datos...");
    const datos = await simularPeticionAPI();
    console.log(datos);
}

obtenerDatos();