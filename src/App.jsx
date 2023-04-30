import Header from "./components/Header"
import Hero from "./components/Hero"
import { SectionBoost } from "./components/SectionBoost"
import { SectionStatistics } from "./components/SectionStatistics"
import {Shrtcode} from "./components/ShrtcodeApi/Shrtcode"


function App() {
  return (
    <div className="app">
      <Header/>
      <main>
        <Hero/>
        <Shrtcode/>
        <SectionStatistics/>
        <SectionBoost/>
      </main>
    </div>
  )
}

export default App
