!(function () {
  let e = document.querySelector("[where-open-modal]"),
    o = document.querySelector("[where-close-modal]"),
    c = document.querySelector("[where-modal]");
  e.addEventListener("click", () => {
    c.showModal();
  }),
    o.addEventListener("click", () => {
      c.close();
    });
})();
