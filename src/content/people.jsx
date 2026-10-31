import { photos } from "./data";

export const people = [
  {
    id: "vinicius-junior",
    name: "Vinícius Júnior",
    theme: "racismo",
    photo: photos.vini,
    tag: "Racismo no futebol",
    meta: "São Gonçalo, Brasil · Futebol e educação",
    title: "O talento ocupa o campo. A voz ocupa o mundo.",
    bio: "Formado no Flamengo, Vinícius Júnior chegou ao Real Madrid em 2018. Sua trajetória aproxima o futebol de elite das experiências de jovens negros e periféricos que também querem ocupar esses espaços.",
    context:
      "Na Espanha, foi alvo de ataques racistas, incluindo os insultos no estádio de Mestalla em maio de 2023. Sua denúncia pública expôs a persistência do racismo no esporte e a necessidade de responsabilização.",
    impact:
      "Em junho de 2024, três torcedores foram condenados pelos ataques em Valência. Ao se posicionar e apoiar a educação por meio do Instituto Vini Jr., o jogador mostra que representatividade também é abrir caminhos.",
    sources: [
      {
        label: "Real Madrid · condenação em Valência",
        url: "https://www.realmadrid.com/en-US/news/club/announcements/comunicado-oficial-10-06-2024",
      },
      { label: "Instituto Vini Jr.", url: "https://institutovinijr.org.br/" },
    ],
  },
  {
    id: "george-floyd",
    name: "George Floyd",
    theme: "racismo",
    photo: photos.floydPortrait,
    documentary: photos.floyd,
    tag: "Violência policial e justiça racial",
    meta: "1973–2020 · Minneapolis, Estados Unidos",
    title: "Uma vida que não cabe em um símbolo.",
    bio: "George Floyd era um homem negro de 46 anos, pai e trabalhador. Sua história deve ser lembrada para além das imagens de sua morte: havia uma pessoa, vínculos e uma vida antes de se tornar um símbolo internacional.",
    context:
      "Em 25 de maio de 2020, foi morto durante uma abordagem policial em Minneapolis. O policial Derek Chauvin manteve o joelho sobre seu pescoço por mais de nove minutos e foi condenado por homicídio em 2021.",
    impact:
      "Sua morte desencadeou protestos internacionais e ampliou a mobilização do Black Lives Matter contra o racismo e a violência policial. A repercussão reforçou o debate sobre responsabilidade das instituições e proteção de vidas negras.",
    sources: [
      {
        label: "Procuradoria de Minnesota · responsabilização",
        url: "https://www.ag.state.mn.us/Office/Communications/2022/07/07_Chauvin.asp",
      },
      { label: "Nações Unidas · protestos e racismo", url: "https://www.un.org/en/node/149366" },
    ],
  },
  {
    id: "erika-hilton",
    name: "Erika Hilton",
    theme: "transfobia",
    photo: photos.erika,
    tag: "Identidade, direitos e representação",
    meta: "São Paulo, Brasil · Política e direitos humanos",
    title: "Existir. Resistir. Decidir os próprios caminhos.",
    bio: "Erika Hilton é uma mulher trans e travesti, negra e defensora dos direitos humanos. Sua trajetória inclui exclusão familiar e situação de rua, experiências que também atravessam o debate público sobre acolhimento e oportunidades.",
    context:
      "Eleita vereadora de São Paulo em 2020 e deputada federal em 2022, ocupa espaços de decisão historicamente fechados a pessoas trans. A presença política não elimina a transfobia, mas amplia a possibilidade de enfrentá-la institucionalmente.",
    impact:
      "Sua atuação articula direitos das pessoas trans, combate à discriminação e proteção de populações vulnerabilizadas. Representatividade é também participar da elaboração de políticas públicas, sem que a identidade de gênero impeça o exercício da cidadania.",
    sources: [
      {
        label: "Câmara dos Deputados · perfil parlamentar",
        url: "https://www.camara.leg.br/deputados/220645",
      },
      { label: "Erika Hilton · trajetória", url: "https://erikahilton.com.br/sobre-a-deputada/" },
    ],
  },
  {
    id: "dandara-dos-santos",
    name: "Dandara dos Santos",
    theme: "transfobia",
    photo: photos.dandara,
    tag: "Memória, dignidade e proteção",
    meta: "Fortaleza, Brasil · Memória e direitos",
    title: "Seu nome merece memória. Sua vida merecia proteção.",
    bio: "Dandara dos Santos era uma travesti que vivia em Fortaleza. Lembrá-la com respeito significa reconhecer sua humanidade e não reduzir sua existência à violência que sofreu.",
    context:
      "Dandara foi assassinada em 15 de fevereiro de 2017. O caso provocou repúdio de instituições de direitos humanos e mobilização da sociedade civil contra a transfobia. Esta página não reproduz imagens da violência.",
    impact:
      "Sua história evidencia a urgência de proteção, acesso a direitos e responsabilização por crimes contra pessoas trans e travestis. Memória e mobilização precisam se traduzir em condições concretas para viver com segurança e dignidade.",
    sources: [
      {
        label: "Ministério dos Direitos Humanos · nota pública de 2017",
        url: "https://www.gov.br/mdh/pt-br/sdh/noticias/2017/marco/nota-publica-repudia-o-assassinato-da-travesti-dandara-dos-santos/",
      },
      {
        label: "Defensoria do Ceará · mobilização por direitos",
        url: "https://www.defensoria.ce.def.br/noticia/defensoria-participa-de-reuniao-com-governador-apos-manifestacao-do-movimento-lgbt/",
      },
    ],
  },
  {
    id: "maria-da-penha",
    name: "Maria da Penha",
    theme: "misoginia",
    photo: photos.maria,
    tag: "Enfrentamento à violência doméstica",
    meta: "Fortaleza, Brasil · Ciência, justiça e proteção",
    title: "Uma luta por justiça que mudou a proteção às mulheres.",
    bio: "Maria da Penha Maia Fernandes é farmacêutica bioquímica. Em 1983, sofreu duas tentativas de assassinato pelo então marido; uma delas a deixou paraplégica. Sua busca por justiça se tornou referência no enfrentamento à violência doméstica.",
    context:
      "Depois de uma longa trajetória de denúncia e mobilização, seu caso contribuiu para expor a omissão do Estado brasileiro diante da violência contra as mulheres. A Lei nº 11.340, de 7 de agosto de 2006, recebeu seu nome.",
    impact:
      "A Lei Maria da Penha estabelece mecanismos de prevenção, proteção e enfrentamento à violência doméstica e familiar. Sua história recorda que a violência não é um assunto privado: mulheres têm direito a acolhimento, segurança e acesso à justiça.",
    sources: [
      {
        label: "Instituto Maria da Penha · biografia",
        url: "https://www.institutomariadapenha.org.br/quem-e-maria-da-penha.html",
      },
      {
        label: "Lei nº 11.340/2006 · texto oficial",
        url: "https://www.planalto.gov.br/ccivil_03/_ato2004-2006/2006/lei/l11340.htm",
      },
    ],
  },
  {
    id: "malala-yousafzai",
    name: "Malala Yousafzai",
    theme: "misoginia",
    photo: photos.malala,
    tag: "Direito das meninas à educação",
    meta: "Paquistão · Educação e igualdade de direitos",
    title: "O direito de aprender não deveria exigir coragem.",
    bio: "Malala Yousafzai cresceu no vale do Swat, no Paquistão, e defendeu o direito das meninas de frequentar a escola. Sua voz se tornou conhecida em um contexto de restrições à educação feminina impostas pelo Talibã.",
    context:
      "Em 2012, sofreu um atentado quando voltava da escola. Sobreviveu e continuou sua atuação. Em 2014, recebeu o Prêmio Nobel da Paz, compartilhado com Kailash Satyarthi, pela defesa dos direitos das crianças e da educação.",
    impact:
      "Cofundadora do Malala Fund, atua internacionalmente para que meninas tenham acesso à educação. Sua trajetória mostra que a discriminação de gênero também se manifesta quando limita o estudo, a autonomia e as possibilidades de futuro.",
    sources: [
      {
        label: "Prêmio Nobel · fatos e trajetória",
        url: "https://www.nobelprize.org/prizes/peace/2014/yousafzai/facts/",
      },
      {
        label: "Nações Unidas · mensageira da paz",
        url: "https://www.un.org/en/messengers-peace/malala-yousafzai",
      },
    ],
  },
  {
    id: "gloria-groove",
    name: "Gloria Groove",
    theme: "lgbt",
    photo: photos.gloria,
    tag: "Arte drag e representatividade",
    meta: "São Paulo, Brasil · Música e expressão artística",
    title: "Uma voz que expande quem pode ocupar o palco.",
    bio: "Gloria Groove construiu uma trajetória que atravessa o rap, o pop e o pagode. Sua arte drag reúne música, figurino e performance, ampliando os modos de se expressar nos palcos e na cultura brasileira.",
    context:
      "Em entrevistas, relata preconceitos e fala sobre as barreiras para artistas LGBTQIA+ na música. O reconhecimento artístico convive com disputas por espaço e com expectativas que tentam limitar corpos, vozes e expressões de gênero.",
    impact:
      "Sua presença oferece referências culturais a jovens que nem sempre se veem representados. Drag queen é uma expressão artística: a performance não determina, por si só, a identidade de gênero ou a orientação sexual de quem a realiza.",
    sources: [
      {
        label: "CBN · entrevista com Gloria Groove",
        url: "https://cbn.globoradio.globo.com/media/audio/439069/gloria-groove-ser-voce-mesmo-vale-muito-pena-e-o-d.htm",
      },
      {
        label: "CNN Brasil · representatividade nos festivais",
        url: "https://www.cnnbrasil.com.br/pop/gloria-groove-fala-de-mariah-carey-e-a-falta-de-artistas-lgbt-no-the-town/",
      },
    ],
  },
  {
    id: "pabllo-vittar",
    name: "Pabllo Vittar",
    theme: "lgbt",
    photo: photos.pabllo,
    tag: "Visibilidade e liberdade de expressão",
    meta: "Brasil · Música e cultura LGBTQIA+",
    title: "Visibilidade é poder existir em voz alta.",
    bio: "Pabllo Vittar levou a arte drag e ritmos brasileiros a grandes públicos, combinando pop, forró e outras referências musicais. Sua trajetória conecta produção artística, cultura popular e visibilidade LGBTQIA+.",
    context:
      "O sucesso não impediu críticas atravessadas por preconceito nem barreiras para ocupar espaços da indústria musical. Em entrevistas, Pabllo fala sobre essas experiências e sobre a liberdade de construir sua expressão artística.",
    impact:
      "Sua influência amplia o repertório de quem pode ser protagonista na cultura. Respeitar essa trajetória inclui não presumir identidade de gênero ou orientação sexual a partir da aparência, do nome artístico ou do fato de fazer drag.",
    sources: [
      {
        label: "Billboard Brasil · entrevista e trajetória",
        url: "https://billboard.com.br/pabllo-vittar-diz-ter-tentado-transicao-de-genero-ninguem-escolhe-ser-nada/",
      },
      {
        label: "CNN Brasil · debate sobre espaços na música",
        url: "https://www.cnnbrasil.com.br/pop/gloria-groove-fala-de-mariah-carey-e-a-falta-de-artistas-lgbt-no-the-town/",
      },
    ],
  },
];

