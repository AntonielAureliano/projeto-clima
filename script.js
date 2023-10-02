document.querySelector(".busca").addEventListener("submit", (event) => {
  event.preventDefault();

  let input = document.querySelector("#searchInput").value;

  if (input !== "") {
    showWarning("Carregando...");

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(
      input
    )}&appid=270203d9cab5cb5be2c18ed3f7e91262`;
  }
});

function showWarning(msg) {
  document.querySelector(".aviso").innerHTML = msg;
}
