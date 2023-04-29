import { AboutUs } from "../components/AboutUs/AboutUs"
import { Customers } from "../components/Customers/Customers"
import { Header } from "../components/Header/Header"
import { HeroSection } from "../components/HeroSection/HeroSection"

function App() {
  return (
    
    <>
      <div className="ml-40 w-4/5">
        <Header/>
        <HeroSection/>
        <AboutUs/>
        <Customers/>
      </div>
    </>
  )
}

export default App
