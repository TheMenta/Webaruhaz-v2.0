export function rendezes(lista, kulcs) {
  if (typeof lista[0][kulcs] === "number") {
    rendezesKorSzerint(lista);
  } else {
    rendezesNevSzerint(lista, kulcs);
  }
}
function rendezesNevSzerint(lista, kulcs) {
  lista.sort(function (a, b) {
    let ertek = 1;
    if (a[kulcs] < b[kulcs]) {
      ertek = -1;
    }
    return ertek;
  });
}
function rendezesKorSzerint(lista) {
  lista.sort(function (a, b) {
    return a.kor - b.kor;
  });
}