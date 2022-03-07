function Calcular() {
  let pNota = document.querySelector("#primeiranota");
  let sNota = document.querySelector("#segundanota");
  let tNota = document.querySelector("#terceiranota");
  let qNota = document.querySelector("#quartanota");
  let res = document.querySelector("#res");

  let pN = Number(pNota.value);
  let sN = Number(sNota.value);
  let tN = Number(tNota.value);
  let qN = Number(qNota.value);

  let media = (pN + sN + tN + qN) / 4;
  res.innerHTML = ``;

  if (media < 0 || media > 10) {
    alert(`Digite um valor de 1 - 10`);
    res.innerHTML = `Voce nao digitou um valor valido. Tente novamente!`;
  } else {
    if (pN == "" || sN == "" || tN == "" || qN == "") {
      alert(`Digite um valor valido`);
      res.innerHTML = `Voce nao digitou um valor valido. Tente novamente!`;
    } else {
      if (media > 7) {
        res.innerHTML += `<p> \u{1F44D} Parabéns, você foi aprovado!</p> Sua média final foi ${media}`;
      } else {
        res.innerHTML += `<p> \u{1F44E} Que pena! Você foi reprovado!</p> Sua média final foi ${media}`;
      }
    }
  }

  console.log(res);
}
