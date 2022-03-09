function Converter() {
  let valorDigitado = document.querySelector("#num");
  let temp = document.getElementsByName("temp");
  let res = document.querySelector("#res");

  let num = Number(valorDigitado.value);

  if (num == "") {
    alert("Digite uma temperatura válida");
  } else {
    if (temp[0].checked) {
      let conv = ((num * 9) / 5 + 32).toFixed(1);
      res.innerHTML = `${num}°C = ${conv}°F`;
    }

    if (temp[1].checked) {
      let conv = (((num - 32) * 5) / 9).toFixed(1);

      res.innerHTML = `${num}°F = ${conv}°C`;
    }
  }
}
