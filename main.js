const calculator = document.querySelector('#calculator');
const keys = calculator.querySelector('#keys');
const display = document.querySelector('#display');
const typed = document.querySelector('#typed');
const result = document.querySelector('#result');
const sciOperators = document.querySelector('#sci-operators');
const numButtons = document.querySelector('#num-buttons');
const equalBtn = document.querySelector('#equal');
const clearBtn = document.querySelector('#clear');
const deleteBtn = document.querySelector('#delete');
const answerBtn = document.querySelector('#answer');
let evaluator = document.querySelector('#eval');
let sup = document.createElement('sup');
let smallsup = document.createElement('small');
sup.appendChild(smallsup);

console.log(smallsup)
console.log(evaluator)

// .style.backgroundColor = 'red';
console.log(evaluator.length)
sciOperators.addEventListener('click', (e) => {
    let target = e.target;
    if (target.tagName === 'BUTTON' && !target.classList.contains('unshow') && !target.classList.contains('sups')) {
        typed.innerText += target.innerText;
        evaluator.innerText += target.value;
    }
    if (target.classList.contains('unshow')) {
        typed.innerText += target.value;
        evaluator.innerText += target.value;
    }
    if (target.id === 'inverse') {
        typed.innerText += `<small><sup>${-1}</sup></small>`
        evaluator.innerText += target.value;
    }
    if (target.id === 'index-2') {
        typed.innerHTML += `<small><sup>${2}</sup></small>`
        evaluator.innerText += target.value;
    }
    if (target.id === 'index-3') {
        typed.innerHTML += `<small><sup>${3}</sup></small>`
        evaluator.innerText += target.value;
    }
});



function sin() {
    let oprSin = evaluator.innerText.replace(/[^\d.+-]/g, '');
    let degree = oprSin * Math.PI / 180
    let oprSin2 = Math.sin(degree)
    result.innerText = oprSin2;
}
function cos() {
    let oprSin = evaluator.innerText.replace(/[^\d.+-]/g, '');
    let degree = oprSin * Math.PI / 180
    let oprSin2 = Math.cos(degree)
    result.innerText = oprSin2;
}
function tan() {
    let oprSin = evaluator.innerText.replace(/[^\d.+-]/g, '');
    let degree = oprSin * Math.PI / 180
    let oprSin2 = Math.tan(degree)
    result.innerText = oprSin2;
}
function log() {
    let oprSin = evaluator.innerText.replace(/[^\d.+-]/g, '');
    let degree = oprSin * Math.PI / 180
    let oprSin2 = Math.log(degree)
    result.innerText = oprSin2;
}



numButtons.addEventListener('click', (e) => {
    let target = e.target;

    if (target.tagName === 'BUTTON' && !target.classList.contains('unshow') && !target.classList.contains('btn-operator')) {
        if (typed.firstElementChild === 'sup') {
            smallsup.innerText += target.innerText
        }
        smallsup.innerText += target.innerText
        evaluator.innerText += target.value;
        console.log(evaluator.innerText)
        typed.innerText += target.innerText;
    }
    if (target.innerText === 'Ans') {
        typed.innerText = 'Ans';
        evaluator.innerText = result.innerText
    }
    if (target.innerText === 'EXP') {
        typed.innerText += 'e';
        evaluator.innerText += 'e';
    }

    if (typed.innerText[0] === '√') {
        let replacement = typed.innerText.replace('√(', '');
        evaluator.innerText = replacement + '**0.5'
    }
    if (typed.innerText[0] === '∛') {
        let replacement = typed.innerText.replace('∛(', '');
        evaluator.innerText = replacement + '**0.33333333333333333'
    }

    if (target.classList.contains('btn-operator')) {
        typed.innerText += target.innerText;
        evaluator.innerText += target.value;
    }

});

equalBtn.addEventListener('click', () => {


    if (evaluator.innerText[0] === 's') {
        sin();
    } else if (evaluator.innerText[0] === 'c') {
        cos();
    } else if (evaluator.innerText[0] === 't') {
        tan();
    } else if (evaluator.innerText[0] === 'l') {
        log();
    } else {
        result.innerText = eval(evaluator.innerText);
    }

});


clearBtn.addEventListener('click', () => {
    typed.innerText = '';
    result.innerText = '';
    evaluator.innerText = '';
});

deleteBtn.addEventListener('click', () => {
    typed.innerText = typed.innerText.slice(0, -1);
    evaluator.innerText = evaluator.innerText.slice(0, -1);
});

function answer() {

}
