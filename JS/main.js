import { ADATLISTA } from "./adat.js";
import { rendezes } from "./rendezesek.js";
let rendezesiSzempontKulcs = "nev";
let rendezesiIrany = true;
$(function () {
  init();
  AdatFelv()
});
function init() {
  const articleElem = $("article");
  articleElem.html(osszeAllit(ADATLISTA));
  const FEJLEC = $("th");
  FEJLEC.on("click", function () {
    console.log(event.target.id);
    rendezesiSzempontKulcs = event.target.id;
    rendezes(ADATLISTA, rendezesiSzempontKulcs);
    init();
  });
}
function osszeAllit(lista) {
  let txt = "";
  txt += `<table class="table table-stripped ">`;
  txt += `<tr class="table-dark"><th>név</th>
    <th>kor</th>
    <th>fajta</th></tr>`;
  for (let index = 0; index < lista.length; index++) {
    txt += `<tr>`;
    for (const key in lista[index]) {
      txt += `<td>${lista[index][key]}</td>`;
    }
    txt += `</tr>`;
  }
  txt += `</table>`;
  console.log(txt);
  return txt;
}
function AdatFelv() {
  const NEV = $("#neve");
  const KOR = $("#kora");
  const FAJTA = $("#fajt");
  const KULD = $("#kuld");
  KULD.on("click", function (event) {
    event.preventDefault();
    const UJ = {
      nev: NEV.val(),
      kor: KOR.val(),
      fajta: FAJTA.val(),
    };
    ADATLISTA.push(UJ);
    init();
  });
}
