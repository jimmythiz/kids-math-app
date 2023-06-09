let num1 = document.querySelector(`.num1`)
let num2 = document.querySelector(`.num2`)
let option1 = document.querySelector(`.option1`)
let option2 = document.querySelector(`.option2`)
let option3 = document.querySelector(`.option3`)
let button = document.querySelector(`.fa`)
let tryagain = document.querySelector(`#tryagain`)
let answer = 0;

function generateNew  () {
    let number1 = Math.floor(Math.random() * 100)
    let number2 = Math.floor(Math.random() * 30)
    let dummy1 
    let dummy2 
    answer = number1 - number2
    num1.innerHTML = number1
    num2.innerHTML =number2
    let allOption = [answer]
    do {
        dummy1 = Math.floor(Math.random() * 60);
      } while (dummy1 === answer);
      allOption.push(dummy1);
      do {
        dummy2 = Math.floor(Math.random() * 30);
      } while (dummy2 === answer || dummy2 === dummy1);
      allOption.push(dummy2);
    let randomOption = allOption.sort(function (){
        return Math.random() - 0.5
    })
    option1.innerHTML = randomOption[0]
    option2.innerHTML = randomOption[1]
    option3.innerHTML = randomOption[2]
}
option1.addEventListener(`click`,function(){
    if (option1.innerHTML == answer){
        generateNew()
    } else {
        tryagain.style.display = `flex`
    }
})
option2.addEventListener(`click`,function(){
    if (option2.innerHTML == answer){
        generateNew()
    } else {
        tryagain.style.display = `flex`
    }
})
option3.addEventListener(`click`,function(){
    if (option3.innerHTML == answer){
        generateNew()
    } else {
        tryagain.style.display = `flex`
    }
})
generateNew()
button.addEventListener(`click`,()=>{
    tryagain.style.display = `none`
})