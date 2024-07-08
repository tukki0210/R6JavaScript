const answer = document.querySelector('#answer');

console.log(answer);

const doAnswer = () => {
    console.log('doAnswerが動いた');
    answer.style.color = "red"
    answer.textContent = "〇"
}


answer.addEventListener('click', doAnswer)