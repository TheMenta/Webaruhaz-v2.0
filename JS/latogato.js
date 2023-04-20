import { ADATLISTA } from "./adat.js";
$(function () {
  init();
});

function init() {
  const articleElem = $("article");
  articleElem.html(osszeAllit(ADATLISTA));
}
function osszeAllit(lista) {
  let txt = "";

  for (let index = 0; index < lista.length; index++) {
   txt+=` <div class="card col-sm-4">
    <div class="card-body">
      <h4 class="card-title">${lista[index].nev}</h4>
      <p class="card-text">${lista[index].kor} éves kutya, ${lista[index].fajta} fajta</p>
      <a href="#" class="card-link">Megtekint</a>
      <a href="#" class="card-link">Kosárba rak</a>
    </div>
  </div>`
  }

  
  return txt;
}

