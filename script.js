function conta(){
  var partida = document.getElementById('partida')
  var passos = document.getElementById('passos')
  var fim = document.getElementById('fim')
  var resposta = document.getElementById('resposta')
  //condicional para chercar se ha numeros na caixa numerica
  if(partida.value.length == 0 || passos.value.length == 0 || fim.value.length == 0){
    window.alert('preencha todas as caixas')
  }
  else if (passos.value == 0)/*o numero de passos tem de ser maior que 0*/{
    window.alert('numero do passos invalido') 
  }
  else if(Number(partida.value) < Number(fim.value)){ /*para contagem progressiva*/
    var valor = Number(partida.value)
    var cont = Number(passos.value)
    var etapa = 0
    do{
      resposta.innerHTML += `${valor} \u{1F913} `
      valor += cont
      etapa++
    }while(valor < Number(fim.value))
  }
  else{
    var valor = Number(partida.value)
    var cont = Number(passos.value)
    var etapa = 0
    do{
      resposta.innerHTML += `${valor} \u{1F913} `
      valor -= cont
      etapa++
    }while(valor > Number(fim.value))
  }
}