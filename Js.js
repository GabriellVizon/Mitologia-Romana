// Abrir modais
const modalBtns = document.querySelectorAll(".modal-btn");
modalBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const modalId = btn.getAttribute("data-modal");
        const modal = document.getElementById(modalId);
        modal.style.display = "flex";
    });
});

// Fechar modais ao clicar no "×"
const closeBtns = document.querySelectorAll(".close");
closeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const modal = btn.closest(".modal");
        modal.style.display = "none";
    });
});

// Fechar modais ao clicar fora do conteúdo
const modals = document.querySelectorAll(".modal");
modals.forEach(modal => {
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
