function fechar_abrir(id) {
  const el = document.getElementById(id);
  el.classList.toggle("d-none");
}
function trocarPlaneta(planeta, novaP) {
  let planetaLugar= document.getElementById("explicativa")
  let explicaca = document.getElementById("explicacao")
  const tipos=[
    "mercurio",
    "venus",
    "terra",
    "marte",
    "jupiter",
    "saturno",
    "urano",
    "netuno"
  ]
  const tipo = tipos[planeta]

    if (novaP !=1 && planeta ==='mercurio') {
      explicaca.classList.remove("d-none")

      planetaLugar.textContent="Mercúrio está sofrendo com a diferença de temperatura, além disso está tendo variação orbital e impactos em sua atmosfera. Planetas mais perto do Sol, podem estar esfriando."
    }
    if(planeta === 'venus'){
      if (novaP <2) {
        explicaca.classList.remove("d-none")

        planetaLugar.textContent ="Venus está com temperatura extrema, a atmosfera está instável e está sofrendo com o efeito estufa"
      }else if (novaP >=3) {
        explicaca.classList.remove("d-none")

        planetaLugar.textContent =" Venus está esfriando gradualmenta, a atmosfera pode começar a congelar ou a colapsar parcialmente."
      }
    }
    if (planeta === 'terra') {
      if (novaP <3) {
        explicaca.classList.remove("d-none")

         planetaLugar.textContent =" A Terra está sofrendo um aumento extremo de temperatura e isso afeta drasticamente o ecossistema, causando derretimento das calotas polares."
      }
      else if (novaP >= 4) {
        explicaca.classList.remove("d-none")

        planetaLugar.textContent ="A terra está esfriando gradualmente, pode estar enfrentando uma nova era glacial e impacto na vida vegetal e animal."
      }
    }
    if (planeta === 'marte') {

      if (novaP <4) {
        explicaca.classList.remove("d-none")

         planetaLugar.textContent ="Marte está aquecendo de forma significativa, o que pode derreter o gelo presente e criar instabilidades em sua superfície. Pode estar com possíveis alterações nas suas luas e na sua relação com outros planetas."
      }
      else if (novaP >= 5) {
        explicaca.classList.remove("d-none")

        planetaLugar.textContent ="Marte está se tornando ainda mais frio e inóspito, dificultando qualquer tentativa de colonização."
      }
    }
    if (planeta === 'jupiter') {

      if (novaP <5 ) {
        explicaca.classList.remove("d-none")

         planetaLugar.textContent ="Júpiter está sofrendo com a grande pressão atmosférica e alterações em suas luas, o que pode afetar o clima do planeta. Planetas próximos a Júpiter podem estar sendo impactados pela sua grande gravidade."
      }
      else if (novaP >= 6) {
        explicaca.classList.remove("d-none")

        planetaLugar.textContent ="Júpiter ainda tem grandes tempestades e variações de climas devido à sua imensa atmosfera e presença de várias luas. Além de estar enfrentando um esfriamento"
      }
    }
    if (planeta === 'saturno') {
      if (novaP <6) {
        explicaca.classList.remove("d-none")

         planetaLugar.textContent ="Saturno está passando por variações intensas devido à sua grande massa e anéis imponentes. Seus efeitos gravitacionais podem causar instabilidade em planetas próximos."
      }
      else if (novaP >= 7) {
        explicaca.classList.remove("d-none")

        planetaLugar.textContent ="Saturno, mais distante do Sol, está experimentando um ambiente gelado e mais estável, embora suas luas e anéis ainda causem efeitos gravitacionais significativos."
      }
    }
    if (planeta === 'urano') {

      if (novaP <7) {
        explicaca.classList.remove("d-none")

         planetaLugar.textContent ="Urano, com sua inclinação extrema e atmosfera gelada, pode causar mudanças dramáticas nos planetas ao redor. O clima do planeta é imprevisível devido à falta de uma estrutura estável"
      }
      else if (novaP === 8) {
        explicaca.classList.remove("d-none")

        planetaLugar.textContent ="Urano está sofrendo com sua temperatura extremamente baixa e sua atmosfera composta por gases densos. A distância do Sol contribui para um clima gelado e instável."
      }
    }
    if (planeta === 'netuno') {
      if (novaP <8) {
        explicaca.classList.remove("d-none")
         planetaLugar.textContent ="Netuno, ao estar mais próximo do Sol, tem sua atmosfera mais aquecida, fazendo com que seus ventos e tempestades se tornem mais intensos. A radiação solar faz com que sua atmosfera se expanda, alterando suas características gasosas e a composição do metano"
      }
    }
}
function verificarLinha(id){
    let idP= document.getElementById(id)
    let instancia = idP.cloneNode(true)
    let input = document.getElementById(`linha-${id}`); 
    let linhaCont = input.parentElement
    let botao = linhaCont.querySelector("button.x")

    let numeros = parseInt(input.value); 
    let orbita = document.getElementById(`o${numeros}`);
    const todasOrbitas = document.querySelectorAll(".orbitas");

    let instanciasDoMesmoPlaneta = 0;
    todasOrbitas.forEach(orb => {
      let clone = orb.querySelectorAll(`#${id}`)
      instanciasDoMesmoPlaneta +=clone.length
    });
    if (instanciasDoMesmoPlaneta >=2) {
      alert("não pode haver mais intancias desse planeta")
      return
    }
    if (orbita.childElementCount >=1) {
      alert("não pode haver mais planetas nessa orbita")
      return
    }
      orbita.appendChild(instancia);
      trocarPlaneta(id,numeros)
      orbita.style.borderBottomWidth='1px'
      orbita.style.borderBottomColor='rgba(255, 255, 255, 0.38)'
      orbita.style.borderBottomStyle='dashed'

        botao.addEventListener("click",function() {
          if (botao) {
            orbita.removeChild(instancia);
            orbita.style.borderBottomWidth=''
            orbita.style.borderBottomColor=''
            orbita.style.borderBottomStyle=''
          }
        })    

  }   

function abrir(event) {
  const categorias={
    "mercurio": {
      "nome": "Mercúrio",
      "distancia": "57,9 milhões de km",
      "curiosidades": "É o menor planeta do sistema solar e o mais rápido a orbitar o Sol. Um dia lá dura 176 dias terrestres. Apesar de ser o mais próximo do Sol, não é o mais quente. Devido à ausência de atmosfera densa, não possui Lua."
    },
    "venus": {
      "nome": "Vênus",
      "distancia": "108,2 milhões de km",
      "curiosidades": "É o planeta mais quente do sistema solar, com temperaturas acima de 460°C por causa de sua atmosfera de dióxido de carbono. Curiosamente, um dia em Vênus é mais longo que seu ano — ele gira tão devagar que o Sol nasce no oeste e se põe no leste. Não tem Lua (isso é um fato a ser estudado, já que diferente de Mercúrio, é um planeta com massa que conseguiria segurar uma lua)."
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
document.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    const elementoLinha = document.activeElement;
      if (elementoLinha && elementoLinha.classList.contains('linha')) {
        const id = elementoLinha.id.replace('linha-','')
        let botao = document.querySelector(`#linha-${id}`).parentElement.querySelector('.acrescentar'); 
      if (botao) {
        botao.click(); 
      }
    }
  }
});
