import Banner from "./components/Banner/Banner"
import Blog from "./components/Blog/Blog"
import Company from "./components/Company/Company"
import Copyright from "./components/Copyright/Copyright"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Logo from "./components/Logo/Logo"
import Map from "./components/Map/Map"
import Member from "./components/Member/Member"
import Navbar from "./components/Navbar/Navbar"
import Services from "./components/Services/Services"
import Slider from "./components/Slider/Slider"
import Supplier from "./components/Supplier/Supplier"


function App() {

  return (
    <>
    <Header/>
    <Navbar/>
    <Banner/>
    <Supplier/>
    <Slider/>
    <Services/>
    <Company/>
    <Logo/>
    <Blog/>
    <Map/>
    <Member/>
    <Footer/>
    <Copyright/>
    </>
  )
}

export default App
