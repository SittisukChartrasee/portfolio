import { Navbar } from "./src/components"
import { 
  ContantScreen,
  HomeScreen,
  PortfolioScreen,
  SkillScreen,
} from "./src/screen"

function App() {
  return (
    <div className="w-screen">
      <div className="w-full xl:w-[1243px] mx-auto">
        <Navbar />
        <HomeScreen />
        <PortfolioScreen />
        <SkillScreen />
        <ContantScreen />
      </div>
    </div>
  )
}

export default App
