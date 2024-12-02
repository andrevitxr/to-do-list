
const message = document.querySelector(".message");

// Função para iniciar a animação de saída
function hideMessage() {
    message.classList.remove("slideIn");
    message.classList.add("slideOut"); 

    setTimeout(() => {
        message.style.display = "none"; // Remove o elemento da tela
    }, 500); // Tempo da animação de saída (mesmo valor definido no CSS)
}


setTimeout(hideMessage, 3000);

