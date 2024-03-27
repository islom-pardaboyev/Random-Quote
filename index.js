const quote = document.getElementById("quote");
const author = document.getElementById("author");
const getBtn = document.getElementById("btn");
const copyBtn = document.getElementById("copyBtn");
const modal = document.getElementById("modal");

const url = "https://api.quotable.io/random";

const getQuote = () => {
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
