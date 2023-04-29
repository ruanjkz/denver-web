import { AboutUs } from "../components/AboutUs/AboutUs"
import { Customers } from "../components/Customers/Customers"
import { Demonstration } from "../components/Demonstration/Demonstration"
import { Footer } from "../components/Footer/Footer"
import { Header } from "../components/Header/Header"
import { HeroSection } from "../components/HeroSection/HeroSection"
import { HomeButton } from "../components/HomeButton/HomeButton"

function App() {
  return (
    
    <>
      <div className="flex flex-col justify-center items-center">
        <Header/>
        <HeroSection/>
        <AboutUs/>
        <Customers/>
        <HomeButton/>
        <Demonstration/>
        <Footer/>
      </div>
    </>
  )
}

export default App
