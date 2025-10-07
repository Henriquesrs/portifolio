emailjs.init("CMHRSr-ADN3RDGH1X");

const form = document.querySelector("#formContato");
const statusEnvio = document.querySelector("#statusEnvio");
const menu = document.getElementById("menuList");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    statusEnvio.textContent = "Enviando mensagem...";
    statusEnvio.style.color = "white";

    emailjs.sendForm("service_nblv5ge", "template_mzs7esf", form)
        .then(() => {
            statusEnvio.textContent = "Mensagem enviada com sucesso!";
            statusEnvio.style.color = "lightgreen";
            form.reset();
        })
        .catch((error) => {
            console.error("Erro:", error);
            statusEnvio.textContent = "Erro ao enviar mensagem. Tente novamente.";
            statusEnvio.style.color = "red";
        });
});

function toggleMenu() {
    if (form.style.display === "flex") {
        form.style.display = "none";
    }

    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

function mostrarFormulario() {
    if (menu.style.display === "flex") {
        menu.style.display = "none";
    }

    if (form.style.display === "flex") {
        form.style.display = "none";
    } else {
        form.style.display = "flex";
        form.scrollIntoView({ behavior: "smooth" });
    }
}