const questionInput = document.querySelector('#question');
const answerInput = document.querySelector('#answer');
const addBtn = document.querySelector('#add-btn');
const startBtn = document.querySelector('#start-btn');
const reshuffleBtn = document.querySelector('#reshuffle-btn');
const questionsSection = document.querySelector('#questions-section');
let quizData = [];
addBtn.addEventListener('click', () => {
    if (questionInput.value && answerInput.value) {
      const question = questionInput.value.trim();
      const answer = answerInput.value.trim();
      quizData.push({ question, answer });
      questionInput.value = '';
      answerInput.value = '';
    }
});
answerInput.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
      addBtn.click();
    }
});
startBtn.addEventListener('click', () => {
    displayQuestions();
});
function displayQuestions() {
    questionsSection.innerHTML = '';
    quizData.forEach((data, index) => {
      const questionCard = document.createElement('div');
      questionCard.classList.add('question-card');
      const questionTitle = document.createElement('h2');
      questionTitle.textContent = `${index + 1}. ${data.question}`;
      const answerText = document.createElement('p');
      answerText.classList.add('answer');
      answerText.textContent = `Answer: ${data.answer}`;
      const buttonsDiv = document.createElement('div');
      buttonsDiv.classList.add('buttons');
      const revealBtn = document.createElement('button');
      revealBtn.textContent = 'Reveal';
      const hideBtn = document.createElement('button');
      hideBtn.textContent = 'Hide';
      hideBtn.style.display = 'none';
      revealBtn.addEventListener('click', () => {
        answerText.style.display = 'block';
        revealBtn.style.display = 'none';
        hideBtn.style.display = 'inline-block';
      });
      hideBtn.addEventListener('click', () => {
        answerText.style.display = 'none';
        hideBtn.style.display = 'none';
        revealBtn.style.display = 'inline-block';
      });
      buttonsDiv.appendChild(revealBtn);
      buttonsDiv.appendChild(hideBtn);
      questionCard.appendChild(questionTitle);
      questionCard.appendChild(answerText);
      questionCard.appendChild(buttonsDiv);
      questionsSection.appendChild(questionCard);
    });
}
reshuffleBtn.addEventListener('click', () => {
    shuffleArray(quizData);
    displayQuestions();
});
function shuffleArray(array) {
    
}