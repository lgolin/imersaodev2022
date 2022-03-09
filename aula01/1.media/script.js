function Converter() {
  let valorDigitado = document.querySelector("#num");
  let converter = document.getElementsByName("temp");
  let res = document.querySelector("#res");

  let temp = Number(valorDigitado.value);

  if (converter[0].checked) {
    res.innerHTML = `Testando.`;
  }
}
