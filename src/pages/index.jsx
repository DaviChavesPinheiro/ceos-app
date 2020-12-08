import Head from 'next/head'
import { Section } from "../styles/global";
import Contact from "../sections/Contact";
import Main from "../sections/Home/Main";
import Services from "../sections/Home/Services";
import AboutUs from "../sections/Home/AboutUs";
import Portifolio from "../sections/Home/Portfolio";
import OurGoals from "../sections/Home/OurGoals";
import OurTeam from "../sections/Home/OurTeam";
import Depoimentos from "../sections/Home/Depoimentos";
import { Description, SectionTitle, Title } from "../styles/global";

import Button from "../components/Button";


export default function HomePage() {
  return (
    <div>
      <Head>
        <title>CEOS - Empresa Júnior de Computação</title>
      </Head>

      <main>

        <Main></Main>

        <Services></Services>

        <AboutUs></AboutUs>

        <Portifolio></Portifolio>

        <OurGoals></OurGoals>

        <OurTeam></OurTeam>

        <Depoimentos></Depoimentos>

        <Contact></Contact>
      </main>

      <footer >
        <p>Footer</p>
      </footer>
    </div>
  )
}
