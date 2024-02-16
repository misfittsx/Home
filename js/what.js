const e = document.querySelector("[what-open-modal]"),
  o = document.querySelector("[what-close-modal]"),
  t = document.querySelector("[what-modal]");
e.addEventListener("click", () => {
  t.showModal();
}),
  o.addEventListener("click", () => {
    t.close();
  });
