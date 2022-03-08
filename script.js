const contactForm = document.querySelector(".form-wrapper form");

function formHandler(e) {
  const inputs = e.target.querySelectorAll("input");
  inputs.forEach((input) => {
    const message = input.nextElementSibling;

    if (input.type == "email") {
      if (input.value.length < 1) {
        message.className = "error-note";
        input.parentElement.setAttribute("invalid", "");
        message.innerText = JSON.parse(input.dataset.error).empty;
        e.preventDefault();
        return;
      }
      const emailReg = /^([A-Za-z])+([._-]?\w+)+@([A-Za-z])+([._-]?\w+)+\.\w+$/;
      if (!emailReg.test(input.value)) {
        message.className = "error-note";
        input.parentElement.setAttribute("invalid", "");
        message.innerText = JSON.parse(input.dataset.error).invalid;
        e.preventDefault();
        return;
      }
    }
    if (input.value.length < 1) {
      message.innerText = input.dataset.error;
      message.className = "error-note";
      input.parentElement.setAttribute("invalid", "");
      e.preventDefault();
      return;
    }

    input.parentElement.removeAttribute("invalid");
    input.nextElementSibling.innerText = "";
    input.nextElementSibling.className = "";
  });
}
contactForm.addEventListener("submit", formHandler);
