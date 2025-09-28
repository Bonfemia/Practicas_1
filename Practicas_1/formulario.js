document.addEventListener("DOMContentLoaded", function() {
    const formularioContacto = document.getElementById("formulario");

    if (!formularioContacto) return; // evita error si no existe en la página

    formularioContacto.addEventListener("submit", function(event) {
        event.preventDefault(); 

        const nombre = document.getElementById("Nombre")?.value.trim();
        const telefono = document.getElementById("Telefono")?.value.trim();
        const correo = document.getElementById("Email")?.value.trim();
        const mensaje = document.getElementById("Mensaje")?.value.trim();

        const telefonoRegex = /^\d{10,11}$/;  // acepta 10 o 11 dígitos
        const correoRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/; 

        if (!nombre || !telefonoRegex.test(telefono) || !correoRegex.test(correo) || !mensaje) {
            alert("Por favor, complete todos los campos correctamente.");
        } else {
            alert("Formulario enviado con éxito.");
            formularioContacto.reset(); 
        }
    });
});
