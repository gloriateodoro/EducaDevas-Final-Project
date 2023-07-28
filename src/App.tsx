import StudentCard from "./components/StudentCard"
import Footer from "./components/Footer"
import Header from "./components/Header"

function App() {
  return (
    <>
      <Header />
      <div className="mx-56 my-10">
        <h1>Confira a nossa equipe:</h1>

        <div id="content" className="grid grid-cols-4 gap-4 p-4">
          <StudentCard nome="Glória Teodoro" ocupacao="Programadora" fotoUrl="src/assets/photos/gloria.png" />
          <StudentCard nome="Beatriz Ramerindo" ocupacao="Programadora" fotoUrl="src/assets/photos/gloria.png" />
          <StudentCard nome="Aline Andrade" ocupacao="Programadora" fotoUrl="src/assets/photos/gloria.png" />
          <StudentCard nome="Amanda Bacelli" ocupacao="Programadora" fotoUrl="src/assets/photos/gloria.png" />
          <StudentCard nome="Lilian Dias" ocupacao="Programadora" fotoUrl="src/assets/photos/gloria.png" />
          <StudentCard nome="Patricia Faustino" ocupacao="Programadora" fotoUrl="src/assets/photos/gloria.png" />
          <StudentCard nome="Mayara Ferreira" ocupacao="Programadora" fotoUrl="src/assets/photos/gloria.png" />
          <StudentCard nome="Gabriela G" ocupacao="Programadora" fotoUrl="src/assets/photos/gloria.png" />
          <StudentCard nome="Joseane Guedes" ocupacao="Programadora" fotoUrl="src/assets/photos/gloria.png" />
          <StudentCard nome="carolina higo" ocupacao="Programadora" fotoUrl="src/assets/photos/gloria.png" />
          <StudentCard nome="Daniele Junior" ocupacao="Programadora" fotoUrl="src/assets/photos/gloria.png" />
          <StudentCard nome="Maria Kauffmann" ocupacao="Programadora" fotoUrl="src/assets/photos/gloria.png" />
          <StudentCard nome="Juliana Kim" ocupacao="Programadora" fotoUrl="src/assets/photos/gloria.png" />
          <StudentCard nome="ana paula Lima" ocupacao="Programadora" fotoUrl="src/assets/photos/gloria.png" />
          <StudentCard nome="Érika Lima" ocupacao="Programadora" fotoUrl="src/assets/photos/gloria.png" />
          <StudentCard nome="Letícia Lima" ocupacao="Programadora" fotoUrl="src/assets/photos/gloria.png" />
          <StudentCard nome="Edilene Lopes do Rosario" ocupacao="Programadora" fotoUrl="src/assets/photos/gloria.png" />
          <StudentCard nome="Janaina Lopes" ocupacao="Programadora" fotoUrl="src/assets/photos/gloria.png" />
          <StudentCard nome="Paula Luiza" ocupacao="Programadora" fotoUrl="src/assets/photos/gloria.png" />
          <StudentCard nome="Natalia Martins" ocupacao="Programadora" fotoUrl="src/assets/photos/gloria.png" />
          <StudentCard nome="Jaqueline Menezes" ocupacao="Programadora" fotoUrl="src/assets/photos/gloria.png" />
          <StudentCard nome="Melanie Miranda" ocupacao="Programadora" fotoUrl="src/assets/photos/gloria.png" />
          <StudentCard nome="Larissa Monteiro" ocupacao="Programadora" fotoUrl="src/assets/photos/gloria.png" />
          <StudentCard nome="Juliane Monteiro Pires" ocupacao="Programadora" fotoUrl="src/assets/photos/gloria.png" />
          <StudentCard nome="Larissa Oliveira" ocupacao="Programadora" fotoUrl="src/assets/photos/gloria.png" />
          <StudentCard nome="Rayane Pimentel" ocupacao="Programadora" fotoUrl="src/assets/photos/gloria.png" />
          <StudentCard nome="Camila Ribeiro" ocupacao="Programadora" fotoUrl="src/assets/photos/gloria.png" />
          <StudentCard nome="Anna Maria Rodrigues" ocupacao="Programadora" fotoUrl="src/assets/photos/gloria.png" />
          <StudentCard nome="Talita Rosa" ocupacao="Programadora" fotoUrl="src/assets/photos/gloria.png" />
          <StudentCard nome="Darielly Santos" ocupacao="Programadora" fotoUrl="src/assets/photos/gloria.png" />
          <StudentCard nome="Aryanne Silva" ocupacao="Programadora" fotoUrl="src/assets/photos/gloria.png" />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
