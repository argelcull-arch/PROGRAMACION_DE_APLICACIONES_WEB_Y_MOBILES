function descargarDatos(callback) {
    console.log("Descargando datos...");
    setTimeout(() => {
        callback("Datos descargados con éxito mediante Callback");
    }, 2000);
}

descargarDatos((mensaje) => {
    console.log(mensaje);
});