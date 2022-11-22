const ratingButtons = document.querySelectorAll("[data-button]"),
  btnSubmit = document.querySelector(".card-submit button"),
  cards = document.querySelectorAll(".card"),
  textSelect = document.querySelector(".thank-select p");

function selectButton() {
  if (this.classList.contains("ativo")) {
    this.classList.remove("ativo");
  } else {
    ratingButtons.forEach((item) => {
      item.classList.remove("ativo");
    });

    this.classList.add("ativo");
  }
  return this.innerText;
}

function thankYou() {
  cards[0].classList.remove("ativo");
  cards[1].classList.add("ativo");
  ratingButtons.forEach((item) => {
    if (item.classList.contains("ativo")) {
      textSelect.innerText = `You selected ${item.innerText} out of 5`;
    }
  });
}

btnSubmit.addEventListener("click", thankYou);

ratingButtons.forEach((button) => {
  button.addEventListener("click", selectButton);
});
