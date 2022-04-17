const matchingTable = [
  { rom: "I", ing: 1 },
  { rom: "V", ing: 5 },
  { rom: "X", ing: 10 },
  { rom: "L", ing: 50 },
  { rom: "C", ing: 100 },
  { rom: "D", ing: 500 },
  { rom: "M", ing: 1000 },
];

const exceptions = [
  { rom: "IV", ing: 4 },
  { rom: "IX", ing: 9 },
  { rom: "XL", ing: 40 },
  { rom: "XC", ing: 90 },
  { rom: "CD", ing: 400 },
  { rom: "CM", ing: 900 },
];

const romanToInteger = () => {
  // Récupère la valeur du champ
  let t = document.getElementById("usr-inpt").value;
  // Initialise le résultat à afficher
  let s = 0;
  // Si le champ est vide
  if (t === "") {
    alert("Field cannot be empty");
    return null;
    // Si le champ n'est pas vide, commencer la conversion
  } else {
    // Itère sur toutes les entrées du tableau exceptions
    for (i = 0; i < exceptions.length; i++) {
      // Tant que la chaîne de caractères t contient une entrée équivalente à celle du tableau exceptions
      while (t.match(exceptions[i].rom)) {
        // Ajoute la valeur du Roman au résultat
        s = s + exceptions[i].ing;
        // Supprime de la chaîne de caractères le Roman
        t = t.replace(exceptions[i].rom, "");
        // console.log(t);
      }
    }
    // Si, après les opérations du dessus, la chaîne de caractères n'est pas vierge, proéder
    if (t.length !== 0) {
      // Casse la chaîne de caractères en tableau de 1 signe
      t = t.split("");
      // console.log(t);
      // Itère sur toutes les entrées du tableau matchingTable
      for (i = 0; i < t.length; i++) {
        let n = matchingTable.find((e) => e.rom === t[i]);
        // Si on trouve un match Roman pour chaque entrée du tableau
        if (n) {
          s = s + n.ing;
          // Sinon, on sort de la boucle for dès le premier caractère inconnu rencontré
        } else {
          alert("Error while parsing user input.");
          break;
        }
      }
    }
  }
  // Affiche le résultat
  document.getElementById("result").innerText = s;
};
