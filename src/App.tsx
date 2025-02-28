import { Navbar } from "./src/components"
import { HomeScreen, SkillScreen } from "./src/screen"

function App() {

  return (
    <div className="w-screen">
      <div className="w-full xl:w-[1243px] mx-auto">
        <Navbar />
        <HomeScreen />
        <SkillScreen />
        {/* <div className="border-2 border-yellow-50">
          <h2 className="text-white text-2xl font-semibold mb-4">Responsive Component</h2>
          <p className="text-white">
            This container adjusts its width based on the screen size:
            - Full width on small screens
            - 80% width on medium screens
            - 70% width on large screens
            - 1243px width on extra-large screens
          </p>
        </div> */}
      </div>
    </div>
  )
}

export default App
