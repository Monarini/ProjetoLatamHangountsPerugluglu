import chocado from '../../../assets/gifs/chocado.gif'
import fogo from '../../../assets/gifs/fogo.gif'
import fire1 from '../../../assets/fire1.jpg'
import fire2 from '../../../assets/fire2.jpg'
import emogiExtintor from '../../../assets/emogi-extintor.svg'
import emogiRindo from '../../../assets/emogi-rindo.svg'
import emogiTriste from '../../../assets/emogi-triste.svg'
import emogiAssustado from '../../../assets/emogi-assustado.svg'
import emogiComprimento from '../../../assets/emogi-comprimento.svg'
import emogiIndignado from '../../../assets/emogi-indignado.svg'
import emogiLivro from '../../../assets/emogi-livro.svg'
import emogiCurioso from '../../../assets/emogi-curioso.svg'

import slides1 from '../../../assets/slides1.jpg'
import slides2 from '../../../assets/slides2.jpg'
import slides3 from '../../../assets/slides3.jpg'
import slides4 from '../../../assets/slides4.jpg'
import slides5 from '../../../assets/slides5.jpg'
export const INITIAL_STATE = ([
  // # Episódio - 1
  // Sequência 1 / Missão 1
  {
    _id: 1,
    chat: 1,
    user: 1,
    episode: 1,
    sequence: 1,
    mission: 1,
    message: 'Gente, tudo bem por aí? Conseguiram pegar as informações dessa etapa?',
    response: [],
    type: 'text',
    delay: 2000,
    callback: false
  },
  {
    _id: 2,
    chat: 1,
    user: 2,
    episode: 1,
    sequence: 1,
    mission: 1,
    message: 'Aqui tá tudo bem. Anotei pra não esquecer de nada.',
    response: [1],
    type: 'text',
    delay: 2000,
    callback: false
  },
  {
    _id: 3,
    chat: 1,
    user: 1,
    episode: 1,
    sequence: 1,
    mission: 1,
    message: `Ótimo! Fiquem atento aos cases. Teve um deles que aconteceu comigo. Vamos ver se vcs descobrem qual é!`,
    response: [2],
    type: 'text',
    delay: 3000,
    callback: false
  },
  {
    _id: 4,
    chat: 1,
    user: 2,
    episode: 1,
    sequence: 1,
    mission: 1,
    message: 'Quero saber qual é! Tô indo para os cases agora mesmo!',
    response: [],
    type: 'text',
    delay: 1000,
    callback: false
  },
  // Sequência 1 / Missão 2
  {
    _id: 5,
    chat: 2,
    user: 2,
    episode: 1,
    sequence: 1,
    mission: 2,
    message: `Nossa! Você tava nesse voo, Pedro? <img src="${emogiAssustado}" class="emogi" />`,
    response: [],
    type: 'text',
    delay: 0,
    callback: false
  },
  {
    _id: 6,
    chat: 2,
    user: 1,
    episode: 2,
    sequence: 1,
    mission: 2,
    message: `Não foi esse não, mas um dos meus colegas sim. Eles conseguiram cuidar de todos os casos. <img src="${emogiComprimento}" class="emogi" />`,
    response: [3],
    type: 'text',
    delay: 1000,
    callback: false
  },
  {
    _id: 7,
    chat: 2,
    user: 1,
    episode: 1,
    sequence: 1,
    mission: 2,
    message: 'Com certeza! É por isso que uma das primeiras ações é pedir ajuda. Os procedimentos precisam ser rápidos.',
    response: [4],
    type: 'text',
    delay: 1000,
    callback: false
  },
  {
    _id: 8,
    chat: 2,
    user: 2,
    episode: 1,
    sequence: 1,
    mission: 2,
    message: 'Pedro, o caso dessa senhora com a diabetes descompensada me lembrou de um treinamento do que fazer se a pessoa desmaiar. Você lembra qual é?',
    response: [],
    type: 'text',
    delay: 1000,
    callback: false
  },
  {
    _id: 9,
    chat: 2,
    user: 1,
    episode: 1,
    sequence: 1,
    mission: 2,
    message: 'Opa! Lembro sim! É um vídeo explicando o que fazer. Vou compartilhar aqui.<br><a className="modalvideo" data-src="ep1seq2mis2">https://www.youtube.com/watch?l=X89mJ3yXsbg</a><br>',
    response: [],
    type: 'text',
    delay: 1000,
    callback: false
  },
  {
    _id: 10,
    chat: 1,
    user: 1,
    episode: 1,
    sequence: 1,
    mission: 3,
    message: '',
    response: [5],
    type: 'text',
    delay: 0,
    callback: false
  },
  {
    _id: 11,
    chat: 1,
    user: 1,
    episode: 1,
    sequence: 1,
    mission: 3,
    message: 'Não! Ainda não presenciei essa situação nos meus voos. Mas vocês viram como é importante ter cuidado nessas situações ?',
    response: [],
    type: 'text',
    delay: 1000,
    callback: false
  },
  // Sequência 1 / Missão 4
  {
    _id: 12,
    chat: 1,
    user: 1,
    episode: 1,
    sequence: 1,
    mission: 3,
    message: 'Lembre-se, temos dois tipos de engasgos, o parcial e o total. No caso do parcial, tentamos fazer o passageiro tossir. Os outros procedimentos são realizados nos casos de engasgo total.',
    response: [],
    type: 'text',
    delay: 1000,
    callback: false
  },
  {
    _id: 13,
    chat: 1,
    user: 2,
    episode: 1,
    sequence: 1,
    mission: 3,
    message: 'Só no caso de bebês de até um ano que o procedimento sempre deve ser realizado. Não é, Pedro?',
    response: [],
    type: 'text',
    delay: 1000,
    callback: false
  },
  {
    _id: 14,
    chat: 1,
    user: 1,
    episode: 1,
    sequence: 1,
    mission: 3,
    message: 'Isso mesmo! E a manobra de compressão torácica também é a que devemos aplicar nas gestantes.',
    response: [6],
    type: 'text',
    delay: 1000,
    callback: false
  },
  {
    _id: 15,
    chat: 1,
    user: 1,
    episode: 1,
    sequence: 1,
    mission: 3,
    message: 'É isso aí, Pessoal! Vocês estão mandando bem nesse treinamento!',
    response: [],
    type: 'text',
    delay: 1000,
    callback: false
  },
  // Sequência 1 / Missão 4
  {
    _id: 16,
    chat: 2,
    user: 2,
    episode: 1,
    sequence: 1,
    mission: 4,
    message: `Pedro! Fala que foi nesse voo que você tava? <img src="${emogiAssustado}" class="emogi" />`,
    response: [],
    type: 'text',
    delay: 2000,
    callback: false
  },
  {
    _id: 17,
    chat: 2,
    user: 1,
    episode: 1,
    sequence: 1,
    mission: 4,
    message: 'Ainda não, Lari... rsrsrs! Tá chegando.',
    response: [7],
    type: 'text',
    delay: 2000,
    callback: false
  },
  {
    _id: 18,
    chat: 2,
    user: 1,
    episode: 1,
    sequence: 1,
    mission: 4,
    message: `Tenho alguns aqui, sim! Lembrei de um que é muito importante para a gente assistir. Vou compartilhar com vocês. Na verdade, vou mandar dois, porque conhecimento nunca é demais!`,
    response: [],
    type: 'text',
    delay: 1000,
    callback: false
  },
  {
    _id: 19,
    chat: 2,
    user: 2,
    episode: 1,
    sequence: 1,
    mission: 4,
    message: 'Não mesmo! Ainda mais falando de traumas.',
    response: [],
    type: 'text',
    delay: 1000,
    callback: false
  },
  {
    _id: 20,
    chat: 2,
    user: 1,
    episode: 1,
    sequence: 1,
    mission: 4,
    message: `Segue aí, gente! 
    <br><a className="modalvideo" data-src="ep1seq2mis2">Video Trauma Superior</a><br>
    <br><a className="modalvideo" data-src="ep1seq2mis2">Video Trauma Profundo</a><br>
    <br><a className="modalvideo" data-src="ep1seq2mis2">Video Convulsão</a><br>`,
    response: [],
    type: 'text',
    delay: 2000,
    callback: false
  },
  // Sequência 1 / Missão 5
  {
    _id: 21,
    chat: 1,
    user: 1,
    episode: 1,
    sequence: 1,
    mission: 5,
    message: 'Pessoal! Vocês viram como é importante avaliar bem a cena para determinar a prioridade de atendimento?',
    response: [8],
    type: 'text',
    delay: 2000,
    callback: false
  },
  {
    _id: 22,
    chat: 1,
    user: 1,
    episode: 1,
    sequence: 1,
    mission: 5,
    message: 'Nossa! Vocês estão afiados, hein!? Também tem outros casos em que a vítima pode estar respirando, os que são classificados como prioridade 1. Sempre observe se a frequência respiratória está acima de 30 rpm por minuto, se o pulso radial ausente e se há enchimento capilar maior que 2 segundos, assim como incapacidade de responder a comandos simples.',
    response: [],
    type: 'text',
    delay: 3000,
    callback: false
  },
  {
    _id: 23,
    chat: 1,
    user: 2,
    episode: 1,
    sequence: 1,
    mission: 5,
    message: 'Perfeito! Já anotei aqui. Pedro! Muuuito Obrigada! Também anotei a prioridade 2, que são as lesões sem risco imediato de perder a vida, como queimaduras, fraturas sem rompimento de artérias e tal. E a prioridade 3 são as lesões mínimas sem risco de perder a vida ou de deixar a pessoa incapacitada, como contusões leves e escoriações. E a prioridade 4 são as lesões irreversíveis como óbito e parada cardiorrespiratória.',
    response: [9],
    type: 'text',
    delay: 3000,
    callback: false
  },
  {
    _id: 24,
    chat: 1,
    user: 1,
    episode: 1,
    sequence: 1,
    mission: 5,
    message: `Muito bem, pessoal! Essas situações precisam de muito cuidado mesmo. Vamos ver mais algumas. <a className="modalvideo" data-src="ep1seq2mis2">https://www.youtube.com/watch?l=X89mJ3yXsbg</a>`,
    response: [],
    type: 'text',
    delay: 0,
    callback: false
  },
  // Sequência 1 / Missão 6
  {
    _id: 25,
    chat: 2,
    user: 2,
    episode: 1,
    sequence: 1,
    mission: 6,
    message: `Pedro! Não aguento mais de curiosidade! Você tava nesse caso do objeto encravado: <img src="${emogiCurioso}" class="emogi"/>`,
    response: [],
    type: 'text',
    delay: 2000,
    callback: false
  },
  {
    _id: 26,
    chat: 2,
    user: 1,
    episode: 1,
    sequence: 1,
    mission: 6,
    message: `Não! Já está chegando o caso que participei. Aguenta mais um pouco, Lari!`,
    response: [10],
    type: 'text',
    delay: 1000,
    callback: false
  },
  {
    _id: 27,
    chat: 2,
    user: 1,
    episode: 1,
    sequence: 1,
    mission: 6,
    message: 'Esse é um dos casos mais comuns, né? Por falar nisso, você observou o lacre do Kit?',
    response: [11],
    type: 'text',
    delay: 1000,
    callback: false
  },
  {
    _id: 28,
    chat: 2,
    user: 1,
    episode: 1,
    sequence: 1,
    mission: 6,
    message: 'Isso, aí! A gente sempre deve olhar o lacre e preencher o relatório depois de usar o Kit.',
    response: [],
    type: 'text',
    delay: 2000,
    callback: false
  },
  {
    _id: 29,
    chat: 2,
    user: 2,
    episode: 1,
    sequence: 1,
    mission: 6,
    message: `'Mas e aí, Pedro! Você vai falar ou não em qual socorro você tava?' <img src="${emogiCurioso}" class="emogi" />`,
    response: [],
    type: 'text',
    delay: 2000,
    callback: false
  },
  {
    _id: 30,
    chat: 2,
    user: 1,
    episode: 1,
    sequence: 1,
    mission: 6,
    message: "Kkkkk... segura a ansiedade, Lari! Tá chegando.",
    response: [],
    type: 'text',
    delay: 2500,
    callback: false
  },
  {
    _id: 31,
    chat: 1,
    user: 2,
    episode: 1,
    sequence: 1,
    mission: 7,
    message: `FINALMENTE, Pedro! Te achei! Você tava nesse caso da senhora, não é ? <img src="${emogiRindo}" class="emogi"`,
    response: [],
    type: 'text',
    delay: 2000,
    callback: false
  },
  {
    _id: 32,
    chat: 1,
    user: 1,
    episode: 1,
    sequence: 1,
    mission: 7,
    message: `Esse mesmo, Lari! Não falei que já tava chegando... rsrs. Viram como é importante seguir todos os passos corretamente nesse tipo de situação? `,
    response: [12],
    type: 'text',
    delay: 2500,
    callback: false
  },
  {
    _id: 33,
    chat: 1,
    user: 1,
    episode: 1,
    sequence: 1,
    mission: 7,
    message: 'Exatamente! A gente precisa ter certeza de que o passageiro está inconsciente, sem pulso e respiração. Então o aparelho ajuda muito nisso tbm',
    response: [],
    type: 'text',
    delay: 1000,
    callback: false
  },
  {
    _id: 34,
    chat: 1,
    user: 2,
    episode: 1,
    sequence: 1,
    mission: 7,
    message: `Mas imagino que é um momento de muita tensão.... <img src="${emogiIndignado}" class="emogi" />`,
    response: [],
    type: 'text',
    delay: 2000,
    callback: false
  },
  // Sequência 2 / Missão 1
  {
    _id: 35,
    chat: 1,
    user: 1,
    episode: 1,
    sequence: 1,
    mission: 7,
    message: `É sim, mas a gente precisa manter a calma e fazer tudo certo para ajudar o passageiro. Tem o vídeo que fiz como treinamento. Vou mandar aqui <a className="modalvideo" data-src="ep1seq2mis2">https://www.youtube.com/watch?l=X89mJ3yXsbg</a>`,
    response: [],
    type: 'text',
    delay: 3000,
    callback: false
  },
  // {
  //   _id: 24,
  //   chat: 6,
  //   user: 7,
  //   episode: 2,
  //   sequence: 2,
  //   mission: 1,
  //   message: 'Algum tempo depois...',
  //   response: [],
  //   type: 'text',
  //   delay: 0,
  //   callback: false
  // },
  // {
  //   _id: 24,
  //   chat: 6,
  //   user: 3,
  //   episode: 2,
  //   sequence: 2,
  //   mission: 1,
  //   message: 'Você já está perto?',
  //   response: [],
  //   type: 'text',
  //   delay: 2000,
  //   callback: false
  // },
  // {
  //   _id: 24,
  //   chat: 6,
  //   user: 7,
  //   episode: 2,
  //   sequence: 2,
  //   mission: 1,
  //   message: 'Algum tempo depois...',
  //   response: [],
  //   type: 'text',
  //   delay: 0,
  //   callback: false
  // },
  // {
  //   _id: 24,
  //   chat: 6,
  //   user: 3,
  //   episode: 2,
  //   sequence: 2,
  //   mission: 1,
  //   message: 'Lucas... está aí?',
  //   response: [],
  //   type: 'text',
  //   delay: 1000,
  //   callback: false
  // },
  // {
  //   _id: 24,
  //   chat: 6,
  //   user: 1,
  //   episode: 2,
  //   sequence: 2,
  //   mission: 1,
  //   message: 'Estamos com uma emergência! Corre aqui para dentro do centro!',
  //   response: [],
  //   type: 'text',
  //   delay: 2500,
  //   callback: false
  // },
  // // Sequência 2 / Missão 2
  // {
  //   _id: 24,
  //   chat: 6,
  //   user: 7,
  //   episode: 2,
  //   sequence: 2,
  //   mission: 2,
  //   message: 'Algum tempo depois...',
  //   response: [],
  //   type: 'text',
  //   delay: 0,
  //   callback: false
  // },
  // {
  //   _id: 24,
  //   chat: 6,
  //   user: 3,
  //   episode: 2,
  //   sequence: 2,
  //   mission: 2,
  //   message: `Caramba! Que dia mais agitado! Mas dá uma olhadinha na foto que foi tirada da turma toda no fim do treinamento hoje!
  //   Publicaram no site de empresa para todos os funcionários verem o bom trabalho que fizemos! Muito legal!
  //   <img src="${chocado}" class="image image-full mt-3" />`,
  //   response: [],
  //   type: 'text',
  //   delay: 3000,
  //   callback: false
  // },
  // {
  //   _id: 24,
  //   chat: 6,
  //   user: 1,
  //   episode: 2,
  //   sequence: 2,
  //   mission: 2,
  //   message: 'Opa! Obrigado por enviar! Bacana mesmo! Hoje foi adrenalina total! Você já está em casa?',
  //   response: [],
  //   type: 'text',
  //   delay: 2000,
  //   callback: false
  // },
  // {
  //   _id: 24,
  //   chat: 6,
  //   user: 3,
  //   episode: 2,
  //   sequence: 2,
  //   mission: 2,
  //   message: `Estou a caminho! O ônibus demorou um pouco mais que o normal hoje! Mas puxa, que dia, hein?! Quem diria que chegando
  //   ao treinamento íamos dar de cara com um incêndio! <img src="${emogiAssustado}" class="emogi" />
  //   <img src="${fogo}" class="image image-full mt-3" />`,
  //   response: [],
  //   type: 'text',
  //   delay: 2500,
  //   callback: false
  // },
  // {
  //   _id: 24,
  //   chat: 6,
  //   user: 1,
  //   episode: 2,
  //   sequence: 2,
  //   mission: 2,
  //   message: `Nem me fala! E a equipe toda de comissários precisando decidir qual extintor usar para apagar aquele fogaréu! Ninguém
  //   poderia imaginar que precisaríamos fazer isso! Na hora da emoção eu até raciocinei, mas agora nem consigo lembrar quais eram os
  //   extintores naquela sala! <img src="${emogiRindo}" class="emogi" />`,
  //   response: [],
  //   type: 'text',
  //   delay: 2500,
  //   callback: false
  // },
  // {
  //   _id: 24,
  //   chat: 6,
  //   user: 3,
  //   episode: 2,
  //   sequence: 2,
  //   mission: 2,
  //   message: `Acho que eram uns cinco... Um extintor de dióxido de carbono; um de pó químico seco; um de pó químico especial; um
  //   de água pressurizada... ahhh, e tinha um Halon 1301 também! <img src="${emogiExtintor}" class="emogi" />`,
  //   response: [],
  //   type: 'text',
  //   delay: 2000,
  //   callback: false
  // },
  // {
  //   _id: 24,
  //   chat: 6,
  //   user: 1,
  //   episode: 2,
  //   sequence: 2,
  //   mission: 2,
  //   message: 'Nós usamos o extintor de pó químico seco. Certo?',
  //   response: [],
  //   type: 'text',
  //   delay: 1000,
  //   callback: false
  // },
  // {
  //   _id: 24,
  //   chat: 6,
  //   user: 3,
  //   episode: 2,
  //   sequence: 2,
  //   mission: 2,
  //   message: 'Com certeza! Com aquele filtro e acetona eletrocutando, foi a melhor opção!',
  //   response: [],
  //   type: 'text',
  //   delay: 1000,
  //   callback: false
  // },
  // {
  //   _id: 24,
  //   chat: 6,
  //   user: 1,
  //   episode: 2,
  //   sequence: 2,
  //   mission: 2,
  //   message: `Depois que demos um jeito na situação, fiquei me perguntando quem teria autorizado uma funcionária levar um frasco de
  //   acetona para dentro do centro de treinamento. E ela, ainda por cima, esqueceu o frasco do lado do filtro. Claro que alguém ia
  //   esbarrar e derrubar na tomada! Que vacilo... <img src="${emogiIndignado}" class="emogi" />`,
  //   response: [],
  //   type: 'text',
  //   delay: 2000,
  //   callback: false
  // },
  // {
  //   _id: 24,
  //   chat: 6,
  //   user: 3,
  //   episode: 2,
  //   sequence: 2,
  //   mission: 2,
  //   message: `Pois é, me perguntei a mesma coisa. Mas depois que a Ellen explicou que era parte do treinamento do dia, tudo fez
  //   sentido! Você ouviu quando ela disse que agimos de acordo com as regras de segurança e mandamos muito bem?
  //   <img src="${emogiComprimento}" class="emogi" />`,
  //   response: [],
  //   type: 'text',
  //   delay: 2000,
  //   callback: false
  // },
  // {
  //   _id: 24,
  //   chat: 6,
  //   user: 1,
  //   episode: 2,
  //   sequence: 2,
  //   mission: 2,
  //   message: 'Bom saber que fizemos tudo certinho! Será que alguém falou alguma coisa sobre isso aqui no grupo?',
  //   response: [],
  //   type: 'text',
  //   delay: 1500,
  //   callback: false
  // },
  // {
  //   _id: 24,
  //   chat: 6,
  //   user: 3,
  //   episode: 2,
  //   sequence: 2,
  //   mission: 2,
  //   message: `Acho que ainda não, mas pode ser que alguém já tenha postado algum conteúdo sobre isso ou, sei lá, sobre extintores...
  //   Vou dar uma fuçada nas mensagens antigas antes de chegar em casa! Só sei que o treinamento e o curso têm fornecido informações
  //   importantes pra gente se preparar pra qualquer situação, seja real, seja fictícia. Até logo, Lucas!`,
  //   response: [],
  //   type: 'text',
  //   delay: 3000,
  //   callback: false
  // },

  // // # Episódio - 3
  // // Sequência 1 / Missão 1
  // {
  //   _id: 24,
  //   chat: 6,
  //   user: 2,
  //   episode: 3,
  //   sequence: 1,
  //   mission: 1,
  //   message: `Pessoal, bom dia! Seguem aqui sugestões de mais 4 vídeos complementares como parte do curso. Agora sobre os
  //   <strong>PBE’s</strong> (<i>Protective Breathing Equipament</i>).
  //   <ul>
  //     <li>Vídeo com check e manuseio do Dragger : <a className="modalvideo" data-src="Dragger_AME">http://linkfakedoplimplim.com</a>.</li>
  //     <li>Vídeo com check e manuseio do Puritan: <a className="modalvideo" data-src="Puritan_AME">http://linkfakedoplimplim.com</a>.</li>
  //     <li>Vídeo com check e manuseio do Air Liquid : <a className="modalvideo" data-src="Air-liquid_AME">http://linkfakedoplimplim.com</a>.</li>
  //     <li>Vídeo com check e manuseio do Scott: <a className="modalvideo" data-src="Scott_AME">http://linkfakedoplimplim.com</a>.</li>
  //   </ul>`,
  //   response: [],
  //   type: 'text',
  //   delay: 3000,
  //   callback: false
  // },
  // {
  //   _id: 24,
  //   chat: 6,
  //   user: 1,
  //   episode: 3,
  //   sequence: 1,
  //   mission: 1,
  //   message: 'Ellen, esses vídeos sobre <strong>PBE’s</strong> foram feitos pelo <strong>Ciência para Comissários</strong>, certo?',
  //   response: [],
  //   type: 'text',
  //   delay: 2000,
  //   callback: false
  // },
  // {
  //   _id: 24,
  //   chat: 6,
  //   user: 2,
  //   episode: 3,
  //   sequence: 1,
  //   mission: 1,
  //   message: `Sim, eles mostram um pouco mais sobre os equipamentos portáteis de proteção de respiração (PBE’s) usados em aeronaves.
  //   Em resumo: em casos de fumaça, gases ou deficiência de oxigênio, eles devem ser colocados em ação! Achei bacana porque dá uma boa
  //   ideia de como e em que casos manusear os PBE’s.`,
  //   response: [],
  //   type: 'text',
  //   delay: 3000,
  //   callback: false
  // },
  // {
  //   _id: 24,
  //   chat: 6,
  //   user: 1,
  //   episode: 3,
  //   sequence: 1,
  //   mission: 1,
  //   message: `Quanta informação sobre PBE’s! Agora já sei o que fazer se precisar de oxigênio e tiver muita fumaça a bordo! O legal
  //   desses vídeos é que eles mostram, de um jeito simples, situações do dia a dia e a melhor forma de evitá-las. E agora, depois de
  //   tantas emoções, talvez seja hora de tomar um lanche. Estão servidos, galera?`,
  //   response: [],
  //   type: 'text',
  //   delay: 3000,
  //   callback: false
  // },
  // // Sequência 2 / Missão 1
  // {
  //   _id: 24,
  //   chat: 6,
  //   user: 1,
  //   episode: 3,
  //   sequence: 2,
  //   mission: 1,
  //   message: 'Vi que você estava on-line... Muito cedo para estar de pé, não acha?',
  //   response: [],
  //   type: 'text',
  //   delay: 1500,
  //   callback: false
  // },
  // {
  //   _id: 24,
  //   chat: 6,
  //   user: 5,
  //   episode: 3,
  //   sequence: 2,
  //   mission: 1,
  //   message: 'Estou estudando! Depois de ontem, não sei o que esperar de mais um dia de treinamento.',
  //   response: [],
  //   type: 'text',
  //   delay: 1500,
  //   callback: false
  // },
  // {
  //   _id: 24,
  //   chat: 6,
  //   user: 1,
  //   episode: 3,
  //   sequence: 2,
  //   mission: 1,
  //   message: `Huumm… E o que você está estudando? <img src="${emogiCurioso}" class="emogi" />`,
  //   response: [],
  //   type: 'text',
  //   delay: 1500,
  //   callback: false
  // },
  // {
  //   _id: 24,
  //   chat: 6,
  //   user: 5,
  //   episode: 3,
  //   sequence: 2,
  //   mission: 1,
  //   message: `Na verdade, ia começar agora! Quer estudar comigo? <img src="${emogiLivro}" class="emogi" />`,
  //   response: [],
  //   type: 'text',
  //   delay: 1500,
  //   callback: false
  // },
  // {
  //   _id: 24,
  //   chat: 6,
  //   user: 1,
  //   episode: 3,
  //   sequence: 2,
  //   mission: 1,
  //   message: 'Não parece má ideia! Sobre o que estava pensando estudar?',
  //   response: [],
  //   type: 'text',
  //   delay: 1000,
  //   callback: false
  // },
  // {
  //   _id: 24,
  //   chat: 6,
  //   user: 5,
  //   episode: 3,
  //   sequence: 2,
  //   mission: 1,
  //   message: `Estava olhando o conteúdo sobre <strong>Procedimento Base de Combate ao Fogo</strong>! Topa estudar sobre o assunto e
  //   eu te faço algumas perguntas depois, pra você tentar responder?`,
  //   response: [],
  //   type: 'text',
  //   delay: 1000,
  //   callback: false
  // },
  // {
  //   _id: 24,
  //   chat: 6,
  //   user: 1,
  //   episode: 3,
  //   sequence: 2,
  //   mission: 1,
  //   message: 'Ótima ideia! Vou ler e já volto aqui!',
  //   response: [],
  //   type: 'text',
  //   delay: 1000,
  //   callback: false
  // },
  // // Sequência 2 / Missão 2
  // {
  //   _id: 24,
  //   chat: 6,
  //   user: 2,
  //   episode: 3,
  //   sequence: 2,
  //   mission: 2,
  //   message: 'Márcia, o Lucas me contou que você ia propor um quiz pra ele sobre o Procedimento Base de Combate ao Fogo. Te convido pra propor um quiz sobre esse tema pra todos do grupo. Topa?',
  //   response: [],
  //   type: 'text',
  //   delay: 2000,
  //   callback: false
  // },
  // {
  //   _id: 24,
  //   chat: 6,
  //   user: 5,
  //   episode: 3,
  //   sequence: 2,
  //   mission: 2,
  //   message: 'Claro, Ellen! Topo, sim. Vou caprichar na pergunta!',
  //   response: [],
  //   type: 'text',
  //   delay: 1000,
  //   callback: false
  // },
  // {
  //   _id: 24,
  //   chat: 6,
  //   user: 2,
  //   episode: 3,
  //   sequence: 2,
  //   mission: 2,
  //   message: `Antes, deixa eu compartilhar o slide com o pessoal por aqui, nas mensagens
  //   do grupo, pra destacar as informações principais. Pessoal, compartilho aqui os slides sobre as funções de combate ao
  //   fogo, pra revisar o conteúdo:
  //   <ul>
  //     <li>
  //       <h4>Combatente</h4>
  //       É o primeiro tripulante que detecta o fogo, independentemente da função a bordo). Ações:
  //       <ul>
  //         <li>Alerta outros tripulantes;</li>
  //         <li>Pega o extintor mais próximo;</li>
  //         <li>Equipa-se com PBE (se necessário);</li>
  //         <li>Localiza a origem do fogo;</li>
  //         <li>Combate o fogo.</li>
  //       </ul>
  //     </li>
  //     <li>
  //       <h4>Comunicador</h4>
  //       Notifica imediatamente a tripulação técnica pelo interfone, com as seguintes informações:
  //       <ul>
  //         <li>Localização do fogo;</li>
  //         <li>Origem;</li>
  //         <li>Intensidade, densidade (cor e cheiro da fumaça);</li>
  //         <li>Progresso da ação de combate;</li>
  //         <li>Quantidade de extintores utilizados;</li>
  //         <li>Tempo desde o início da ação.</li>
  //       </ul>
  //     </li>
  //     <li>
  //       <h4>Assistente do combatente;</h4>
  //       Providencia equipamentos de combate ao fogo.<br><br>
  //       <strong>Se necessário:</strong><br>
  //       Prepara-se para substituir o combatente. Utiliza o PBE.
  //     </li>
  //     <li>
  //       <h4>Tripulante suporte.</h4>
  //       <ul>
  //         <li>Realoca passageiros e cilindros de oxigênio da área;</li>
  //         <li>Dá assistência e apoio às ações de combate;</li>
  //         <li>Acalma os passageiros.</li>
  //       </ul>
  //       <br>
  //     </li>
  //   </ul>
  //   Após qualquer ocorrência de fumaça ou fogo a bordo, um tripulante ficará responsável por monitorar a área
  //   afetada periodicamente, pelo restante do voo, e reportará a situação ao CF, que manterá o comandante atualizado.
  //   `,
  //   response: [],
  //   type: 'text',
  //   delay: 1000,
  //   callback: false
  // },
  // {
  //   _id: 24,
  //   chat: 6,
  //   user: 5,
  //   episode: 3,
  //   sequence: 2,
  //   mission: 2,
  //   message: 'Ellen, eu ganho algum bônus ou brinde se você aprovar o meu quiz pra turma?',
  //   response: [],
  //   type: 'text',
  //   delay: 2000,
  //   callback: false
  // },
  // {
  //   _id: 24,
  //   chat: 6,
  //   user: 2,
  //   episode: 3,
  //   sequence: 2,
  //   mission: 2,
  //   message: `Podemos combinar algo, sim, Márcia. Mas aposto que eu vou aprovar o quiz que você vai propor pra turma. Você, como
  //   sempre, é muito criativa! E proativa, ao se prontificar a elaborar questões pro Lucas responder. Tô gostando de ver essa turma
  //   bem animada e protagonista no curso!`,
  //   response: [],
  //   type: 'text',
  //   delay: 3000,
  //   callback: false
  // },
  // {
  //   _id: 24,
  //   chat: 6,
  //   user: 5,
  //   episode: 3,
  //   sequence: 2,
  //   mission: 2,
  //   message: `Então, vamos lá. O responsável por notificar imediatamente a tripulação técnica pelo interfone com informação sobre
  //   a origem e a localização do fogo é:</br>
  //   <ul>
  //     <li>Tripulante suporte</li>
  //     <li>Comunicador</li>
  //     <li>Combatente</li>
  //   </ul>`,
  //   response: [],
  //   type: 'text',
  //   delay: 3000,
  //   callback: false
  // },
  // {
  //   _id: 24,
  //   chat: 6,
  //   user: 1,
  //   episode: 3,
  //   sequence: 2,
  //   mission: 2,
  //   message: 'Eu sei! É o comunicador!',
  //   response: [21],
  //   type: 'text',
  //   delay: 1000,
  //   callback: false
  // },
  // {
  //   _id: 24,
  //   chat: 6,
  //   user: 5,
  //   episode: 3,
  //   sequence: 2,
  //   mission: 2,
  //   message: 'Isso mesmo, Lucas. Na mosca! Ellen, meu quiz foi aprovado? Passei no vestibular?',
  //   response: [],
  //   type: 'text',
  //   delay: 1000,
  //   callback: false
  // },
  // {
  //   _id: 24,
  //   chat: 6,
  //   user: 2,
  //   episode: 3,
  //   sequence: 2,
  //   mission: 2,
  //   message: `Aprovadíssima, Márcia! Muito protagonistas todos vocês! O que eu quero que vocês percebam é quanta organização
  //   e trabalho em equipe precisa existir em um <strong>Procedimento Base de Combate ao Fogo</strong>! Tudo na base de muita confiança um no
  //   outro e sintonia total no processo de combate.`,
  //   response: [],
  //   type: 'text',
  //   delay: 2000,
  //   callback: false
  // },
  // {
  //   _id: 24,
  //   chat: 6,
  //   user: 1,
  //   episode: 3,
  //   sequence: 2,
  //   mission: 2,
  //   message: 'Ellen, o documento está bem sistematizado. Quem escreveu esse documento certamente é profissional da aviação, não?',
  //   response: [],
  //   type: 'text',
  //   delay: 1000,
  //   callback: false
  // },
  // {
  //   _id: 24,
  //   chat: 6,
  //   user: 2,
  //   episode: 3,
  //   sequence: 2,
  //   mission: 2,
  //   message: 'Fui eu que escrevi esses slides que eu mostrei pra vocês, Lucas.',
  //   response: [22],
  //   type: 'text',
  //   delay: 1000,
  //   callback: false
  // },
  // {
  //   _id: 24,
  //   chat: 6,
  //   user: 2,
  //   episode: 3,
  //   sequence: 2,
  //   mission: 2,
  //   message: 'Obrigada, turma! Pela participação, pelo interesse e pela confiança! #Tamojunto!',
  //   response: [],
  //   type: 'text',
  //   delay: 2000,
  //   callback: false
  // },
  // // Sequência 2 / Missão 3
  // {
  //   _id: 24,
  //   chat: 6,
  //   user: 2,
  //   episode: 3,
  //   sequence: 2,
  //   mission: 3,
  //   message: 'E aí, Lucas? Gostou de aprender um pouco mais sobre as funções de combate ao fogo? Agora já está quase na hora do treinamento! Poderemos pôr tudo em prática. Teoria e prática: uma ótima combinação!',
  //   response: [],
  //   type: 'text',
  //   delay: 2000,
  //   callback: false
  // },
  // {
  //   _id: 24,
  //   chat: 6,
  //   user: 1,
  //   episode: 3,
  //   sequence: 2,
  //   mission: 3,
  //   message: `Obrigado pelos conteúdos que elaborou, Ellen. Não imaginava que você entendia tanto desse assunto. É bom saber que podemos
  //   contar uns com os outros para trocar informações, além de trabalharmos em equipe para nos tornarmos profissionais melhores. Te encontro
  //   no centro de treinamentos. Dessa vez, sem surpresas, espero!`,
  //   response: [],
  //   type: 'text',
  //   delay: 3000,
  //   callback: false
  // },

  // // # Episódio - 4
  // // Sequência 1 / Missão 1
  // {
  //   _id: 24,
  //   chat: 6,
  //   user: 2,
  //   episode: 4,
  //   sequence: 1,
  //   mission: 1,
  //   message: `Pessoal, depois do treinamento de ontem, resolvi indicar mais links para novos vídeos, sobre outro tema:
  //   <ul>
  //     <li>Como determinar a origem de um possível foco de fogo em áreas ocultas: <a className="modalvideo" data-src="ep4seq1mis1ocultas">https://www.youtube.com/watch?l=X89mJ3yXsbg</a>.</li>
  //     <li>Como determinar a origem de um possível foco de fogo em áreas fechadas: <a className="modalvideo" data-src="ep4seq1mis1fechadas">https://www.youtube.com/watch?l=X89mJ3yXsbg</a>.</li>
  //   </ul>
  //   `,
  //   response: [],
  //   type: 'text',
  //   delay: 3000,
  //   callback: false
  // },
  // {
  //   _id: 24,
  //   chat: 6,
  //   user: 5,
  //   episode: 4,
  //   sequence: 1,
  //   mission: 1,
  //   message: `Huumm… Essa é a forma correta de identificar um foco de incêndio em um local fechado e em áreas ocultas! É assim que
  //   os focos começam, então?`,
  //   response: [],
  //   type: 'text',
  //   delay: 2000,
  //   callback: false
  // },
  // {
  //   _id: 24,
  //   chat: 6,
  //   user: 1,
  //   episode: 4,
  //   sequence: 1,
  //   mission: 1,
  //   message: `Achei interessante a parte do vídeo que comenta sobre, ao sinal de fogo ou fumaça em áreas ocultas, não abrir a porta
  //   do lavatório sem antes verificar se há calor na superfície da porta. E que, para checar isso, basta usar o dorso da mão.`,
  //   response: [23],
  //   type: 'text',
  //   delay: 3000,
  //   callback: false
  // },
  // // Sequência 1 / Missão 2
  // {
  //   _id: 24,
  //   chat: 6,
  //   user: 1,
  //   episode: 4,
  //   sequence: 1,
  //   mission: 2,
  //   message: `Pessoal, hoje o dia promete! A Ellen nos contou tudo o que veremos nessa aula! Vamos falar sobre procedimentos para
  //   combater fogo e fumaça em Galley, Fornos, Bin e Lavatórios.`,
  //   response: [24],
  //   type: 'text',
  //   delay: 3000,
  //   callback: false
  // },
  // {
  //   _id: 24,
  //   chat: 6,
  //   user: 2,
  //   episode: 4,
  //   sequence: 1,
  //   mission: 2,
  //   message: `Bom dia, pessoal! Como estão? Para aquecer a todos antes das metas desse dia maravilhoso, encaminharei para vocês um
  //   vídeo de um treinamento que realizei há um tempo sobre Procedimentos de combate ao fogo em Galley, Fornos, Bin e Lavatórios. Será
  //   um ótimo preparatório desse tema tanto para meus novos alunos, quanto para vocês.`,
  //   response: [],
  //   type: 'text',
  //   delay: 3000,
  //   callback: false
  // },
  // {
  //   _id: 24,
  //   chat: 6,
  //   user: 5,
  //   episode: 4,
  //   sequence: 1,
  //   mission: 2,
  //   message: 'Caramba, Ellen! Como você é experiente com esses procedimentos! Estou empolgada para ver o vídeo!',
  //   response: [],
  //   type: 'text',
  //   delay: 1000,
  //   callback: false
  // },
  // {
  //   _id: 24,
  //   chat: 6,
  //   user: 2,
  //   episode: 4,
  //   sequence: 1,
  //   mission: 2,
  //   message: `Segue o link dele aqui:
  //   <a className="modalvideo" data-src="ep4seq1mis2">https://www.youtube.com/watch?l=X89mJ3yXsbg</a>
  //   `,
  //   response: [],
  //   type: 'text',
  //   delay: 3000,
  //   callback: false
  // },
  // {
  //   _id: 24,
  //   chat: 6,
  //   user: 5,
  //   episode: 4,
  //   sequence: 1,
  //   mission: 2,
  //   message: 'Ellen, quanta informação pra processar! Sem quiz desta vez, por favor!',
  //   response: [],
  //   type: 'text',
  //   delay: 1000,
  //   callback: false
  // },
  // {
  //   _id: 24,
  //   chat: 6,
  //   user: 2,
  //   episode: 4,
  //   sequence: 1,
  //   mission: 2,
  //   message: `Tá bom. Hoje vou poupá-los, mas amanhã darei um quiz sobre esse tema, ok? Preparem-se para a próxima etapa
  //   do curso! Vamos que vamos!`,
  //   response: [],
  //   type: 'text',
  //   delay: 2000,
  //   callback: false
  // },
  // // Sequência 1 / Missão 3
  // {
  //   _id: 24,
  //   chat: 6,
  //   user: 2,
  //   episode: 4,
  //   sequence: 1,
  //   mission: 3,
  //   message: `Pessoal, dei uma folga pra vocês na conversa anterior, mas agora quero ver se vocês dão conta e o quanto aprenderam
  //   sobre <strong>Procedimentos de combate ao fogo em Galley, Fornos, Bin e Lavatórios.</strong> Vamos a mais um quiz sobre o tema?
  //   Será que o Lucas vai levar mais essa? Tá pronto, Lucas?`,
  //   response: [],
  //   type: 'text',
  //   delay: 3000,
  //   callback: false
  // },
  // {
  //   _id: 24,
  //   chat: 6,
  //   user: 1,
  //   episode: 4,
  //   sequence: 1,
  //   mission: 3,
  //   message: 'Com certeza! Topam apostar algo comigo?',
  //   response: [25],
  //   type: 'text',
  //   delay: 2000,
  //   callback: false
  // },
  // {
  //   _id: 24,
  //   chat: 6,
  //   user: 5,
  //   episode: 4,
  //   sequence: 1,
  //   mission: 3,
  //   message: 'Tá bom. Eu topo! Vou mostrar a força e a coragem das mulheres!',
  //   response: [],
  //   type: 'text',
  //   delay: 2000,
  //   callback: false
  // },
  // {
  //   _id: 24,
  //   chat: 6,
  //   user: 2,
  //   episode: 4,
  //   sequence: 1,
  //   mission: 3,
  //   message: 'Então, vamos lá, enviei o quiz.',
  //   response: [],
  //   type: 'text',
  //   delay: 1000,
  //   callback: false
  // },
  // {
  //   _id: 24,
  //   chat: 6,
  //   user: 5,
  //   episode: 4,
  //   sequence: 1,
  //   mission: 3,
  //   message: 'Eu já sei! A pessoa não deve descarregar o extintor na base do fogo!',
  //   response: [],
  //   type: 'text',
  //   delay: 2000,
  //   callback: false
  // },
  // {
  //   _id: 24,
  //   chat: 6,
  //   user: 2,
  //   episode: 4,
  //   sequence: 1,
  //   mission: 3,
  //   message: `Ponto pra você, Márcia! Mas, como preciso ser justa, agora vou lançar mais outro quiz sobre o tema, e vamos
  //   deixar o Lucas responder.`,
  //   response: [],
  //   type: 'text',
  //   delay: 2000,
  //   callback: false
  // },
  // {
  //   _id: 24,
  //   chat: 6,
  //   user: 1,
  //   episode: 4,
  //   sequence: 1,
  //   mission: 3,
  //   message: `Parabéns, Márcia! Ih, galera, podem participar à vontade. Eu não sou fominha e quero levar todas, não! Mas é que
  //   acabo me empolgando e quero responder logo!`,
  //   response: [],
  //   type: 'text',
  //   delay: 2000,
  //   callback: false
  // },
  // {
  //   _id: 24,
  //   chat: 6,
  //   user: 2,
  //   episode: 4,
  //   sequence: 1,
  //   mission: 3,
  //   message: 'Então, vamos ao segundo quiz do dia:',
  //   response: [],
  //   type: 'text',
  //   delay: 2000,
  //   callback: false
  // },
  // {
  //   _id: 24,
  //   chat: 6,
  //   user: 1,
  //   episode: 4,
  //   sequence: 1,
  //   mission: 3,
  //   message: 'Pessoal, posso?',
  //   response: [26],
  //   type: 'text',
  //   delay: 1000,
  //   callback: false
  // },
  // {
  //   _id: 24,
  //   chat: 6,
  //   user: 1,
  //   episode: 4,
  //   sequence: 1,
  //   mission: 3,
  //   message: 'A incorreta é jogar água no lavatório. À primeira impressão, parece que é pra fazer isso, mas não é o recomendado.',
  //   response: [],
  //   type: 'text',
  //   delay: 2000,
  //   callback: false
  // },
  // {
  //   _id: 24,
  //   chat: 6,
  //   user: 2,
  //   episode: 4,
  //   sequence: 1,
  //   mission: 3,
  //   message: `Muito bem, Lucas. Está correto! Mais tarde vou enviar os últimos slides do curso; estamos caminhando para o
  //   fechamento. Vamos lá, pessoal! Nos falamos à tarde.`,
  //   response: [],
  //   type: 'text',
  //   delay: 3000,
  //   callback: false
  // },

  // // Sequência 2 / Missão 1
  // {
  //   _id: 24,
  //   chat: 6,
  //   user: 2,
  //   episode: 4,
  //   sequence: 2,
  //   mission: 1,
  //   message: `Olá, queridos comissários e comissárias, como vão? Hoje estou inspirada e tenho alguns slides para compartilhar.
  //   Uma perguntinha: Vocês saberiam o que fazer se dessem de cara com uma situação de fumaça ou fogo em baterias de lítio e PED’s?
  //   Decidi encaminhar aqui algumas informações sobre isso, para somar aos documentos e vídeos anteriores! Espero que gostem e
  //   vamos voar.`,
  //   response: [27],
  //   type: 'text',
  //   delay: 3000,
  //   callback: false
  // },
  // {
  //   _id: 24,
  //   chat: 6,
  //   user: 2,
  //   episode: 4,
  //   sequence: 2,
  //   mission: 1,
  //   message: `Aqui vai o primeiro slide:<br>
  //   <h4>Baterias de lítio – Superaquecimento</h4>
  //   <p>Superaquecimento de baterias, odor associado a fogo de origem elétrica que envolva <i>PEDs</i>, <strong>sem
  //   fogo ou fumaça visíveis:</strong></p>
  //   <ul>
  //     <li>Identificar o artigo.</li>
  //     <li>Pedir ao proprietário que desligue o equipamento (power off).</li>
  //     <li>Desconectar da fonte de energia.</li>
  //     <li>Monitorar até o término do voo.</li>
  //   </ul>
  //   <img src="${slides1}" class="image image-full mt-4" />`,
  //   response: [],
  //   type: 'text',
  //   delay: 3000,
  //   callback: false
  // },
  // {
  //   _id: 24,
  //   chat: 6,
  //   user: 2,
  //   episode: 4,
  //   sequence: 2,
  //   mission: 1,
  //   message: `E agora mais quatro slides:<br>
  //   <h4>Baterias de lítio – Superaquecimento</h4>
  //   <p>Os seguintes procedimentos são recomendados para combater o fogo em <i>celulares</i> e <i>tablets</i> com baterias de lítio,
  //   recarregáveis ou descartáveis:</p>
  //   <ul>
  //     <li>Desloque os passageiros para longe do dispositivo.</li>
  //     <li>Utilize o extintor de <i>halon</i>.</li>
  //     <li>Derrame água ou outro líquido não alcoólico sobre o equipamento (não energizado) ou na bateria, imediatamente
  //     após a extinção do fogo, a fim de resfriar.</li>
  //   </ul>
  //   <img src="${slides2}" class="image image-full mt-4" />

  //   <hr>

  //   <h4>PEDs</h4>
  //   <p>Caso algum equipamento eletrônico caia entre as poltronas:</p>
  //   <ul>
  //     <li>Pedir ao passageiro que identifique o artigo.</li>
  //     <li>Perguntar onde ele acha que o artigo possa ter caído ou onde ele possa estar.</li>
  //     <li>Perguntar se ele moveu o assento desde o momento em que perdeu o artigo de vista.</li>
  //     <li>Obter e utilizar luvas de proteção para fogo, se possível.</li>
  //     <li>Recuperar o artigo.</li>
  //   </ul>
  //   <img src="${slides3}" class="image image-full mt-4" />

  //   <hr>

  //   <h4>Armazenamento</h4>
  //   <ul>
  //     <li>Utilizar luvas de proteção.</li>
  //     <li>Obter um recipiente vazio adequado ao tamanho do PED (lixeira, balde de gelo – sem gelo).</li>
  //     <li>Submergir o equipamento afetado.</li>
  //     <li>Guardar o recipiente no lavatório e bloqueá-lo.</li>
  //     <li>Monitorar o lavatório com frequência.</li>
  //   </ul>
  //   <img src="${slides4}" class="image image-full mt-4" />

  //   <hr>

  //   <h4></h4>
  //   <ul>
  //     <li>Pode ocorrer na tela de entretenimento, na tomada de energia, na central <i>IFE</i> abaixo da poltrona.</li>
  //     <li>Informar e coordenar o acontecimento juntamente à tripulação técnica.</li>
  //     <li>Aplicar procedimento Base de combate ao fogo.</li>
  //     <li>Com a situação sob controle, manter vigilância da área afetada.</li>
  //   </ul>
  //   <img src="${slides5}" class="image image-full mt-4" />`,
  //   response: [],
  //   type: 'text',
  //   delay: 3000,
  //   callback: false
  // },
  // {
  //   _id: 24,
  //   chat: 6,
  //   user: 1,
  //   episode: 4,
  //   sequence: 2,
  //   mission: 1,
  //   message: `Então foi por isso que meu notebook quase pegou fogo! O meu celular também poderia ter ido para o espaço se eu não tivesse
  //   tirado do carregador a tempo.`,
  //   response: [28],
  //   type: 'text',
  //   delay: 3000,
  //   callback: false
  // },
  // {
  //   _id: 24,
  //   chat: 6,
  //   user: 2,
  //   episode: 4,
  //   sequence: 2,
  //   mission: 1,
  //   message: 'Pois é. Temos muita responsabilidade mesmo em nossa função e por zelar pela tripulação!',
  //   response: [],
  //   type: 'text',
  //   delay: 2000,
  //   callback: false
  // }
])
