window.addEventListener("scroll", function () {
  let navBar = this.document.querySelector(".navBar")
  navBar.classList.toggle("navScrolled", window.scrollY > 0)
})