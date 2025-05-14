let state = "home";
let currentQuestion = 0;
let userAnswers = [];

function home() {
  const app = document.getElementById("app");
  app.innerHTML = `
        <h2>Bienvenue sur le Quiz !</h2>
        <p>Teste tes connaissances sur les Pokemon :D</p>
        <button id="startBtn">Commencer</button>
    `;
  document.getElementById("startBtn").addEventListener("click", () => {
    state = "quiz";
    currentQuestion = 0;
    userAnswers = [];
    quiz();
  });
}
// Ici je fais en sorte d'avoir un retour à un état de base pour recommencer à la première question, vider les réponses et démarrer le quizz
//à l'event du click sur le btn en le reliant avec un id à ma function home.
//Le HTML est envoyé à ma div avec l'id app et le sera tout au long des étapes de mon quizz

function quiz() {
  const app = document.getElementById("app");
  const q = questions[currentQuestion];
  let choicesHtml = "";
  q.choices.forEach((choice, idx) => {
    choicesHtml += `
            <div>
                <input type="radio" name="choice" id="choice${idx}" value="${idx}">
                <label for="choice${idx}">${choice}</label>
            </div>`;
  });
  // Ici j'instancie les questions et ses choix en associant un compteur aux questions et des idx (id qui s'auto incremente) aux choix

  app.innerHTML = `
        <h3>Question n°${currentQuestion + 1} / ${questions.length}</h3>
        <div>${q.text}</div>
        <form id="quizForm">
            <div class="radio-group">${choicesHtml}</div>
            <div style="display: flex; gap: 10px;">
                <button type="button" id="nextBtn" ${
                  currentQuestion === questions.length - 1
                    ? 'style="display:none"'
                    : ""
                }>Suivant</button>
                <button type="button" id="validateBtn" ${
                  currentQuestion === questions.length - 1
                    ? ""
                    : 'style="display:none"'
                }>Valider</button>
            </div>
        </form>
    `;
  // Ici je fais essentiellement l'affichage des bonnes données, questions, choix, bouton suivant ou valider selon l'avancement

  const nextBtn = document.getElementById("nextBtn");
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      const selected = document.querySelector('input[name="choice"]:checked');
      if (selected) {
        userAnswers[currentQuestion] = Number(selected.value);

        if (currentQuestion < questions.length - 1) {
          currentQuestion++;
          quiz();
        }
      } else {
        alert("Veuillez sélectionner une réponse.");
      }
    });
  }
  const validateBtn = document.getElementById("validateBtn");
  if (validateBtn) {
    validateBtn.addEventListener("click", () => {
      const selected = document.querySelector('input[name="choice"]:checked');
      if (selected) {
        userAnswers[currentQuestion] = Number(selected.value);
        state = "result";
        result();
      } else {
        alert("Veuillez sélectionner une réponse.");
      }
    });
  }
  // Différenciation des boutons suivant et valider
}

function result() {
  const app = document.getElementById("app");
  let score = 0;
  questions.forEach((q, idx) => {
    if (userAnswers[idx] === q.answerIndex) score++;
  });
  app.innerHTML = `
        <h2>Résultat du Quiz</h2>
        <p>Votre score : <strong>${score} / ${questions.length}</strong></p>
        <button id="restartBtn">Recommencer</button>
    `;
  document.getElementById("restartBtn").addEventListener("click", () => {
    state = "home";
    home();
  });
}
// Calcul et Affichage résultat

window.addEventListener("DOMContentLoaded", home);
// Renvoi à la home page au chargement / refresh
