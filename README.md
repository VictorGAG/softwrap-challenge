![GitHub](https://img.shields.io/github/license/VictorGAG/softwrap-challenge?color=%23912CEE&style=for-the-badge)

<br />
<p align="center">
  <a href="https://github.com/VictorGAG/softwrap-challenge">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>
  
  <h3 align="center">Desafio SoftWrap</h3>
</p>


<details open="open">
  <summary>--Conteúdo--</summary>
  <ol>
    <li>
      <a href="#sobre-o-projeto">Sobre o Projeto</a>
      <ul>
        <li><a href="#relátorio">Relátorio</a></li>
        <li><a href="#tecnologias-usadas">Tecnologias Usadas</a></li>
      </ul>
    </li>
    <li>
      <a href="#iniciar-projeto">Iniciar o projeto</a>
      <ul>
        <li><a href="#pré-requisitos">Pré Requisitos</a></li>
        <li><a href="#instalação">Instalação</a></li>
      </ul>
    </li>
    <li><a href="#hospedagem">Hospedagem</a></li>
    <li><a href="#jornada">Jornada</a></li>
    <li><a href="#prints">Prints</a></li>
  </ol>
</details>

---

## Sobre o Projeto

![imagem](https://github.com/VictorGAG/softwrap-challenge/blob/main/images/Screenshot_1.jpg)

Esse é o meu projeto para vaga de emprego na softwrap, onde o desafio era criar uma tabela que os dados podessem ser adicionados e editados livremente!

### Relátorio

* Bom, a primeira decisão que eu tive foi usar o TailWind mesmo sem nunca ter estudado ele a fundo, já que no documento dizia que ganhava mais pontos. Então me desafiei a estudar o TailWind enquanto fazia o projeto e o resultado não foi dos piores, apesar de eu ter que largar meu queridinho styled-components.
Em seguida decidi seguir o pattern do figma para realizar o projeto assim poderia me basear nas localizações e como ficaria o responsivo.
* Já com o banco de dados tive mais facilidade, pois já estava acostumado a usar em outras aplicações. Minha unica dificuldade foi com a páginação, gastei bastante tempo tentando fazer-la com um resultado que me agradasse.
* As funcionalidades de registro e editar, foram feitas com a ideia de ser bem simples e amigavel para todos os úsuarios. Por isso usei o Input Mask no CPF, para que não ficasse aquela confusão de com ponto, sem ponto, com traço, sem traço, facilitando até para hora de armazenar os dados no banco.
* Utilizei do React Router, para que o fluxo entre as páginas fosse mais suave e não necessitasse de um carregamento das mesmas.
* Por ultimo utilizei do Material Ui para adicionar alguns icones sem precisar copiar um svg enorme da internet.

---

### Tecnologias Usadas

- **[Eslint](https://eslint.org/)**
- **[Firebase](https://firebase.google.com/)**
- **[React](https://pt-br.reactjs.org/)**
- **[React Router Dom](https://reactrouter.com/)**
- **[React Input Mask](https://github.com/sanniassin/react-input-mask)**
- **[TailWind](https://tailwindcss.com/)**
- **[Craco](https://github.com/gsoft-inc/craco)**
- **[Material Ui](https://material-ui.com/pt/https://github.com/gsoft-inc/craco)**

---

## Iniciar Projeto

Um pequeno tutorial de como baixar e inicializar uma cópia desse repositório no seu computador.

### Pré Requisitos

Os pré requisitos são apenas o próprio GIT, ter instalado um gerenciador de pacotes como "npm" ou "yarn" e ter instalado um editor de texto como no meu caso o Visual Studio Code.

* GIT
* NPM
* YARN
* VISUAL STUDIO CODE

### Instalação

1. Primeiramente você deve clonar(fazer uma cópia) do projeto com o comando.
   ```sh
   git clone https://github.com/VictorGAG/softwrap-challenge
   cd softwrap-challenge
   ```
2. Depois deve instalar todos os pacotes com o npm ou yarn
   ```sh
   npm install
      
   yarn install
   ```
3. Por fim deve rodar o programa usando
   ```sh
   npm start
   
   yarn start
   ```
---

### Hospedagem

Foi feito deploy com o firebase, você pode conferir no link a seguir: <br />
https://tabling-challenge.web.app

---
   
### Jornada
 
- [x] Initialize github
- [x] Do the navbar
- [x] Do the table
- [x] Do the register  
- [x] Initialize Firebase
- [x] Connect register to Firebase
- [x] Do alert sucess and error for register
- [x] Do exclude people from table
- [x] Do exchange people info from table
- [x] Do alert sucess and error for edit
- [x] Do pagination for table
- [x] Styling
- [x] Deploy aplication
- [x] Test everything
- [x] Translate everything
- [x] Finalize README and send the challenge

---

### Prints

![imagem](https://github.com/VictorGAG/softwrap-challenge/blob/main/images/Screenshot_2.jpg)
![imagem](https://github.com/VictorGAG/softwrap-challenge/blob/main/images/Screenshot_3.jpg)
![imagem](https://github.com/VictorGAG/softwrap-challenge/blob/main/images/Screenshot_4.jpg)
![imagem](https://github.com/VictorGAG/softwrap-challenge/blob/main/images/Screenshot_5.jpg)
![imagem](https://github.com/VictorGAG/softwrap-challenge/blob/main/images/Screenshot_6.jpg)

---
