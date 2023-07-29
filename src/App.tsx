import StudentCard from "./components/StudentCard"
import Footer from "./components/Footer"
import Header from "./components/Header"

function App() {
  return (
    <>
      <Header />
      <div className="ml-56 mt-2">
        <img src="src/assets/photos/repro-4.png" alt=""  />
        </div>
      <div className="mx-56 my-4">
        <h1 className="mb-4">Confira os rostinhos e os hobbies das mulheres que estão reprogramando o mundo na primeira turma do <strong>Educa&#123;Devas&#125;</strong>:</h1>

        <StudentCard nome="Nathalia Caldas (Facilitadora)" hobby="Brincar/Passear com meu filho" fotoUrl="src/assets/photos/Nathalia_Caldas.jpeg" />

        <div className="grid grid-cols-4 gap-4">
          <div className="my-7 grid grid-cols-1 gap-4">
            <StudentCard nome="Aline Andrade" hobby="Cantar e tocar violão" fotoUrl="src/assets/photos/Aline_Andrade.jpeg" />
            <StudentCard nome="Amanda Bacelli" hobby="Fazer artes na bíblia" fotoUrl="src/assets/photos/Amanda.jpeg" />
            <StudentCard nome="Ana Paula Lima" hobby="" fotoUrl="src/assets/photos/ana_paula.jpeg" />
            <StudentCard nome="Anna Maria Rodrigues" hobby="Flamengo" fotoUrl="src/assets/photos/Anna_Maria.jpeg" />
            <StudentCard nome="Aryanne Silva" hobby="" fotoUrl="src/assets/photos/aryanne.jpeg" />
            <StudentCard nome="Beatriz Ramerindo" hobby="Assistir anime e programar" fotoUrl="src/assets/photos/beatriz_ramerindo.jpeg" />
            <StudentCard nome="Camila Ribeiro" hobby='Pesquisar IAs, cozinhar, codar e fazer comprinhas de breboutes' fotoUrl="src/assets/photos/Camila_Ribeiro.jpeg" />
            <StudentCard nome="Carolina Higo" hobby="" fotoUrl="src/assets/photos/carolina_higo.jpeg" />
          </div>

          <div className="my-7 grid grid-cols-1 gap-4">
            <StudentCard nome="Daniele Junior" hobby="" fotoUrl="src/assets/photos/daniele.jpeg" />
            <StudentCard nome="Darielly Santos" hobby="" fotoUrl="src/assets/photos/darielly.jpeg" />
            <StudentCard nome="Edilene Lopes do Rosario" hobby="Ler, passear com meu filho e ver séries" fotoUrl="src/assets/photos/Edilene.jpg" />
            <StudentCard nome="Érika Lima" hobby="Dançar axé" fotoUrl="src/assets/photos/Erika_Lima.jpeg" />
            <StudentCard nome="Gabriela Valente" hobby="Abraçar gatinhos" fotoUrl="src/assets/photos/Gabriela_Valente.jpeg" />
            <StudentCard nome="Glória Teodoro" hobby="Andar de bike e cozinhar comida gostosa" fotoUrl="src/assets/photos/gloria.png" />
            <StudentCard nome="Janaina Lopes" hobby="Remar" fotoUrl="src/assets/photos/janaina_lopes.jpeg" />
            <StudentCard nome="Jaqueline Menezes" hobby="Ler e dormir" fotoUrl="src/assets/photos/Jaqueline_Menezes.jpeg" />
          </div>

          <div className="my-7 grid grid-cols-1 gap-4">
            <StudentCard nome="Joseane Guedes" hobby="Trilha, praia e cachoeira" fotoUrl="src/assets/photos/jose.jpeg" />
            <StudentCard nome="Juliana Kim" hobby="" fotoUrl="src/assets/photos/juliana.jpeg" />
            <StudentCard nome="Juliane Monteiro" hobby="Cozinhar ouvindo podcast e andar de bike" fotoUrl="src/assets/photos/Juliane.jpeg" />
            <StudentCard nome="Larissa Monteiro" hobby="" fotoUrl="src/assets/photos/larissa_monteiro.jpeg" />
            <StudentCard nome="Larissa Oliveira" hobby="Fazer trilhas e andar de bike" fotoUrl="src/assets/photos/larissa_oliveira.jpeg" />
            <StudentCard nome="Letícia Lima" hobby="Fazer trilha" fotoUrl="src/assets/photos/Leticia_Lima.jpeg" />
            <StudentCard nome="Lilian Dias" hobby="" fotoUrl="src/assets/photos/lilian_dias.jpeg" />
            <StudentCard nome="Maria Kauffmann" hobby="Ver filmes" fotoUrl="src/assets/photos/Maria_Kauffmann.jpeg" />
          </div>

          <div className="my-7 grid grid-cols-1 gap-4">
            <StudentCard nome="Mayara Ferreira" hobby="" fotoUrl="src/assets/photos/mayara.jpeg" />
            <StudentCard nome="Melanie Miranda" hobby="Passear com minha família" fotoUrl="src/assets/photos/mel.jpeg" />
            <StudentCard nome="Natalia Martins" hobby="" fotoUrl="src/assets/photos/natalia_martins.jpg" />
            <StudentCard nome="Patricia Faustino" hobby="Cozinhar e assistir doramas" fotoUrl="src/assets/photos/patricia.jpeg" />
            <StudentCard nome="Paula Luiza" hobby="Ler livros de romance" fotoUrl="src/assets/photos/paula_luiza.jpeg" />
            <StudentCard nome="Rayane Pimentel" hobby="" fotoUrl="src/assets/photos/rayane.jpeg" />
            <StudentCard nome="Talita Rosa" hobby="Jogos de carta e tabuleiro com os amigos" fotoUrl="src/assets/photos/Talita_Oliveira.jpeg" />
          </div>
        </div>

      </div>
      <Footer />
    </>
  )
}

export default App
