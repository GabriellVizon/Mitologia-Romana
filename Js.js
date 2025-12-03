const modalBtns = document.querySelectorAll(".modal-btn");
const closeBtns = document.querySelectorAll(".close");
const modals = document.querySelectorAll(".modal");

// ABRIR MODAL
modalBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const modalId = btn.getAttribute("data-modal");
        const modal = document.getElementById(modalId);
        modal.classList.add("active");
    });
});

// FECHAR NO X
closeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.closest(".modal").classList.remove("active");
    });
});

// FECHAR CLICANDO NO FUNDO
modals.forEach(modal => {
    modal.addEventListener("click", e => {
        if (e.target === modal) {
            modal.classList.remove("active");
        }
    });
});
