function toggleMode() {
  const html = document.documentElement
  html.classlist.toggle("light")

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/bg-mobilide.jpg")
  } else {
    img.setAttribute("src", "./assets/bg-mobilide.jpg")
  }
}
