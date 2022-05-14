
let dice = [
  {
    name: "welerson",
    noteOne: "9",
    noteTwo: "9"
  },
  {
    name: "Karina",
    noteOne: "3",
    noteTwo: "9"
  },
  {
    name: "Gustavo",
    noteOne: "2",
    noteTwo: "7"
  },
  {
    name: "Sandra",
    noteOne: "7",
    noteTwo: "7"
  },
  
]



//calc
function sum(noteOne, noteTwo){
  let somatorio = (Number(noteOne) + Number (noteTwo))
  return somatorio
  
};

function media(noteOne, noteTwo){
  let average = (Number(noteOne)+Number(noteTwo)) / 2
  return average
  
}


function passedornotpassed(noteOne, noteTwo){
  let mediacalc = (Number(noteOne) + Number(noteTwo)) / 2
  let zerado = (Number(noteOne) + Number(noteTwo)) / 2

  if(mediacalc >= 7){
    return('Passou de Ano')
  } else{
    return ('Não foi dessa vez, estudo mais!')
  }
}

//message
function printAverage(dice){
  return`  olá ${dice.name}, o total das provas foi de: ${sum(dice.noteOne, dice.noteTwo)} pontos
  Sua média foi de: ${media(dice.noteOne, dice.noteTwo)} pontos
  Resultado final:  ${passedornotpassed(dice.noteOne, dice.noteTwo)}
   `

};

for (let dados of dice) {
  let averageMessage = printAverage(dados)
  alert(averageMessage)
};