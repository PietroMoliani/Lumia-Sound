const cores = [
  ["#ff00cc", "#3333ff"],
  ["#00ffff", "#ff00ff"],
  ["#ff6600", "#00ccff"],
  ["#33ff33", "#ff3399"],
  ["#ffff00", "#ff00cc"]
];

let index = 0;

function trocarCores() {
  index = (index + 1) % cores.length;
  const [nova1, nova2] = cores[index];
  document.documentElement.style.setProperty("--color1", nova1);
  document.documentElement.style.setProperty("--color2", nova2);
}

setInterval(trocarCores, 7000); // troca a cada 7 segundos suavemente

function irParaTela2() {
  window.location.href = "tela2.html";
}
