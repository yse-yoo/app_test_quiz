
let currentIdx = 0;
let score = 0;

const qNumberLabel = document.getElementById('question-number');
const qText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const feedbackArea = document.getElementById('feedback');
const feedbackText = document.getElementById('feedback-text');
const rationaleText = document.getElementById('rationale-text');
const nextBtn = document.getElementById('next-btn');
const progressBar = document.getElementById('progress-bar');

function loadQuestion() {
    const currentQuiz = quizData[currentIdx];
    feedbackArea.classList.add('hidden');
    optionsContainer.innerHTML = '';
    
    qNumberLabel.innerText = `Question ${currentIdx + 1}/${quizData.length}`;
    qText.innerText = currentQuiz.question;
    progressBar.style.width = `${((currentIdx) / quizData.length) * 100}%`;

    currentQuiz.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.innerText = opt.text;
        btn.className = "w-full text-left p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition";
        btn.onclick = () => selectOption(opt);
        optionsContainer.appendChild(btn);
    });
}

function selectOption(opt) {
    const allButtons = optionsContainer.querySelectorAll('button');
    allButtons.forEach(btn => btn.disabled = true);

    feedbackArea.classList.remove('hidden');
    rationaleText.innerText = opt.rationale;

    if (opt.isCorrect) {
        score++;
        feedbackText.innerText = "正解！";
        feedbackArea.className = "mt-6 p-4 rounded-lg bg-green-100 text-green-800";
    } else {
        feedbackText.innerText = "不正解...";
        feedbackArea.className = "mt-6 p-4 rounded-lg bg-red-100 text-red-800";
    }
}

nextBtn.onclick = () => {
    currentIdx++;
    if (currentIdx < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
};

function showResult() {
    document.getElementById('question-box').classList.add('hidden');
    document.getElementById('result-box').classList.remove('hidden');
    document.getElementById('final-score').innerText = score;
    document.getElementById('total-questions').innerText = quizData.length;
    progressBar.style.width = "100%";
}

// 初期化
loadQuestion();