# Além do Preconceito

Exposição educativa em português sobre racismo, transfobia, misoginia e LGBTfobia.
Página única com navegação por seções, fotografias com créditos, animações por rolagem
e um quiz de quatro situações com feedback e reinício.

## Executar

Requisitos: Node.js 22.12 ou superior e npm.

```sh
npm ci
npm run dev
```

Abra o endereço exibido no terminal.

## Verificar e publicar

```sh
npm test
npm run lint
npm run build
npm run preview
```

O build gera a pasta `dist`, pronta para hospedagem estática. Não exige backend.
Use `npm run format` para formatar os arquivos.

## Organização

- `index.html`: idioma, metadados e fontes.
- `src/App.jsx`: composição da página.
- `src/components/site`: seções e componentes usados pela exposição.
- `src/content/data.jsx`: navegação e fotografias com fontes e licenças.
- `src/content/people.jsx`: oito biografias com fontes, divididas em quatro capítulos.
- `src/components/site/StoryChapter.jsx`: narrativa por rolagem, troca de fotografias e parallax.
- `src/assets/personagens`: retratos locais e registro de créditos e licenças.
- `src/lib/motion.jsx`: animações com suporte à preferência por movimento reduzido.
- `src/Base.module.css`: estilos de base e variáveis do tema.
- `*.module.css`: estilos locais de cada componente.
- `src/test`: testes da página, do menu e do quiz.

Os retratos ficam em `src/assets/personagens`; os registros documentais, em `public/photos`.
Créditos, links de origem e licenças, quando disponíveis, estão na página.
Os oito personagens possuem fotografias reais locais. Os retratos de Dandara dos
Santos e George Floyd são reproduções de arquivo publicadas em fontes jornalísticas,
com direitos reservados, sem atribuição de licença livre. A fotografia de homenagem
a Floyd continua identificada como registro documental.
As fontes tipográficas são carregadas do Google Fonts, com alternativas locais.
O componente de foto exibe uma alternativa textual se uma imagem falhar.
Ao atualizar dados ou imagens, confira a fonte, o ano, a identidade da pessoa
retratada e a licença de uso.

Abaixo de 1024px, as histórias usam leitura vertical com uma fotografia por relato.
No desktop, imagens fixas, máscaras e zoom acompanham a rolagem. Com movimento
reduzido, todo o conteúdo permanece legível e a troca animada é desativada.
