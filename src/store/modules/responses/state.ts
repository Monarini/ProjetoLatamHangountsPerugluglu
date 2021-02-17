import emogiRindo from '../../../assets/emogi-rindo.svg'
import emogiAssustado from '../../../assets/emogi-assustado.svg'
import goodbye1 from '../../../assets/gifs/goodbye1.gif'
import goodbye2 from '../../../assets/gifs/goodbye2.gif'
import Immutable from 'seamless-immutable'

export const INITIAL_STATE = Immutable([
  {
    _id: 1,
    message: 'Aqui tbm... sem nenhuma dúvida.',
    type: 'text',
    callback: false
  },
  {
    _id: 2,
    message: 'Chamou para o desafio!',
    type: 'text',
    callback: false
  },
  {
    _id: 3,
    message: 'Deu para perceber que precisa ser um trabalho em equipe.',
    type: 'text',
    callback: false
  },
  {
    _id: 4,
    message: 'Sem dúvida, além de ter mais pessoas para ajudar a acalmar os passageiros.',
    type: 'text',
    callback: false
  },
  {
    _id: 5,
    message: 'Pedro, você tava no caso do bebê engasgado?',
    type: 'text',
    callback: false
  },
  //
  {
    _id: 6,
    message: 'Bom saber! Vou ficar atento a tudo isso, caso algum passageiro se engasgue no meu voo. E lembrar de nunca dar um tapa nas costas.',
    type: 'text',
    callback: false
  },
  {
    _id: 7,
    message: 'Eu lembrei que assisti algum vídeo sobre os procedimentos de trauma. Você tem aí, Pedro?',
    type: 'text',
    callback: false
  },
  {
    _id: 8,
    message: `Sim! Com certeza. Pelo que entendi, pacientes com prioridade 1 são os que apresentam lesões severas, risco imediato de perder a vida. Certo?  <img src="${emogiAssustado}" class="emogi" /> `,
    type: 'text',
    callback: false
  },
  {
    _id: 9,
    message: 'Que exemplo, Lari! Valeu por anotar tudo. Estou copiando seu resumo agora mesmo... rsrs',
    type: 'text',
    callback: false
  },
  {
    _id: 10,
    message: 'Eu passei uma situação parecida com o caso da criança. Um garotinho de uns cinco anos passou mal depois de comer e botou tudo para fora.',
    type: 'text',
    callback: false
  },
  {
    _id: 11,
    message: 'Sim! Estava amarelo e olhei no relatório para ver se tinha o que precisava para o atendimento.',
    type: 'text',
    callback: false
  },
  {
    _id: 12,
    message: 'Sim! Cada detalhe importa. Pelo que vi, o aparelho analisa o ritmo cardíaco e sinaliza quando o choque deve ser dado. É isso mesmo, Pedro?',
    type: 'text',
    callback: false
  },
  // {
  //   _id: 13,
  //   message: '<strong>COMBUSTÍVEL;<br> COMBURENTE;<br> CALOR e a REAÇÃO QUÍMICA EM CADEIA.</strong>',
  //   type: 'text',
  //   callback: false
  // },
  // {
  //   _id: 14,
  //   message: `O curso ainda não acabou, quem sabe você dá a volta por cima. Kkkkk...<img src="${emogiRindo}" class="emogi" />`,
  //   type: 'text',
  //   callback: false
  // },
  // {
  //   _id: 15,
  //   message: 'Olha aí, pessoal. A Ellen mandou o link do vídeo que mostra, entre outras coisas, os tipos de extintores . Me interesso muito nesse assunto! Dá pra aprender o que falamos antes, sobre como começa o fogo e mesmo sobre a fisiologia do fogo. Vocês chegaram a ver? O vídeo se chama "Fisiologia/química do fogo"; ela passou como material complementar do curso!',
  //   type: 'text',
  //   callback: false
  // },
  // {
  //   _id: 16,
  //   message: 'Lucas, me conta depois o que achou do conteúdo.',
  //   type: 'text',
  //   callback: false
  // },
  // {
  //   _id: 17,
  //   message: 'Puxa, bacana, Ellen! Com tanto conteúdo interessante, vou depois compartilhar ideias com a turma!',
  //   type: 'text',
  //   callback: false
  // },
  // {
  //   _id: 18,
  //   message: 'Achei legal distinguir dois pontos entre as classes de fogo A e B. Em ambas, o material queima na superfície; a diferença é que na classe A sobram resíduos após a queima; na classe B, não. ',
  //   type: 'text',
  //   callback: false
  // },
  // {
  //   _id: 19,
  //   message: 'Ótima ideia! Viu só? Aprender e fazer cursos traz mais essa vantagem!',
  //   type: 'text',
  //   callback: false
  // },
  // {
  //   _id: 20,
  //   message: 'Puxa! Deu a volta por cima mesmo! Valeu, mano! Quando quer ganhar a sobremesa? Vamos marcar o dia?',
  //   type: 'text',
  //   callback: false
  // },
  // {
  //   _id: 21,
  //   message: 'Lucas, você nem me deu chance de responder. Foi mais rápido! Você é ligeirinho e está impossível! Já te devo uma sobremesa; melhor parar de apostar coisas com você.',
  //   type: 'text',
  //   callback: false
  // },
  // {
  //   _id: 22,
  //   message: 'Não é à toa que você foi a escolhida para ser a nossa tutora! A nossa empresa sabe o que faz e cada passo que dá!',
  //   type: 'text',
  //   callback: false
  // },
  // {
  //   _id: 23,
  //   message: 'Viram só? Aviação é conhecimento e aprendizado!',
  //   type: 'text',
  //   callback: false
  // },
  // {
  //   _id: 24,
  //   message: 'E ela disse que, além de exercer a função de tutora de comissários de voo, hoje ela vai dar uma aula em solo para novos comissários!',
  //   type: 'text',
  //   callback: false
  // },
  // {
  //   _id: 25,
  //   message: 'Eu tô fora! Ligeirinho do jeito que você está e, como sempre, arrebentando, não quero apostar mais nada! Márcia, você não tá a fim de apostar com o Lucas? A Ellen te elogiou outro dia mesmo! Pode ser que consiga desbancar o Lucas.',
  //   type: 'text',
  //   callback: false
  // },
  // {
  //   _id: 26,
  //   message: 'À vontade! É todo seu!',
  //   type: 'text',
  //   callback: false
  // },
  // {
  //   _id: 27,
  //   message: 'Oba, Ellen! Pode mandar!',
  //   type: 'text',
  //   callback: false
  // },
  // {
  //   _id: 28,
  //   message: 'Ellen, foi um dia cheinho de novidades nesse grupo, hein!? Você é bem inovadora, traz conteúdos que a gente nem imagina que possam fazer parte do mundo da aviação. Quanta coisa pra aprender! E são muitos detalhes e procedimentos.',
  //   type: 'text',
  //   callback: false
  // }
])