export const chapters = [
  {
    id: "racismo",
    name: "Racismo",
    color: "#B65A3C",
    word: "Cor",
    title: "Da arquibancada às ruas.",
    intro:
      "O racismo atravessa o esporte e as instituições. Denunciar, responsabilizar e transformar também fazem parte dessas histórias.",
  },
  {
    id: "transfobia",
    name: "Transfobia",
    color: "#7659A6",
    word: "Ser",
    title: "Entre a exclusão e a conquista de espaços.",
    intro:
      "Erika Hilton e Dandara dos Santos revelam perspectivas diferentes: o direito de participar das decisões e a urgência de proteger a vida.",
  },
  {
    id: "misoginia",
    name: "Misoginia",
    color: "#C25776",
    word: "Voz",
    title: "Viver sem violência. Aprender sem barreiras.",
    intro:
      "Da violência doméstica à exclusão educacional, a desigualdade de gênero limita direitos. A resistência também transforma leis e futuros.",
  },
  {
    id: "lgbt",
    name: "Homofobia e LGBTfobia",
    color: "#25877F",
    word: "Amar",
    title: "A arte de existir sem pedir licença.",
    intro:
      "Gloria Groove e Pabllo Vittar ampliam a visibilidade LGBTQIA+ pela música. Arte drag, identidade de gênero e orientação sexual são dimensões diferentes.",
  },
].map((chapter) => ({
  ...chapter,
  people: people.filter((person) => person.theme === chapter.id),
}));
