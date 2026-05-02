function simularDescarga() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Datos descargados con éxito mediante Async/Await"), 2000);
    });
}

async function procesarDatos() {
    console.log("Descargando datos...");
    try {
        const mensaje = await simularDescarga();
        console.log(mensaje);
    } catch (error) {
        console.error("Hubo un error:", error);
    }
}

procesarDatos();