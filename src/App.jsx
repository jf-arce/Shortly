import Header from "./components/Header"
import Hero from "./components/Hero"
import {Shrtcode} from "./components/ShrtcodeApi/Shrtcode"


function App() {
  return (
    <div className="app">
      <Header/>
      <main>
        <Hero/>
        <Shrtcode/>
      </main>
    </div>
  )
}

export default App
