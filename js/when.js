const e = document.querySelector("[when-open-modal]"),
  o = document.querySelector("[when-close-modal]"),
  c = document.querySelector("[when-modal]");
e.addEventListener("click", () => {
  c.showModal();
}),
  o.addEventListener("click", () => {
    c.close();
  });
