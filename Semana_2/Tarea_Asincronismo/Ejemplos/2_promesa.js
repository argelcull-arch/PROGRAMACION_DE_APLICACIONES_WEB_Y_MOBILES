function descargarDatosPromesa() {
    return new Promise((resolve, reject) => {
        console.log("Descargando datos...");
        setTimeout(() => {
            resolve("Datos descargados con éxito mediante Promesa");
        }, 2000);
    });
}

descargarDatosPromesa()
    .then(mensaje => console.log(mensaje))
    .catch(error => console.error(error));