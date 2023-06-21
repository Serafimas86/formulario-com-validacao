const inputs = document.querySelectorAll(".inputs");
const contactBtn = document.querySelector(".contact-btn");

contactBtn.addEventListener("click", (event) => {
    event.preventDefault();

    inputs.forEach((input) => {
        const errorMsg = input.nextElementSibling;

        if (input.value === "") {
            input.classList.add("error-msg");
            input.classList.remove("form-confirmed");
            errorMsg.textContent = "campo obrigatório";
            errorMsg.classList.add("span-required");
        } else {
            errorMsg.textContent = "";
            errorMsg.classList.remove("span-required");
            input.classList.remove("error-msg");
            input.classList.add("form-confirmed");
        }
    });
});