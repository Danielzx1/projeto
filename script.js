function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pega a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "foto mayk brito sorrindo, de oculos escuro, jaqueta jeans e fundo azul"
    )
  } else {
    // se tiver sem light mode, moantar a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }
}
