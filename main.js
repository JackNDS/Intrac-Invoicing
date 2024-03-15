const modal = document.querySelector(".modal-container");
const overlay = document.querySelector(".overlay");

document.getElementById("close-btn").addEventListener("click", (e) => {
    modal.classList.remove("open");
    overlay.style.display = 'none';
    document.body.classList.remove("no-scroll");
  });

document.getElementById("contacts").addEventListener("click", (e) => {
    modal.classList.add("open");
    overlay.style.display = 'block';
    document.body.classList.add("no-scroll");
  });