class Question {
  constructor(text, choices, answerIndex) {
    this.text = text;
    this.choices = choices;
    this.answerIndex = answerIndex; // (index de la bonne réponse)
  }
}

const questions = [
  new Question(
    "Quelle est l'évolution de Pikachu ?",
    ["Pichu", "Raichu", "Evoli", "Voltali"],
    1
  ),
  new Question(
    "Quel type est super efficace contre le type Feu ?",
    ["Plante", "Insecte", "Eau", "Acier"],
    2
  ),
  new Question(
    "Combien de Pokémon de première génération existe-t-il ?",
    ["151", "100", "250", "386"],
    0
  ),
  new Question(
    "Quel Pokémon légendaire fait partie du trio des oiseaux ?",
    ["Mewtwo", "Sulfura", "Rayquaza", "Groudon"],
    1
  ),
  new Question(
    "Quelle capacité est de type Électrik ?",
    ["Flammèche", "Vive-Attaque", "Tonnerre", "Tranche"],
    2
  ),
  new Question(
    "Quel est le starter de type Eau dans la 1ère génération ?",
    ["Salamèche", "Carapuce", "Bulbizarre", "Pikachu"],
    1
  ),
  new Question(
    "Quel Pokémon est connu pour dire 'Pika Pika' ?",
    ["Pikachu", "Raichu", "Mew", "Pichu"],
    0
  ),
  new Question(
    "Quelle pierre fait évoluer Evoli en Aquali ?",
    ["Pierre Feu", "Pierre Eau", "Pierre Foudre", "Pierre Lune"],
    1
  ),
];
