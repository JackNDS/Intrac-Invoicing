const modal = document.querySelector(".modal-container");
const modal2 = document.querySelector(".modal2");
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

document.getElementById("update-btn").addEventListener("click", (e) => {
    modal2.classList.add("open");
    overlay.style.display = 'block';
    document.body.classList.add("no-scroll");
  });

  document.getElementById("close-btn2").addEventListener("click", (e) => {
    modal2.classList.remove("open");
  });