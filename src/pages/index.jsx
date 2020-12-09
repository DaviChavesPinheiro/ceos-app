import Head from 'next/head'
import Contact from "../sections/Contact";
import Main from "../sections/Home/Main";
import Services from "../sections/Home/Services";
import AboutUs from "../sections/Home/AboutUs";
import Portifolio from "../sections/Home/Portfolio";
import OurGoals from "../sections/Home/OurGoals";
import OurTeam from "../sections/Home/OurTeam";
import Depoimentos from "../sections/Home/Depoimentos";
import Header from "../components/Header";
import Footer from "../components/Footer";


export default function HomePage() {
  return (
    <div>
      <Head>
        <title>CEOS - Empresa Júnior de Computação</title>
      </Head>

      <main>
        <Header></Header>

        <Main></Main>

        <Services></Services>

        <AboutUs></AboutUs>

        <Portifolio></Portifolio>

        <OurGoals></OurGoals>

        <OurTeam></OurTeam>

        <Depoimentos></Depoimentos>

        <Contact></Contact>
      </main>

      <Footer></Footer>
    </div>
  )
}
