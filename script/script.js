const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  const ranNumber = randonumbers();
  document.body.style.backgroundColor = ranNumber;
  color.textContent = ranNumber;
  color.style.color = ranNumber;
});

function randonumbers() {
  function c() {
    let hex = Math.floor(Math.random() * 256).toString(16);
    return ("0" + String(hex)).substr(-2);
  }
  return "#" + c() + c() + c();
}
