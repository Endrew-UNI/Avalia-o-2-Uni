// Função para alternar entre modo claro e escuro
function alternarModo() {
    var body = document.body;
    var modoSwitch = document.getElementById('modoSwitch');

    // Alterna entre as classes 'modo-claro' e 'modo-escuro'
    if (modoSwitch.checked) {
        body.classList.remove("modo-claro");
        body.classList.add("modo-escuro");
    } else {
        body.classList.remove("modo-escuro");
        body.classList.add("modo-claro");
    }
}
// Função de "Email cadastrado" após envio
function handleSubmit(event) {
    event.preventDefault();

    // email
    var email = document.getElementById("email").value;

    // Confirm
    var confirmationMessage = document.getElementById("confirmationMessage");
    confirmationMessage.style.display = "block";

    // Limpar o campo de e-mail
    document.getElementById("email").value = "";

    return false; // Impede o envio real do formulário
}