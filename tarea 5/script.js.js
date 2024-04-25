const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;
    const email = document.getElementById("email").value;
    const direccion = document.getElementById("direccion").value;
    const telefono = document.getElementById("telefono").value;

    const data = {
        nombre: nombre,
        edad: edad,
        email: email,
        direccion: direccion,
        telefono: telefono
    };

    fetch("guardar.php", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert("Datos guardados correctamente");
                form.reset();
            } else {
                alert("Error al guardar los datos");
            }
        });
});
