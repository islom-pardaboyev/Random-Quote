let quote = document.getElementById("quote");
let author = document.getElementById("author");
let getBtn = document.getElementById("btn");
let copyBtn = document.getElementById("copyBtn");
let modal = document.getElementById("modal");

const url = "https://api.quotable.io/random";

let getQuote = () => {
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      quote.innerText = item.content;
      author.innerHTML = item.author;
    });
};

function copyFunction() {
  navigator.clipboard.writeText(quote.innerText);

  modal.classList.remove("-right-[24%]");
  modal.classList.add("right-5");
  setTimeout(() => {
    modal.classList.remove("right-5");
    modal.classList.add("-right-[24%]");
  }, 4000);
}

window.addEventListener("load", getQuote);
getBtn.addEventListener("click", getQuote);
copyBtn.addEventListener("click", copyFunction);
