// const inputs = document.querySelectorAll(".inputs");
// const contactBtn = document.querySelector(".contact-btn");

// contactBtn.addEventListener("click", (event) => {
//     event.preventDefault();

//     inputs.forEach((input) => {
//         const errorMsg = input.nextElementSibling;

//         if (input.value === "") {
//             input.classList.add("error-msg");
//             input.classList.remove("form-confirmed");
//             errorMsg.textContent = "campo obrigatório";
//             errorMsg.classList.add("span-required");
//         } else {
//             errorMsg.textContent = "";
//             errorMsg.classList.remove("span-required");
//             input.classList.remove("error-msg");
//             input.classList.add("form-confirmed");
//         }
//     });
// });

const camposFormulario = document.querySelectorAll('.campo')
const botaoEnviar = document.querySelector('.btn-enviar')

botaoEnviar.addEventListener('click', (e) => {
    e.preventDefault()

    camposFormulario.forEach((input) => {
        if (input.value) {
            input.classList.add('valido')
            input.nextElementSibling.classList.remove('mostrar')
        }else {
            input.classList.remove('valido')
            input.classList.add('erro')
            input.nextElementSibling.classList.add('mostrar')
        }
    })
})