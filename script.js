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
    quizData.forEach((data, index)) => {
        
    }
}
