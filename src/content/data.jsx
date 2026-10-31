import dandaraPhoto from "../assets/personagens/dandara.jpg";
import floydPhoto from "../assets/personagens/george-floyd.jpg";
import viniPhoto from "../assets/personagens/vini.jpg";
import gloriaPhoto from "../assets/personagens/gloria.jpg";
import pablloPhoto from "../assets/personagens/pabllo.jpg";
import erikaPhoto from "../assets/personagens/erika.jpg";
import mariaPhoto from "../assets/personagens/maria.jpg";
import malalaPhoto from "../assets/personagens/malala.jpg";

export const photos = {
  erika: {
    src: erikaPhoto,
    name: "Erika Hilton",
    alt: "Erika Hilton no seminário Elas Querem Igualdade, na Câmara dos Deputados, em 2023",
    credit: "Vinicius Loures / Câmara dos Deputados",
    license: "CC BY 3.0",
    source:
      "https://commons.wikimedia.org/wiki/File:%22Elas_Querem_Igualdade%22_com_Erika_Hilton_1_(Erika_Hilton).jpg",
    position: "50% 25%",
  },
  dandara: {
    src: dandaraPhoto,
    name: "Dandara dos Santos",
    alt: "Retrato de Dandara dos Santos, sentada em ambiente interno, de seu arquivo pessoal",
    credit: "Arquivo pessoal / reprodução via Diario de Pernambuco",
    rights: "Direitos reservados",
    source:
      "https://www.diariodepernambuco.com.br/noticia/brasil/2017/03/justica-do-ceara-acata-denuncia-e-cinco-acusados-sao-presos-no-caso-da.html",
    position: "50% 30%",
  },
  floydPortrait: {
    src: floydPhoto,
    name: "George Floyd",
    alt: "George Floyd usando um casaco escuro diante de uma parede de tijolos",
    credit: "Foto cedida por Ben Crump / reprodução via MPR News",
    rights: "Direitos reservados",
    source:
      "https://www.mprnews.org/story/2020/05/26/friends-family-of-man-who-died-in-mpd-custody-remember-big-floyd",
    position: "50% 25%",
  },
  maria: {
    src: mariaPhoto,
    name: "Maria da Penha",
    alt: "Maria da Penha em novembro de 2018",
    credit: "Cesar Itiberê / Presidência da República",
    license: "CC BY 2.0",
    source:
      "https://commons.wikimedia.org/wiki/File:Maria_da_Penha_em_novembro_de_2018_(cropped_2).jpg",
    position: "50% 25%",
  },
  malala: {
    src: malalaPhoto,
    name: "Malala Yousafzai",
    alt: "Malala Yousafzai na palestra anual Nelson Mandela, em 2023",
    credit: "flowcomm / Wikimedia Commons",
    license: "CC BY 2.0",
    source: "https://commons.wikimedia.org/wiki/File:Malala_Yousafzai_2023_portrait_2x3.jpg",
    position: "50% 20%",
  },

  vini: {
    src: viniPhoto,
    alt: "Vinícius Júnior com a camisa da seleção brasileira em campo",
    credit: "Berlination / Wikimedia Commons",
    license: "CC BY-SA 4.0",
    source:
      "https://commons.wikimedia.org/wiki/File:Vin%C3%ADcius_J%C3%BAnior_Brazil_V_Morocco_13_June_2026-207.jpg",
    position: "50% 20%",
  },
  floyd: {
    src: "/photos/floyd.jpg",
    alt: "Fotografia de um retrato de George Floyd em homenagem durante os protestos de 2020",
    credit: "Bryan Alexander / Wikimedia Commons",
    license: "CC BY 2.0",
    source: "https://commons.wikimedia.org/wiki/File:Floyd_portrait_(49999239916).jpg",
    position: "50% 25%",
  },
  gloria: {
    src: gloriaPhoto,
    alt: "Gloria Groove durante participação no programa Sai da Caixa, do UOL",
    credit: "Lucas Ferretti / UOL, via Wikimedia Commons",
    license: "CC BY 2.0",
    source:
      "https://commons.wikimedia.org/wiki/File:07072021_-_Gloria_Groove_no_Sai_da_Caixa_-_UOL.jpg",
    position: "50% 25%",
  },
  pabllo: {
    src: pablloPhoto,
    alt: "Pabllo Vittar se apresentando no Festival Sensacional em 2020",
    credit: "Bruno Figueiredo / Wikimedia Commons",
    license: "CC BY-SA 2.0",
    source:
      "https://commons.wikimedia.org/wiki/File:Pabllo_Vittar_no_Festival_Sensacional_2020.jpg",
    position: "50% 25%",
  },
  rally: {
    src: "/photos/rally.jpg",
    alt: "Manifestantes em ato por George Floyd na Grand Army Plaza, Nova York, em 2020",
    credit: "Rhododendrites / Wikimedia Commons",
    license: "CC BY-SA 4.0",
    source:
      "https://commons.wikimedia.org/wiki/File:George_Floyd_rally_in_Grand_Army_Plaza_(02839).jpg",
    position: "50% 40%",
  },
};
export const nav = [
  { id: "inicio", label: "Início" },
  { id: "sobre", label: "Sobre" },
  { id: "temas", label: "Temas" },
  { id: "historias", label: "Histórias" },
  { id: "dados", label: "Dados" },
  { id: "reflexao", label: "Reflexão" },
];

export const photoCredits = Object.entries(photos).filter(([, photo]) => photo.src);
export const licenseUrl = (license) =>
  ({
    "CC BY 2.0": "https://creativecommons.org/licenses/by/2.0/",
    "CC BY 3.0": "https://creativecommons.org/licenses/by/3.0/",
    "CC BY-SA 2.0": "https://creativecommons.org/licenses/by-sa/2.0/",
    "CC BY-SA 4.0": "https://creativecommons.org/licenses/by-sa/4.0/",
  })[license];
