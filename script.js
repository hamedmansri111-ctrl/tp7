function nav(id) {
document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
document.getElementById(id).classList.add('active');
}
const ecran = document.getElementById('ecran');
const histo = document.getElementById('historique');
function add(val) {
    ecran.value+=val
// TODO: Ajouter 'val' à la suite du texte déjà présent sur l'écran
// Indice : utiliser l'opérateur +=
}
function effacer() {
    ecran.value=" ";
// TODO: Ajouter 'val' à la suite du texte déjà présent sur l'écran
// Indice : utiliser l'opérateur +=
}
function calculer() {
try {
let res = eval(ecran.value);
histo.innerHTML = `<li>${ecran.value} = ${res}</li>` + histo.innerHTML;
ecran.value = res;
} catch(e) {
ecran.value = 'Erreur';
}
}
let tachesData = JSON.parse(localStorage.getItem('taches')) || [];

function sauvegarderEtAfficherTaches() {
  localStorage.setItem('taches', JSON.stringify(tachesData));
  const ul = document.getElementById('listeTaches');
  ul.innerHTML = '';

  tachesData.forEach((tache, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span onclick="basculerTache(${index})" style="cursor:pointer; text-decoration:${tache.done ? 'line-through' : 'none'}">${tache.texte}</span>
      <button type="button" onclick="supprimerTache(${index})">X</button>
    `;
    ul.appendChild(li);
  });

  document.getElementById('compteur').textContent = `Tâches en cours : ${tachesData.length}`;
}

function ajouterTache() {
  const input = document.getElementById('tacheInput');
  if (input.value.trim() === '') return;
  tachesData.push({ texte: input.value.trim(), done: false });
  input.value = '';
  sauvegarderEtAfficherTaches();
}

function basculerTache(index) {
  tachesData[index].done = !tachesData[index].done;
  sauvegarderEtAfficherTaches();
}

function supprimerTache(index) {
  tachesData.splice(index, 1);
  sauvegarderEtAfficherTaches();
}

function toutSupprimerTaches() {
  tachesData = [];
  sauvegarderEtAfficherTaches();
}

sauvegarderEtAfficherTaches();


function sauvegarderEtAfficherTaches() {
  localStorage.setItem('taches', JSON.stringify(tachesData));
  const ul = document.getElementById('listeTaches');
  ul.innerHTML = '';

  tachesData.forEach((tache, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span onclick="basculerTache(${index})" style="cursor:pointer; text-decoration:${tache.done ? 'line-through' : 'none'}">${tache.texte}</span>
      <button type="button" onclick="supprimerTache(${index})">X</button>
    `;
    ul.appendChild(li);
  });

  document.getElementById('compteur').textContent = `Tâches en cours : ${tachesData.length}`;
}

function ajouterTache() {
  const input = document.getElementById('tacheInput');
  if (input.value.trim() === '') return;
  tachesData.push({ texte: input.value.trim(), done: false });
  input.value = '';
  sauvegarderEtAfficherTaches();
}

function basculerTache(index) {
  tachesData[index].done = !tachesData[index].done;
  sauvegarderEtAfficherTaches();
}

function supprimerTache(index) {
  tachesData.splice(index, 1);
  sauvegarderEtAfficherTaches();
}

function toutSupprimerTaches() {
  tachesData = [];
  sauvegarderEtAfficherTaches();
}

sauvegarderEtAfficherTaches();
('li');
li.innerHTML
function redimensionner(taille) {
document.getElementById('monImage').width = taille;
document.getElementById("valeurwidth").innerHTML=taille;}
let grille = [1, 2, 3, 4, 5, 6, 7, 8, ''];
function afficher() {
const plateau = document.getElementById('plateau');
plateau.innerHTML = '';
grille.forEach((val, i) => {
let div = document.createElement('div');
div.className = 'tuile' + (val === '' ? ' vide' : '');
div.textContent = val;
div.onclick = () => jouer(i);
plateau.appendChild(div);
}); }
let coups = 0;

function jouer(i) {
  let vide = grille.indexOf('');
  let diff = Math.abs(i - vide);
  if (diff === 1 || diff === 3) {
    [grille[i], grille[vide]] = [grille[vide], grille[i]];
    coups++;
    document.getElementById('compteurCoups').textContent = `Coups : ${coups}`;
    afficher();
    verifierVictoire();
  }
}

function verifierVictoire() {
  const etatGagnant = [1, 2, 3, 4, 5, 6, 7, 8, ''];
  const gagne = grille.every((val, idx) => val === etatGagnant[idx]);
  if (gagne) {
    alert(`Félicitations ! Vous avez gagné en ${coups} coups !`);
  }
}

// Vérifier si la case sélectionnée est voisine de la case vide 
function melanger() {
grille.sort(() => Math.random() - 0.5);
afficher();
}
afficher();
function evaluerQuiz() {
const reponsesCorrectes = { q1: 'B', q2: 'A', q3: 'C', q4: 'B', q5: 'A' };
let score = 0;
let form = document.getElementById('quizForm');
for (let q in reponsesCorrectes) {
let option = form.elements[q];
if (option && option.value === reponsesCorrectes[q]) {
score++;
}
}
let divResultat = document.getElementById('resultatQuiz');
divResultat.innerHTML = `Votre score : ${score} / 5 <br>`;
if (score === 5) {
divResultat.innerHTML+="Excellant";
}
else if(score>=3){
    divResultat.innerHTML+="Bon travail";
}else {divResultat.innerHTML+="Refusez"}
ajouterTentativeQuiz(score);
function ajouterTentativeQuiz(score) {
  const liste = document.getElementById('historiqueQuiz');
  const li = document.createElement('li');
  const statut = score >= 3 ? 'pass' : 'fail';
  const heure = new Date().toLocaleTimeString();

  li.dataset.statut = statut;
  li.innerHTML = `
    <span>Score : <strong>${score} / 5</strong> (${heure})</span>
    <button type="button" onclick="this.parentElement.remove()" style="margin-left: 10px;">Supprimer</button>
  `;

  liste.appendChild(li);
  filtrerHistoriqueQuiz();
}

function filtrerHistoriqueQuiz() {
  const filtre = document.getElementById('filtreScore').value;
  const items = document.querySelectorAll('#historiqueQuiz li');

  items.forEach(item => {
    if (filtre === 'all' || item.dataset.statut === filtre) {
      item.style.display = 'list-item';
    } else {
      item.style.display = 'none';
    }
  });
}const imagesDiaporama = ["image1.jpg", "image2.jpg", "image3.jpg"];
let indexImage = 0;
let intervalDiaporama = null;

function demarrerDiaporama() {
  if (intervalDiaporama !== null) return;
  intervalDiaporama = setInterval(() => {
    indexImage = (indexImage + 1) % imagesDiaporama.length;
    document.getElementById('monImage').src = imagesDiaporama[indexImage];
  }, 2000);
}

function arreterDiaporama() {
  clearInterval(intervalDiaporama);
  intervalDiaporama = null;
}


}
let tempsRestant = 30;

const chronoQuiz = setInterval(() => {
  tempsRestant--;
  const elTimer = document.getElementById('timerQuiz');
  if (elTimer) elTimer.textContent = tempsRestant;

  if (tempsRestant <= 0) {
    clearInterval(chronoQuiz);
    evaluerQuiz();
  }
}, 1000);

