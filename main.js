const form = document.getElementById("form");
const input = document.getElementById("email");
const message = document.getElementById("message");
const regex = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputValue = input.value.trim();
  const found = inputValue.match(regex);

  //IF REGEX MATCHES
  if (found) {
    input.style.border = "1px solid #50c878";
    message.innerText = "Valid Email";
    message.style.color = "#50c878";

    // SET TIMER TO REMOVE MESSAGE
    setTimeout(() => {
      input.style.border = "1px solid #413a3a4b";
      message.innerText = "";
    }, 2000);
  } else {
    input.style.border = "1px solid #f96262";
    message.innerText = "Please provide a valid email";
    message.style.color = "#f96262";
    message.style.marginBottom = "1rem";

    //SET TIMER REMOVE MESSAGE
    setTimeout(() => {
      input.style.border = "1px solid #413a3a4b";
      message.innerText = "";
    }, 2000);
  }
});
