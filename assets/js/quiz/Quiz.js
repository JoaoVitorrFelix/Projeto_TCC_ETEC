const progressBar = document.querySelector('.progress-bar');
const nextButton = document.querySelector('.next-button');
const questionContainers = document.querySelectorAll('.question-container');
const answers = []; // Array para armazenar as respostas selecionadas pelo usuário
const correctAnswers = ['3', '7', '11', '16', '20', '23', '25', '31', '33', '37']; // Array com as respostas corretas
let score = 0; // Variável para armazenar a pontuação (quantidade de respostas corretas)

function enableNextButton() {
  nextButton.removeAttribute('disabled');
}

function disableNextButton() {
  nextButton.setAttribute('disabled', true);
}

function showQuestion() {
  questionContainers.forEach(container => {
    container.classList.add('d-none');
  });

  questionContainers[currentQuestion].classList.remove('d-none');
}

function checkAnswer() {
  const selectedOption = document.querySelector(`input[name="selector"]:checked`);
  if (selectedOption) {
    const selectedAnswer = selectedOption.id.split('-')[0];
    answers[currentQuestion] = selectedAnswer;
  }
}

function calculateScore() {
  score = 0;
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === correctAnswers[i]) {
      score++;
    }
  }
}

function displayResult() {
  const resultMessage = `Você acertou ${score} de ${totalQuestions} questões.`;
  const correctQuestions = [];
  const incorrectQuestions = [];

  for (let i = 0; i < totalQuestions; i++) {
    if (answers[i] === correctAnswers[i]) {
      correctQuestions.push(`Questão ${i + 1}`);
    } else {
      incorrectQuestions.push(`Questão ${i + 1}`);
    }
  }

  const correctMessage = `Questões corretas: <br>${correctQuestions.join('<br>')}`;
  const incorrectMessage = `Questões incorretas: <br>${incorrectQuestions.join('<br>')}`;

  Swal.fire({
    icon: 'info',
    title: 'Quiz Finalizado!',
    html: `<div>${resultMessage}</div><br><div>${correctMessage}</div><br><div>${incorrectMessage}</div>`,
    className: "Qz-Fin",
    showCancelButton: false,
    showConfirmButton: true,
    confirmButtonText: 'Clique aqui para emitir o seu certificado',
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = "Tela_Certificado.html";
    }
  });
}


let currentQuestion = 0;
const totalQuestions = questionContainers.length;

nextButton.addEventListener('click', () => {
  checkAnswer();
  currentQuestion++;

  if (currentQuestion < totalQuestions) {
    showQuestion();
  } else {
    calculateScore();
    displayResult();
  }

  const progressPercent = (currentQuestion / totalQuestions) * 100;
  progressBar.style.width = progressPercent + '%';
  progressBar.setAttribute('aria-valuenow', progressPercent);
  progressBar.textContent = progressPercent + '%';
});

showQuestion();
