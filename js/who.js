const e = document.querySelector("[who-open-modal]"),
  o = document.querySelector("[who-close-modal]"),
  c = document.querySelector("[who-modal]");
e.addEventListener("click", () => {
  c.showModal();
}),
  o.addEventListener("click", () => {
    c.close();
  });
