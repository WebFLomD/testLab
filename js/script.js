/** */




/** */
let a = document.querySelectorAll('.blockQuestionsAndAnswers-contentTitleAndPlus')
let b = document.querySelectorAll('.blockQuestionsAndAnswers-contentText')
let c = document.querySelectorAll('.blockQuestionsAndAnswers-btnPlusOrClose')

for(let i = 0; i < a.length; i++){
    a[i].addEventListener('click', function(){
        if(b[i].classList.contains('active')){
            b[i].classList.remove('active')
            c[i].classList.remove('active')
        } else {
            b[i].classList.add('active')
            c[i].classList.add('active')
        }
    })
}

/** */
const inputContainers = document.querySelectorAll('.blockSendForms-inputContainer')

inputContainers.forEach(container => {
    const inputText = container.querySelector('.blockSendForms-inputText')
    const imgTrue = container.querySelector('.blockSendForms-imgTrue')
    const imgFulse = container.querySelector('.blockSendForms-imgFulse')
    const helperText = container.querySelector('.blockSendForms-helperText')

    inputText.addEventListener('input', function() {
        if (inputText.value.trim() !== '') {
            imgTrue.style.display = 'block'
            imgFulse.style.display = 'none'
            helperText.style.display = 'none'
            inputText.style.borderColor = ''
        } else {
            imgTrue.style.display = 'none'
            imgFulse.style.display = 'block'
            helperText.style.display = 'block'
            inputText.style.borderColor = 'var(--color-Dangerous)'
        }
    });
});