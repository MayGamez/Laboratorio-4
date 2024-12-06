// Selección de elementos
const form = document.getElementById("contactForm");
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const messageField = document.getElementById("message");
const feedback = document.getElementById("formFeedback");

// Validaciones y manejo de eventos
form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevenir el envío por defecto del formulario

    let isValid = true;
    feedback.classList.remove("success", "error");

    // Validar nombre
    if (nameField.value.trim() === "") {
        isValid = false;
        nameField.style.border = "2px solid red";
    } else {
        nameField.style.border = "none";
    }

    // Validar correo
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailField.value.trim())) {
        isValid = false;
        emailField.style.border = "2px solid red";
    } else {
        emailField.style.border = "none";
    }

    // Validar mensaje
    if (messageField.value.trim() === "") {
        isValid = false;
        messageField.style.border = "2px solid red";
    } else {
        messageField.style.border = "none";
    }

    // Mostrar retroalimentación
    if (isValid) {
        feedback.textContent = "Formulario enviado con éxito. ¡Gracias por contactarnos!";
        feedback.classList.add("success");
        feedback.style.display = "block";

        // Limpiar el formulario
        form.reset();
    } else {
        feedback.textContent = "Por favor, corrige los campos marcados.";
        feedback.classList.add("error");
        feedback.style.display = "block";
    }
});
