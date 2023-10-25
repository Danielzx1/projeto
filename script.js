function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pega a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar 1.png")
  } else {
    // se tiver sem light mode, moantar a imagem normal
    img.setAttribute("src", "./assets/avatar 3.png")
  }
}
