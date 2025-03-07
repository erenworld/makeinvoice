document.addEventListener("DOMContentLoaded", () => {
    const emailInput = document.querySelector(".emailInput");
    const emailText = document.querySelector(".emailText");
    const nameInput = document.querySelector(".nameInput");
    const nameText = document.querySelector(".nameText");
    const adressInput = document.querySelector(".adressInput");
    const adressText = document.querySelector(".adressText");
    const cityInput = document.querySelector(".cityInput");
    const cityText = document.querySelector(".cityText");
   
    emailInput.addEventListener("input", () => {
        emailText.textContent = emailInput.value;

        if (emailInput.value.trim() !== "") {
            emailText.classList.remove("bg-[#F5F5F5]");
        } else {
            emailText.classList.add("bg-[#F5F5F5]");
        }
    })
    nameInput.addEventListener("input", () => {
        nameText.textContent = nameInput.value;
    
        if (nameInput.value.trim() !== "") {
            nameText.classList.remove("bg-[#F5F5F5]");
        } else {
            nameText.classList.add("bg-[#F5F5F5]");
        }
    })
    adressInput.addEventListener("input", () => {
        adressText.textContent = adressInput.value;

        if (adressInput.value.trim() !== "") {
            adressText.classList.remove("bg-[#F5F5F5]");
        } else {
            adressText.classList.add("bg-[#F5F5F5]");
        }
    })
    cityInput.addEventListener("input", () => {
        cityText.textContent = cityInput.value;

        if (cityInput.value.trim() !== "") {
            cityText.classList.remove("bg-[#F5F5F5]");
        } else {
            cityText.classList.add("bg-[#F5F5F5]");
        }
    })
})

