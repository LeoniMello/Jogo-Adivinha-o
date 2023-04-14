//variaveis do hide
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")


//GERADOR DO NUMERO ALEATORIO
const gerador = Math.round(Math.random() * 10)
//LET CONTADORA DE TENTATIVAS
let tentativas = 1;


//funçao callback
function QuandoClicar(event) {
  event.preventDefault()

  const inputNumber = document.querySelector("#inputNumber")

  if(Number(inputNumber.value) === gerador) {
    screen1.classList.add("hide")
    screen2.classList.remove("hide")

    document.querySelector(".screen2 h2").innerText = 'Acertou em ' + tentativas + ' tentativas'

    console.log(tentativas)
  }
  inputNumber.value = ""
  tentativas++
}

//eventos

const btTry = document.querySelector("#btTry")
const btReset = document.querySelector("#btReset")


btTry.addEventListener('click', QuandoClicar)
btReset.addEventListener('click', function() {
  screen1.classList.remove("hide")
  screen2.classList.add("hide")
  tentativas = 1
})