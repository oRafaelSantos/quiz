function btn(){
  
  //Nome
  const nome = window.prompt("Digite seu nome");
  
  //Primeira pergunta
  const time = window.confirm("Flamengo é maior que o Corinthians?")
  
  //Vai verificar se é verdadeiro ou falso
  if(time == false){
    alert("Parabéns " + nome + ", você acertou");
  }else{
    alert(nome + ", você errou");
  }
  
  //Segunda pergunta
  const jogador = window.confirm("Gabigol é melhor que Yuri Alberto?");
  
    //Vai verificar se é verdadeiro ou falso
    if(jogador == true){
      alert(nome + ", você errou.");
    }else{
      alert("Parabéns " + nome + ", você acertou");
    }
    
    //Terceira pergunta 
    const flaputa = window.confirm("Flamengo é time pequeno?")
  
  //Vai verificar se é verdadeiro ou falso
    if(flaputa == true){
      alert(nome + ", você Acertou.");
    }else{
      alert("Errou");
    }
    
    alert("Cabo");
  
}