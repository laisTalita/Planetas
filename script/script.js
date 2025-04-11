function fechar_abrir(id) {
  const el = document.getElementById(id);
  el.classList.toggle("d-none");
}
function verificarLinha(id){
    let idP= document.getElementById(id)
    let instancia = idP.cloneNode(true)
    instancia.setAttribute("data-clone", "true");

    let input = document.getElementById(`linha-${id}`);     
    let numeros = parseInt(input.value); 

    let orbita = document.getElementById(`o${numeros}`);

    const todasOrbitas = document.querySelectorAll(".orbitas");
    let instanciasDoMesmoPlaneta = 0;
  
    todasOrbitas.forEach(orb => {
      const clones = orb.querySelectorAll(`#${id}`);
      instanciasDoMesmoPlaneta += clones.length;
    });
  
    if (instanciasDoMesmoPlaneta >= 1) {
      alert("Limite de 1 instância desse planeta atingido!");
      return;
    }
      orbita.appendChild(instancia);
    orbita.style.borderBottomWidth='1px'
    orbita.style.borderBottomColor='rgba(255, 255, 255, 0.38)'
    orbita.style.borderBottomStyle='dashed'

}
function ExcluiLinha(id) {
  let idp = document.getElementById(id)
  let input = document.getElementById(`linha-${id}`)
  let numeros = parseInt(input.value)
  let orbita = document.getElementById(`o${numeros}`);

  let clone = orbita.querySelector(`#${id}[data-clone="true"]`);


  if (clone) {
  orbita.removeChild(clone)
  orbita.style.borderBottomWidth=''
  orbita.style.borderBottomColor=''
  orbita.style.borderBottomStyle=''

  }else{
    alert("Esse planeta não está orbita")
  }
}
function abrir(event) {
  const categorias={
    "mercurio": {
      "nome": "Mercúrio",
      "distancia": "57,9 milhões de km",
      "curiosidades": "É o menor planeta do sistema solar e o mais rápido a orbitar o Sol. Um dia lá dura 176 dias terrestres. Apesar de ser o mais próximo do Sol, não é o mais quente, devido à ausência de atmosfera densa. Não possui Lua."
    },
    "venus": {
      "nome": "Vênus",
      "distancia": "108,2 milhões de km",
      "curiosidades": "É o planeta mais quente do sistema solar, com temperaturas acima de 460°C por causa de sua atmosfera de dióxido de carbono. Curiosamente, um dia em Vênus é mais longo que seu ano — ele gira tão devagar que o Sol nasce no oeste e se põe no leste. Não tem Lua."
    },
    "terra": {
      "nome": "Terra",
      "distancia": "149,6 milhões de km",
      "curiosidades": "É o único planeta conhecido com vida. Possui uma atmosfera rica em oxigênio, água líquida em abundância e uma Lua que estabiliza seu eixo, ajudando no equilíbrio do clima. Possui 1 Lua."
    },
    "marte": {
      "nome": "Marte",
      "distancia": "227,9 milhões de km",
      "curiosidades": "Marte é desértico e frio, com temperatura de -29°C. Tem metade do tamanho da Terra. Marte às vezes é chamado de Planeta Vermelho, devido ao ferro enferrujado presente em seu solo. Tem 2 Luas."
    },
    "jupiter": {
      "nome": "Júpiter",
      "distancia": "778,5 milhões de km",
      "curiosidades": "É o maior planeta do sistema solar e tem uma tempestade gigante chamada Grande Mancha Vermelha, que dura há séculos. É similar a uma estrela, mas nunca atingiu massa suficiente para queimar. É um planeta gasoso e tem 95 luas."
    },
    "saturno": {
      "nome": "Saturno",
      "distancia": "1,43 bilhões de km",
      "curiosidades": "Não é o único planeta a ter anéis, mas é um dos mais bonitos, compostos de gelo e poeira. Tem mais de 140 luas conhecidas, incluindo Titã, que tem atmosfera própria. Possui 145 luas confirmadas."
    },
    "urano": {
      "nome": "Urano",
      "distancia": "2,87 bilhões de km",
      "curiosidades": "Gira praticamente de lado. Possui um tom azul-esverdeado por causa do metano na atmosfera (extremamente tóxico). Urano é cercado por um conjunto de 13 anéis e é um gigante gelado. Possui 27 luas conhecidas."
    },
    "netuno": {
      "nome": "Netuno",
      "distancia": "4,5 bilhões de km",
      "curiosidades": "É o planeta mais distante do Sol, é escuro, frio e ventoso, com ventos chegando a atingir mais de 2.000 km/h. O metano dá a Netuno a mesma cor azul de Urano. Netuno tem seis anéis, mas eles são muito difíceis de ver. Possui 14 luas conhecidas."
    }
  }
  let inf = document.getElementById("info");
  inf.classList.remove("d-none"); 
  let nome = document.getElementById('nome')
  let distancia = document.getElementById('distancia')
  let curiosidade = document.getElementById('curiosidades')

  let planetaClicado = event.currentTarget.getAttribute("id");
  let planet = categorias[planetaClicado];

  nome.textContent = planet.nome;
  distancia.textContent= planet.distancia;
  curiosidade.textContent = planet.curiosidades

}
let planeta = document.querySelectorAll(".planetas")
planeta.forEach(element => {
  element.addEventListener("click",abrir)
});

