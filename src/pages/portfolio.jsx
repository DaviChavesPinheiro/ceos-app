import Head from 'next/head'
import Header from "../components/Header";
import { Section } from "../styles/global";
import Contact from "../sections/Contact";
import Main from "../sections/Portfolio/Main";
import Projects from "../sections/Portfolio/Projects";
import Depoimentos from "../sections/Portfolio/Depoimentos";
import Footer from "../components/Footer";

export default function Portfolio() {
  return (
    <div>
      <Head>
        <title>CEOS - Projetos</title>
      </Head>
      <Header></Header>
      <main>
        <Main></Main>

        <Projects></Projects>

        <Depoimentos></Depoimentos>

        <Contact></Contact>
      </main>

      <Footer></Footer>
    </div>
  )
}
