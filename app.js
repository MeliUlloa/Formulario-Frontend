async function traerSelect() {
    try {
        // Simulación de JSON desde un archivo local
        const roles = [
            "Estudiante",
            "Profesor",
            "Personal de servicio",
            "Administrativo",
            "Directivo"
        ];
        
        const select = document.getElementById('options');

        // Itera cada rol y los agrega al select
        roles.forEach(rol => {
            const option = document.createElement('option');
            option.textContent = rol;
            option.value = rol.toLowerCase();
            select.appendChild(option);
        });

    } catch (error) {
        console.error(error.message);
    }
}

// Escuchar el evento submit del formulario
document.getElementById('registrationForm').addEventListener('submit', function(event){
    event.preventDefault(); // Evita el envío predeterminado del formulario
    
    // Obtener valores de los campos ingresados
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('options').value;

    // Crear un objeto con los datos
    const formData = {
        nombre: name,
        correo: email,
        contraseña: password,
        rol: role
    };

    console.log(formData); // Imprimir objeto en consola
});

// Llamar a la función para cargar los roles en el select
traerSelect();